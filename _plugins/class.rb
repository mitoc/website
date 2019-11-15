module Jekyll
  class RenderPanel < Liquid::Block

    def initialize(tag_name, markup, tokens)
      super
      @class = markup.strip
    end


    def render(context)
      site = context.registers[:site]
      converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
      content = converter.convert(super)

      <<~EOF
        <div class="#{@class}">
          #{content}
        </div>
      EOF
    end

  end
end

Liquid::Template.register_tag('class', Jekyll::RenderPanel)
