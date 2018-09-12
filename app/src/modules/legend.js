import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Legend = (props) => {
    return(
        <fieldset id="legend">
            <legend id="legend-collapse" className="char" onClick={props.toggle}>Legend {props.icon}</legend>
            <TransitionGroup>
                <CSSTransition
                    key={props.status}
                    timeout={500}
                    classNames="collapse"
                >
                    {props.list}
                </CSSTransition>
            </TransitionGroup>
        </fieldset>
    );
}

export default Legend;