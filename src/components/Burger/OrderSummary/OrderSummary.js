import React, {Component} from 'react';
import Auxiliry from '../../../hoc/Auxiliry/Auxiliry';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    
    //This could be a functional component, doesn't have to be a class component
    componentWillUpdate(){
        console.log('[Order Summary] WillUpdate]');
    }

    render(){
        const ingriedientSummary = Object.keys(this.props.ingredients)
        .map(igKey =>{
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
        });


    return (
        <Auxiliry>
            <h3>Your order</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>
                {ingriedientSummary}
            </ul>
            <p><b>Total Price: {this.props.price.toFixed(2)}€</b></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={this.props.purchasedCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchasedContinued}>CONTINUE</Button>
        </Auxiliry>
        )
    }
} 
export default OrderSummary;