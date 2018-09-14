import React from 'react';

const Editor = (props) => {
    return(
        <div>
            <h3 id="editor-title">Editor</h3>
            <textarea 
                id="editor" 
                value={props.val} 
                onChange={props.handler}
                onKeyUp={props.keyup}
            ></textarea>
        </div>
    );
};

export default Editor;