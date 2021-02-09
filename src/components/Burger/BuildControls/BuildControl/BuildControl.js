import React from 'react';

import x from './BuildControl.css';

const buildControl = (props) => (
    <div className={x.BuildControl}>
        <div className={x.Label}>{props.label}</div>
        <button className={x.Less} onClick={props.lessButtonHandler} disabled={props.disabled}>Less</button>
        <button className={x.More} onClick={props.moreButtonHandler}>More</button>
    </div>
);

export default buildControl;