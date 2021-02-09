import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
    return (<div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(c => {
            return <BuildControl
                key={c.label}
                label={c.label}
                moreButtonHandler={() => props.ingredientAdded(c.type)}
                lessButtonHandler={() => props.ingredientRemove(c.type)}
                disabled={props.disabledValues[c.type] === 0}
            />
        })}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.orderClicked}>ORDER NOW</button>
    </div>
    );
}

export default buildControls;