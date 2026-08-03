#!/usr/bin/env ruby

site_path = ARGV.fetch(0, "src/data/site.ts")
catalog_root = ARGV.fetch(1, "public/img/catalog")

manual_images = %w[
  kit-hilux-gr-sport
  kit-hilux-raptor-style
  kit-fortuner-legender
  kit-ranger-f150-style
]

slug_images = {
  "kit-ranger-t9-a-raptor-2022" => "ford/kit-de-t9-ranger-2022-a-ranger-raptor-compatible-con-xlt-wildtrake-sport.png",
  "kit-carroceria-delantera-ranger-raptor-2022" => "ford/kit-carrocera-delantera-para-ford-raptor-2022.png",
  "kit-accesorios-ford-ranger-t6-t9" => "incoming/kit-de-accesorios-ford-para-camionetas-pickup-t6-a-t9.png",
  "faros-delanteros-ford-dos-lentes-2022" => "incoming/faro-delantero-con-2-lentes-compatible-para-una-camioneta-pickup-2022.jpg",
  "faros-delanteros-ford-alta-densidad-2022" => "incoming/faro-delantero-alta-densidad-compatible-para-una-camioneta-pickup-2022.jpg",
  "faro-delantero-revo-travo" => "incoming/faro-delantero-para-camioneta-revo-modelo-travo.png",
  "faro-delantero-revo-chrome" => "incoming/faro-delantero-para-camioneta-revo-chrome.png",
  "faro-posterior-revo-travo" => "incoming/faro-trasero-para-camioneta-revo-modelo-travo.png",
  "faro-posterior-ford-importacion" => "incoming/faro-posterior-para-camioneta-ford.jpg",
  "parachoques-delantero-hilux-gr" => "incoming/protector-de-carter-gr-sport-para-camioneta-pickup.png",
  "parachoques-delantero-fortuner" => "incoming/protector-de-carter-para-camioneta-pickup.png",
  "parachoques-trasero-ranger-2022-plateado" => "incoming/parachoques-traseros-para-camioneta-ranger-2022-color-plateado.png",
  "guardafangos-hilux-gr-genericos" => "incoming/guardafangos-genricos-gr-sport.png",
  "fender-flares-f150-led-2021-2024" => "ford/fender-flares-with-led-lights-for-f150-black-2021-24.png",
  "parrilla-f150-lariat-2025-raptor-2026" => "ford/rejilla-para-conversion-f-15o-lariat-2025-al-model-raptor-2026.png",
  "parrilla-ford-pickup-led-importacion" => "incoming/rejilla-delantera-para-camioneta-pickup-con-luces-led.png",
  "neblineros-led-hilux" => "incoming/luces-neblineros-para-parrillas-camionetas-hilux.png",
  "chip-drl-ford-alta-densidad" => "incoming/drl-chip-para-luces-alta-densidad.png",
  "chip-drl-ford-baja-densidad" => "incoming/drl-chip-para-luces-baja-densidad.png",
  "pisaderas-fortuner" => "ford/pisaderas-para-conversion-f-150xlt-2025-al-model-raptor-2026.png",
  "pisaderas-ranger-tipo-raptor-importacion" => "incoming/estribos-para-camioneta-ranger-pickup-tipo-raptor.png",
  "cubrelluvias-fortuner" => "incoming/correlluvias-para-toyota-hilux.png",
  "cubrelluvias-ranger-importacion" => "incoming/correlluvias-para-camionetas-ford-ranger.png",
  "cubrelluvias-silverado-zti" => "incoming/correlluvia-para-camioneta-silverado-zti.png",
  "moldura-timon-carbono-forjado" => "incoming/moldura-de-timn-forjado.png",
  "letras-r-parrilla-ford-raptor" => "incoming/letras-r-para-las-rejillas-de-camionetas-ford-raptor.png",
  "adorno-capo-f150-lariat-raptor-2026" => "ford/adorno-para-cap-conversion-f-15o-lariat-2025-al-model-raptor-2026.png",
  "pegatinas-ford-raptor-xl-xls-xlt" => "incoming/pegatinas-para-raptor-xl-xls-xlt.png",
  "tolva-ford-ranger" => "incoming/tolva-para-camioneta-ford-ranger.png",
}

def normalized_sku(value)
  value.downcase.gsub(/[^a-z0-9]/, "")
end

catalog_files = Dir.glob(File.join(catalog_root, "**", "*"), File::FNM_DOTMATCH)
  .select { |path| File.file?(path) }

relative_url = lambda do |path|
  relative = path.sub(%r{\Apublic}, "")
  relative.start_with?("/") ? relative : "/#{relative}"
end

site = File.read(site_path)
assigned = 0

site = site.gsub(/      \{\n        slug: "[^"]+",.*?\n      \},/m) do |block|
  slug = block[/slug: "([^"]+)"/, 1]
  next block if manual_images.include?(slug)

  sku = block[/sku: "([^"]+)"/, 1]
  matches = if sku
    normalized = normalized_sku(sku)
    catalog_files.select do |path|
      base = File.basename(path, File.extname(path))
      normalized_sku(base).start_with?(normalized)
    end
  elsif slug_images[slug]
    [File.join(catalog_root, slug_images[slug])]
  else
    []
  end
  matches = matches.select { |path| File.file?(path) }.uniq
  next block if matches.empty?

  matches.sort_by! do |path|
    base = File.basename(path, File.extname(path))
    [base.match?(/-\d+\z/) ? 1 : 0, path]
  end
  main, *additional = matches
  main_url = relative_url.call(main)
  additional_urls = additional.map { |path| relative_url.call(path) }

  updated = block.sub(/        image: "[^"]+",/, "        image: \"#{main_url}\",")
  updated = updated.sub(/\n        images: \[.*?\],/m, "")
  unless additional_urls.empty?
    values = additional_urls.map { |url| "\"#{url}\"" }.join(", ")
    updated = updated.sub(
      /        image: "#{Regexp.escape(main_url)}",/,
      "        image: \"#{main_url}\",\n        images: [#{values}],"
    )
  end
  assigned += 1
  updated
end

File.write(site_path, site)
warn "assigned catalog images to #{assigned} products"
