import { Product } from "./Components/Product";
import { CartItem } from "./Components/CartItem";
import products from "./products";
import { useState } from "react";

function App() {
  const [itemNumbers, setItemNumbers] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const itemCounter = (event) => {
    if(event.target.name === "addItem"){
      setItemNumbers((state) => ++state);
    }else if(event.target.name === "removeItem"){
      setItemNumbers((state) => --state);
    }
  }

  const itemTotalPriceIncrease = (price) => {
    setTotalPrice((state) => state += price);
  }

  const itemTotalPriceDecrease = (price) => {
    setTotalPrice((state) => state -= price);
  }

  const addItem = (item, event) => { 
    if(cart.includes(item) === true) {
      alert("already added to cart");
    }else{
      setCart((state) => [...state, item]);
      itemTotalPriceIncrease(item.price);
      itemCounter(event);
    }
  }

  const deleteItem = (deletedItem, num) => {
     setCart((state) => state.filter(
        item => item.id !== deletedItem.id
      ));
      itemTotalPriceDecrease(deletedItem.price * num);
  }

  const cartData = cart.map((item) => {

    const updateCartNum = (numOfUnit) => {
      setItemNumbers((state) => state - numOfUnit);
    }

    const handleClick = (event) => {
      let numOfUnit = event.target.attributes[2].nodeValue;
      deleteItem(item, numOfUnit);
      updateCartNum(numOfUnit);
    }

    const numberOfUnits = (event) => {
      itemCounter(event);
      if(event.target.name === "addItem"){
        itemTotalPriceIncrease(item.price);
      }else if(event.target.name === "removeItem"){
        itemTotalPriceDecrease(item.price);
      }
    }

    return (
      <CartItem 
       key={item.id}
       url={item.image}
       name={item.name}
       price={item.price}
       onClick={handleClick}
       numberOfUnits={numberOfUnits}
      />
    );
  });

  const data = products.map((product) => {

    const handleClick = (event) => {
      addItem(product, event);
    }

    return (
      <Product
        key={product.id}
        url={product.image}
        name={product.name}
        price={product.price}
        onClick={handleClick}
      />
    );
  });

  return (
      <div className="app">
        <div className="cart">
          <div className="cart__total-item">
            {itemNumbers === 0 && 'Your cart is empty!'}
            {itemNumbers > 0 && 'You have '+ itemNumbers + ' item(s) in cart'}
          </div>
          <div className="cart__item-list">
            {cartData}
          </div>
          <div className="cart__total-price">Your total price: {totalPrice}$</div>
        </div>
        <div className="product-list">
            {data}
        </div>
      </div>
  );
}

export default App;
