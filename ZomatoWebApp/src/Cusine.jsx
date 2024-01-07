import React, { useState } from "react";
import "../src/App.css";
import Header from "./Component/Header";
import product from "./product.json";

const Cusine = () => {
  const [inCart, setInCart] = useState(false);
  const[cartProductOId ,setCartProductId] =useState(null)

  const [cartState, setCartState] = useState(product.map(() => false));

  const addToCart = (productId) => {
 
    setCartState((prev) => {
      const newCartState = [...prev];
      newCartState[productId] = !newCartState[productId];
      return newCartState;
    });
    setInCart(!inCart);
  };
  return (
    <>
      <Header />
      <div className="productContainer">
        {
          product.map((items,id)=>(
            <>
          
            
              <div className="productCard" key={id}>
          <div className="imgBox">
            <img
            src={items.image}
              // src="https://img.freepik.com/premium-photo/palak-paneer_662214-4174.jpg?w=996"
              alt="productImg"
            />
          </div>

          <div className="namePContainer">
            <div className="productName">
              <span>{items.name}</span>
            </div>

            <div className="productPrice">
              <span>Rs</span>
              <span>{items.price}</span>
            </div>

            <div className="productPrice">
              <span>4 day delivery</span>
            </div>

            <div className="productPrice">
              <span>Ratings:</span>
              <span>{items.ratings}</span>
            </div>
          </div>

          <div className="Addbtn">
            <button
              onClick={()=>addToCart(id)}
              style={{ backgroundColor:  cartState[id]  ? "#FF5349" : "#5f4eeb" }}
            >
              {cartState[id] ? "Remove from Cart" : "Add To CART"}
            </button>
          </div>
        </div>
        </>
           
          ))
        }
       
      </div>
    </>
  );
};

export default Cusine;
