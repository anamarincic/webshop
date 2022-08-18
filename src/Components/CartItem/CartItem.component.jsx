import "./CartItem.styles.scss";
import { Button } from "../Button";
import { useState } from "react";

export function CartItem(props) {
    const [numberOfUnits, setNumberOfUnits] = useState(1);

    const alt = `Picture of ${props.name}`;

    const updateNumberOfUnits = (event) => {
       
        if(event.target.textContent === "+"){
            setNumberOfUnits((state) => ++state);
            props.numberOfUnits(event);
        }else if(event.target.textContent === "-"){
            if(numberOfUnits > 1){
                setNumberOfUnits((state) => --state);
                props.numberOfUnits(event);
            }
        }
    }

    var data = numberOfUnits.toString();

    return (
        <div className="cart-item" id={props.id}>
            <div className="cart-item__image">
                <img src={props.url} alt={alt}/>
            </div>
            <div className="cart-item__description">
                <Button variant="icon" name="removeItem" dataSize={data} onClick={props.onClick}>x</Button>
                <div className="cart-item__description-name">{props.name}</div>
                <div className="cart-item__description-price">{props.price} $</div>
                <div className="cart-item__description-units">
                    <Button variant="icon" className="plus" name="addItem" onClick={updateNumberOfUnits}>+</Button>
                    <div className="numberOfUnits">{numberOfUnits}</div>
                    <Button variant="icon" className="minus" name="removeItem" onClick={updateNumberOfUnits}>-</Button>
                </div>
            </div>
        </div>
    );
}