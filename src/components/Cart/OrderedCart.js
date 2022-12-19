import PurchaseModal from "../UI/PurchaseModal";
import classes from "./Cart.module.css";

const OrderedCart = props => {
    return (
        <PurchaseModal>
            <div className={classes.purchase}>
                <div>Thank you for your purchase! Our cat delivery will visit you soon!</div>
                <button className={classes.close} onClick={props.onFinish}>Close</button>
            </div>
        </PurchaseModal>
    )
};

export default OrderedCart;