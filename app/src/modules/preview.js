import React from 'react';
import Marked from 'marked';

Marked.setOptions({
  gfm: true
});

const Preview = (props) => {
  return(
    <div id="preview" dangerouslySetInnerHTML={{__html: Marked(props.text)}}></div>
  );
};
    
export default Preview;