import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

const Overlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.items}>{props.children}</div>
        </div>
    )
};

const portalSource = document.getElementById('overlay');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal
                (<Backdrop onClose={props.onClose} />, portalSource)}
            {ReactDOM.createPortal
                (<Overlay>{props.children}</Overlay>, portalSource)}
        </Fragment>
    )
};

export default Modal;