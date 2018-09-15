import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// legend component with helpful information for users
// toggled close by default
const Legend = (props) => {
    return(
        <fieldset id="legend">
            <legend id="legend-collapse" className="char" onClick={props.toggle}>Legend {props.legend.icon} </legend>
            <TransitionGroup>
                <CSSTransition
                    key={props.legend.status}
                    timeout={300}
                    classNames="collapse"
                >
                    {props.legend.list}
                </CSSTransition>
            </TransitionGroup>
        </fieldset>
    );
}

export default Legend;