import React from 'react';

const Editor = (props) => {
    return(
        <textarea id="editor" value={props.val} onChange={props.handler}></textarea>
    );
};

export default Editor;