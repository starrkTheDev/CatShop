import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import OrderButton from "./OrderButton";

const Cart = props => {


    const cartItems = <ul className={classes.cartUl}><li>
        <p>- Gakster</p>
        <p>- Loaf</p>
        <p>- Rat</p>
        <p>- George</p>
    </li></ul>;

    return (
        <Modal onClose={props.onClose}>
            <div className={classes.cats}>
                {cartItems}
            </div>
            <div className={classes.cash}>
                <span>Total Amount</span>
                <span>220$</span>
            </div>
            <div className={classes.buttons}>
                <span className={classes.info}>
                    Did you really wanted to buy less than all of them? Shame on you!
                </span>
                <button className={classes.closeButton}
                    onClick={props.onClose}>Close</button>
                <OrderButton onOrder={props.onOrderClick}>Order</OrderButton>
            </div>
        </Modal>
    )
};

export default Cart;