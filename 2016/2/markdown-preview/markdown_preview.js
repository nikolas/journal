
    var MarkdownPreview = function($textarea, $previewArea) {
        this.reader = commonmark.Parser();
        this.writer = commonmark.HtmlRenderer();
        this.$textarea = $textarea;
        this.$previewArea = $previewArea;
    };

    MarkdownPreview.prototype.refresh = function(comment) {
        var parsed = this.reader.parse(comment);
        var rendered = this.writer.render(parsed);
        if (typeof window.linkifyHtml === 'function') {
            rendered = window.linkifyHtml(rendered);
        }
        this.$previewArea.html(rendered);
    };

    MarkdownPreview.prototype.startEventHandler = function() {
        var me = this;
        this.$textarea.on('change keyup', function(e) {
            var comment = $(e.target).val();
            me.refresh(comment);
        });
    };
