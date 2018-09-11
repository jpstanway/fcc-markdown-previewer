import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Legend = (props) => {
    return(
        <fieldset id="legend">
            <legend id="legend-collapse" className="char" onClick={props.collapse}>Legend
                <TransitionGroup id="transition-div">
                    <CSSTransition
                        key={props.collapse}
                        timeout={500}
                        classNames="collapse"
                    >
                        {props.icon} 
                    </CSSTransition>
                </TransitionGroup>
            </legend>
            <div id="list-container">
                <ul className="legend-list">
                    <li><span className="char">#</span> for 
                        <span className="element"> h1</span>
                    </li>
                    <li><span className="char">##</span> for 
                        <span className="element">h2</span>
                    </li>
                    <li><span className="char">###</span> for 
                        <span className="element"> h2</span>
                    </li>
                    <li><span className="char">[link text](url)</span> for 
                        <span className="element"> links</span>
                    </li>
                </ul>
                <ul className="legend-list">
                    <li><span className="char">`&lt;div&gt;&lt;/div&gt;`</span> for 
                        <span className="element"> inline code</span>
                    </li>
                    <li><span className="char">```&lt;div&gt;&lt;/div&gt;```</span> for 
                        <span className="element"> multi-line code</span>
                    </li>
                    <li><span className="char">- list item</span> for 
                        <span className="element"> lists</span>
                    </li>
                    <li><span className="char">> text</span> for 
                        <span className="element"> blockquotes</span>
                    </li>
                </ul>
                <ul className="legend-list">
                    <li><span className="char">![img text](url)</span> for 
                        <span className="element"> images</span>
                    </li>
                    <li><span className="char">**text**</span> for 
                        <span className="element"> bold text</span>
                    </li>
                    <li className="element">for more options check out the <a 
                        href="https://github.github.com/gfm/" target="_blank" 
                        rel="noopener noreferrer">gfm</a> docs
                    </li>
                </ul>
            </div>
        </fieldset>
    );
}

export default Legend;