import React from 'react';
import Marked from 'marked';

// set GitHub Flavored Markdown to true in Marked options
Marked.setOptions({
  gfm: true
});

// assign target="_blank" to anchor elements via Marked renderer method
let renderer = new Marked.Renderer();

renderer.link = function(href, title, text) {
  return `<a href="${href}" target="_blank">${text}</a>`;
}

// Preview component rendered with Marked
const Preview = (props) => {
  return(
    <div>
      <h3 id="preview-title">Preview</h3>
      <div id="preview" dangerouslySetInnerHTML={{__html: Marked(props.text, { renderer: renderer })}}></div>
    </div>
  );
};
    
export default Preview;