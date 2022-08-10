import "./Product.styles.scss";
import { Button } from "../Button";
import { useState } from "react";

export function Product(props){
  const [disabled, setDisabled] = useState(false);

  const changeDisabled = (event) => {
    if(disabled === false){
      setDisabled(true);
      props.onClick(event);
    }
  }

    return (
        <div className="product" id={props.id}>
            <div className="product__img">
              <img src={props.url} />
            </div>
          <div className="product__description">
          <div className="product__description-name">{props.name}</div>
          <div className="product__description-price">{props.price}$</div>
          </div>
          <div className="product__button">
            <Button variant="text" name="addItem" disabled={disabled} onClick={changeDisabled}>Buy me</Button>
          </div>
        </div>
    )
}