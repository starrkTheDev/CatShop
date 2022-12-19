import Card from "../UI/Card";
import classes from "./AvailableCats.module.css";
import AddButton from "./AddButton";
import gakster from '../../images/gakster.png';
import george from '../../images/george.png';
import loaf from '../../images/loaf.png';
import rat from '../../images/rat.png';
import { useContext } from "react";
import CartContext from "../../store/context";
const CATS_EXE = [
    {
        id: 'c1',
        name: 'Gakster',
        description: 'A psycho killer',
        image: <img src={gakster} className={classes.img} alt='gakster' width='150px' height='150px' />,
        price: 50
    },
    {
        id: 'c2',
        name: 'Loaf',
        description: 'Sweet chillin loaf',
        image: <img src={loaf} className={classes.img} alt='loaf' width='150px' height='150px' />,
        price: 40
    },
    {
        id: 'c3',
        name: 'Rat',
        description: 'Stinky but sweet',
        image: <img className={classes.img} src={rat} alt='rat' width='150px' height='150px' />,
        price: 60
    },
    {
        id: 'c4',
        name: 'George',
        description: 'A gentle cat',
        image: <img src={george} className={classes.img} alt='george' width='150px' height='150px' />,
        price: 70
    }


]


const AvailableCats = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };


    const catsList = CATS_EXE.map(cat => <li
        className={classes.element} key={cat.id}>
        <div className={classes.item}
            key={cat.id}
            id={cat.id}
            name={cat.name}
            description={cat.description}
            image={cat.image}
            price={cat.price}>

            <h4>{cat.name}</h4>
            <h6 className={classes.description}>{cat.description}</h6>
            <div>{cat.image}</div>
            <h6 className={classes.price}>
                <span className={classes.priceSpan}>{cat.price}$</span>
            </h6>

        </div>
        <div>
            <AddButton onAddToCart={addToCartHandler} />
        </div>
    </li>);

    return (
        <div className={classes.cats}>
            <Card >
                <ul className={classes.list} >
                    {catsList}
                </ul>
            </Card>
        </div>
    )
};

export default AvailableCats;