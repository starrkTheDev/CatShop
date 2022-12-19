import classes from './Cart.module.css';

const OrderButton = props => {
    return (
        <button onClick={props.onOrder} className={classes.orderButton}>Order</button>
    )
};

export default OrderButton;