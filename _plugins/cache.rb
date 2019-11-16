module Cache
  class Generator < Jekyll::Generator
    def generate(site)
      cache = {}
      title_by_url = cache['title_by_url'] = {}
      for page in site.pages do
        title_by_url[page['url']] = page.data['title']
      end
      site.data['cache'] = cache
    end
  end
end
