#!/usr/bin/env ruby

require "fileutils"
require "rexml/document"
require "rexml/xpath"

abort "usage: #{$PROGRAM_NAME} INPUT.xlsx SOURCE OUTPUT_DIR" unless ARGV.length == 3

input, source, output_dir = ARGV
FileUtils.mkdir_p(output_dir)

def zip_read(input, member)
  IO.popen(["unzip", "-p", input, member], "rb", &:read)
end

def text_nodes(node, path)
  REXML::XPath.match(node, path).map { |item| item.text.to_s }.join
end

def slugify(value)
  value
    .downcase
    .encode("ASCII", invalid: :replace, undef: :replace, replace: "")
    .gsub(/[^a-z0-9]+/, "-")
    .gsub(/\A-+|-+\z/, "")
end

shared_strings = []
shared_xml = zip_read(input, "xl/sharedStrings.xml")
unless shared_xml.empty?
  document = REXML::Document.new(shared_xml)
  REXML::XPath.each(document, "//*[local-name()='si']") do |item|
    shared_strings << text_nodes(item, ".//*[local-name()='t']")
  end
end

sheet_rows = {}
sheet = REXML::Document.new(zip_read(input, "xl/worksheets/sheet1.xml"))
REXML::XPath.each(sheet, "//*[local-name()='row']") do |row|
  cells = {}
  REXML::XPath.each(row, "./*[local-name()='c']") do |cell|
    column = cell.attributes["r"].sub(/\d+/, "")
    type = cell.attributes["t"]
    raw = REXML::XPath.first(cell, "./*[local-name()='v']")&.text
    inline = text_nodes(cell, ".//*[local-name()='t']")
    value = if type == "s" && raw
      shared_strings[raw.to_i]
    elsif type == "inlineStr"
      inline
    else
      raw
    end
    cells[column] = value.to_s.gsub(/[\r\n\t]+/, " ").strip
  end
  sheet_rows[row.attributes["r"].to_i] = cells
end

workbook_kind = case source.downcase
when "ford" then :ford
when "toyota" then :toyota
else :incoming
end

def product_info(kind, row)
  case kind
  when :ford
    [row["B"], row["D"], "Ford"]
  when :toyota
    [row["C"], row["E"], "Toyota"]
  else
    [nil, row["B"], row["C"]]
  end
end

relationships = REXML::Document.new(zip_read(input, "xl/drawings/_rels/drawing1.xml.rels"))
targets = {}
REXML::XPath.each(relationships, "//*[local-name()='Relationship']") do |relationship|
  targets[relationship.attributes["Id"]] = relationship.attributes["Target"].sub("../", "xl/")
end

drawing = REXML::Document.new(zip_read(input, "xl/drawings/drawing1.xml"))
manifest = []
used_names = Hash.new(0)

REXML::XPath.each(drawing, "//*[local-name()='twoCellAnchor' or local-name()='oneCellAnchor']") do |anchor|
  from = REXML::XPath.first(anchor, "./*[local-name()='from']")
  next unless from

  zero_based_row = REXML::XPath.first(from, "./*[local-name()='row']")&.text.to_i
  zero_based_col = REXML::XPath.first(from, "./*[local-name()='col']")&.text.to_i
  excel_row = zero_based_row + 1
  embed = REXML::XPath.first(anchor, ".//*[local-name()='blip']")&.attributes&.[]("r:embed")
  target = targets[embed]
  next unless target

  row = sheet_rows[excel_row] || {}
  sku, description, brand = product_info(workbook_kind, row)
  next if description.to_s.empty?

  extension = File.extname(target).downcase.sub(".jpeg", ".jpg")
  base = slugify(sku.to_s.empty? ? description : sku)
  base = "#{source}-row-#{excel_row}" if base.empty?
  used_names[base] += 1
  suffix = used_names[base] > 1 ? "-#{used_names[base]}" : ""
  filename = "#{base}#{suffix}#{extension}"
  output_path = File.join(output_dir, filename)
  File.binwrite(output_path, zip_read(input, target))

  manifest << [source, excel_row, zero_based_col, sku, brand, description, filename]
end

puts "source\trow\tcolumn\tsku\tbrand\tdescription\tfilename" if ENV["MANIFEST_HEADER"] == "1"
manifest.sort_by { |entry| entry[1] }.each do |entry|
  puts entry.map { |value| value.to_s.gsub(/[\r\n\t]+/, " ") }.join("\t")
end
