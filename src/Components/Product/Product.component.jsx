import "./Product.styles.scss";
import { Button } from "../Button";

export function Product(props){
  

    return (
        <div className="product" id={props.id}>
            <div className="product__img">
              <img src={props.url} alt="img"/>
            </div>
          <div className="product__description">
          <div className="product__description-name">{props.name}</div>
          <div className="product__description-price">{props.price}$</div>
          </div>
          <div className="product__button">
            <Button variant="text" name="addItem" onClick={props.onClick}>Buy me</Button>
          </div>
        </div>
    )
}