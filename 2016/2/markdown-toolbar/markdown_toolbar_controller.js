    var MarkdownToolbarController = function() {
    };

    MarkdownToolbarController.prototype.render = function(
        d, selectionStart, selectionEnd, text
    ) {
        var selectedText = text.substr(selectionStart, selectionEnd);
        if (selectedText.match(/\n/) &&
            d['blockPrefix'] &&
            d['blockSuffix']
           ) {
            if (d['blockPrefix']) {
                text = this.renderBlockPrefix(
                    selectionStart, selectionEnd, d, text);
            }

            if (d['blockSuffix']) {
                text = this.renderBlockSuffix(
                    selectionStart, selectionEnd, this.prefixLength,
                    d, text);
            }
        } else {
            if (d.prefix) {
                text = this.renderPrefix(
                    selectionStart, selectionEnd, d, text);
            }

            if (d.suffix) {
                text = this.renderSuffix(
                    selectionStart, selectionEnd, this.prefixLength,
                    d, text);
            }
        }

        return text;
    };

    MarkdownToolbarController.prototype.renderPrefix = function(
        selectionStart, selectionEnd, d, text
    ) {
        this.prefixLength = d.prefix.length;
        var s;

        if (d.multiline) {
            var before = text.substr(0, selectionStart);
            var snippet = text.substr(selectionStart, selectionEnd);
            var after = text.substr(selectionEnd, text.length);
            snippet = snippet.replace(/^/, d.prefix);
            snippet = snippet.replace(/\n/g, '\n' + d.prefix);
            s = before + snippet + after;
        } else {
            s = text.substr(0, selectionStart);
            s += d.prefix;
            s += text.substr(selectionStart, text.length);
        }
        return s;
    };

    MarkdownToolbarController.prototype.renderSuffix = function(
        selectionStart, selectionEnd, prefixLength, d, text
    ) {
        selectionEnd += prefixLength;
        var s = text.substr(0, selectionEnd);
        s += d.suffix;
        s += text.substr(selectionEnd, text.length);
        return s;
    };

    MarkdownToolbarController.prototype.renderBlockPrefix = function(
        selectionStart, selectionEnd, d, text
    ) {
        this.prefixLength = d['blockPrefix'].length + 1;
        var s = text.substr(0, selectionStart);
        s += d['blockPrefix'] + '\n';
        s += text.substr(selectionStart, text.length);
        return s;
    };

    MarkdownToolbarController.prototype.renderBlockSuffix = function(
        selectionStart, selectionEnd, blockPrefixLength, d, text
    ) {
        selectionEnd += blockPrefixLength + 1;
        var s = text.substr(0, selectionEnd);
        s += '\n' + d['blockSuffix'];
        s += text.substr(selectionEnd, text.length);
        return s;
    };
