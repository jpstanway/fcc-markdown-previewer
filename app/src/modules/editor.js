import React from 'react';

const Editor = (props) => {
    return(
        <textarea id="editor" onChange={props.handler}></textarea>
    );
};

export default Editor;