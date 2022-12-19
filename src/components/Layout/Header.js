import { Fragment } from "react";
import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.h1}>Cat Shop - your place to find happiness (and scars)</h1>
                <CartButton onClick={props.onCartClick} />
            </header>
            <div></div>
        </Fragment>
    )
};

export default Header;