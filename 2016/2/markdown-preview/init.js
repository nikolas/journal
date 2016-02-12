$(document).ready(function() {
        window.preview = new MarkdownPreview($('textarea.markdown'), $('.markdown-preview'));
        window.preview.startEventHandler();
});