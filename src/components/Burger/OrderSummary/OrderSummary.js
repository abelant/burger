import React from 'react';
import Auxiliry from '../../../hoc/Auxiliry';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingriedientSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });


    return (
        <Auxiliry>
            <h3>Your order</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>
                {ingriedientSummary}
            </ul>
            <p><b>Total Price: {props.price.toFixed(2)}€</b></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchasedCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchasedContinued}>CONTINUE</Button>
        </Auxiliry>
    )
};

export default orderSummary;