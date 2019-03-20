import React from 'react';
import Auxiliry from '../../../hoc/Auxiliry';


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
            <p>Continue to Checkout</p>
        </Auxiliry>
    )
};

export default orderSummary;