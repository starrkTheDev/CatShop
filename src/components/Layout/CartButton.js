import classes from "./CartButton.module.css";

const CartButton = props => {


    return (
        <button className={classes.button}
            onClick={props.onClick}>
            <span>Cart </span>
            <span className={classes.cart_span}>4</span>
        </button>

    );
};

export default CartButton;