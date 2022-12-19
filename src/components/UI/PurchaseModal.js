import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

const BuyBackdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

const BuyOverlay = props => {
    return (
        <div className={classes.buyModal}>
            <div className={classes.items}>{props.children}</div>
        </div>
    )
};

const portalSource = document.getElementById('buy-overlay');

const PurchaseModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal
                (<BuyBackdrop onBuy={props.onBuy} />, portalSource)}
            {ReactDOM.createPortal
                (<BuyOverlay>{props.children}</BuyOverlay>, portalSource)}
        </Fragment>
    )
};

export default PurchaseModal;