var React = require('react');
var ReactDOM = require('react-dom');
var Markdown = require('markdown').markdown;

var MarkdownEditorPreview = React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired
  },

  render: function() {
    // Breaklines in markdown are actually when a line is ended with two spaces + carriage-return
    var htmlContent = this.props.content.replace(/[\n]/g, '  \n');
    htmlContent = Markdown.toHTML(htmlContent);

    var styleMarkdownPreviewArea = {
      'height': '90%',
      'width': '100%',
      'padding': '30px 10px',
      'backgroundColor': '#fff',
      'border': 'none'
    };

    if(this.props.hasOwnProperty('styles') && this.props.styles.hasOwnProperty('styleMarkdownPreviewArea')) {
        Object.assign(styleMarkdownPreviewArea, this.props.styles.styleMarkdownPreviewArea)
    }

    return (
      <div
        style={styleMarkdownPreviewArea}
        dangerouslySetInnerHTML={{__html: htmlContent}}
      />
    );
  }
});

module.exports = MarkdownEditorPreview