import React from 'react';

import Auxiliary from '../../../hoc/Auxiliar';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey} : {props.ingredients[igKey]}</span>
            </li>);
    });

    return (
        <Auxiliary>
            <h3>Your Order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType="Danger" clicked={props.cancelClicked}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.continueClicked}>CONTINUE</Button>
        </Auxiliary>
    );
}

export default orderSummary;