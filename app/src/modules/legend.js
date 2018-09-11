import React from 'react';

const Legend = (props) => {
    return(
        <fieldset id="legend">
            <legend className="char">Legend</legend>
            <div id="list-container">
                <ul className="legend-list">
                    <li><span className="char">#</span> for <span className="element">h1</span></li>
                    <li><span className="char">##</span> for <span className="element">h2</span></li>
                    <li><span className="char">###</span> for <span className="element">h2</span></li>
                    <li><span className="char">[link text](url)</span> for <span className="element">links</span></li>
                </ul>
                <ul className="legend-list">
                    <li><span className="char">`&lt;div&gt;&lt;/div&gt;`</span> for <span className="element">inline code</span></li>
                    <li><span className="char">```&lt;div&gt;&lt;/div&gt;```</span> for <span className="element">multi-line code</span></li>
                    <li><span className="char">- list item</span> for <span className="element">lists</span></li>
                    <li><span className="char">> text</span> for <span className="element">blockquotes</span></li>
                </ul>
                <ul className="legend-list">
                    <li><span className="char">![img text](url)</span> for <span className="element">images</span></li>
                    <li><span className="char">**text**</span> for <span className="element">bold text</span></li>
                    <li className="element">for more options check out the <a href="https://github.github.com/gfm/" target="_blank" rel="noopener noreferrer">gfm</a> docs</li>
                </ul>
            </div>
        </fieldset>
    );
}

export default Legend;