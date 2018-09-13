import React from 'react';

const Editor = (props) => {
    return(
        <div>
            <h3>Editor</h3>
            <textarea 
                id="editor" 
                value={props.val} 
                onChange={props.handler}
                onKeyDown={props.keydown}
            ></textarea>
        </div>
    );
};

export default Editor;