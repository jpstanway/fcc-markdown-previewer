import React from 'react';
import LegendList from './legend-list';

// open and close state for legend component
const LegendStatus = {
    opened: {
        icon: <i id="collapser" className="fas fa-minus-circle"></i>,
        list: <LegendList />,
        status: "legendOn"
    },
    closed: {
        icon: <i id="collapser" className="fas fa-plus-circle"></i>,
        list: <div></div>,
        status: "legendOff"
    }
};

export default LegendStatus;