import classes from "./AddButton.module.css";
import { React, useState } from "react";

const AddButton = (props) => {

    const submitHandler = (event) => {
        event.preventDefault();
    };

    const [state, setState] = useState(true);

    const toggle = () => {
        setState(!state)
    }

    return (
        <form onSubmit={submitHandler}>
            <button
                onClick={toggle}
                className={state ? classes.button : classes.buttonFalse}>
                {state ? 'Add to cart' : 'Remove'}
            </button>
        </form >
    )
};

export default AddButton;