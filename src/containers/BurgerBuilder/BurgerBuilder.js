import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliar';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
};

export class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        order: false
    };

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateIngredeints = {
            ...this.state.ingredients
        };
        updateIngredeints[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, ingredients: updateIngredeints });
        this.updatePurchasable(updateIngredeints);
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) { return; }
        const newCount = oldCount - 1;
        const updateIngredeints = { ...this.state.ingredients };
        updateIngredeints[type] = newCount;

        const priceDiff = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDiff;

        this.setState({ totalPrice: newPrice, ingredients: updateIngredeints });
        this.updatePurchasable(updateIngredeints);
    }

    updatePurchasable = (updatedIngredients) => {
        const ingredients = { ...updatedIngredients };
        const sum = Object.keys(ingredients).map(igKey => ingredients[igKey]).
            reduce((sum, el) => { return sum + el; }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    btnOrderClick = () => {
        this.setState({ order: true });
    }

    orderCancel = () => {
        this.setState({ order: false });
    }

    orderContinue = () => {
        alert('You continue!');
    }

    render() {
        const disabledVals = { ...this.state.ingredients };

        return (
            <Auxiliary>
                <Modal show={this.state.order} backdropClick={this.orderCancel}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancelClicked={this.orderCancel}
                        continueClicked={this.orderContinue}
                        totalPrice={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    ingredientAdded={this.addIngredient}
                    ingredientRemove={this.removeIngredient}
                    disabledValues={disabledVals}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    orderClicked={this.btnOrderClick}
                ></BuildControls>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;