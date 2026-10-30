require 'json'

# Writes _site/search/gnarmpfsk-pages.json: one entry per transcribed article
# or story under /about/gnarmpfsk/ that is listed on the archive page (a
# `type` in the front matter means it is), with the page's body text. The
# archive at /about/gnarmpfsk fetches this on first search so the stories'
# full text does not have to sit in the archive page's own HTML.
Jekyll::Hooks.register :site, :post_write do |site|
  pages = {}
  site.pages.each do |page|
    next unless page.url.start_with?('/about/gnarmpfsk/')
    next unless page.data['type']
    # By post_write, page.content has been through Liquid and the Markdown
    # converter, so stripping tags is enough to get the plain text.
    text = page.content.to_s
                      .gsub(/<[^>]+>/, ' ')
                      .gsub(/\s+/, ' ')
                      .strip
    pages[page.url] = text unless text.empty?
  end
  dest = File.join(site.dest, 'search', 'gnarmpfsk-pages.json')
  FileUtils.mkdir_p(File.dirname(dest))
  File.write(dest, JSON.generate(
    'generated' => Time.now.utc.strftime('%Y-%m-%d'),
    'pages' => pages
  ))
end
