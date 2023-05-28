import React from "react";
import AppContext from "../context";

function Drawer({ onCloseCart, onRemove, items = [] }){
    // const {cartItems} = React.useContext(AppContext);
    // const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    return (
          <div  className="overlay">

            <div className="drawer">
              <h2>Cart <img onClick={onCloseCart} className="removeBtn" src="/img/btn-remove.svg" alt="Close" /></h2>

              {
                items.length > 0 ? 
                <div>
                  <div className="items">
                {items.map((obj) => (  
                <div className="cartItem">
                  <div className="cartItemImg" style={{backgroundImage: `url(${obj.imageUrl})`}}></div>

                  <div className="info-block">
                    <p>{obj.title}</p>
                    <b>{obj.price}$</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>
                ))}
              </div>
              <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                 <b>
                  {/* {totalPrice} */}
                  59$</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>5.9$</b>
                </li>
              </ul>
              <button className="greenButton">Buy</button>
            </div>
                </div>:
              <div className="cartEmpty">
              <img width="120px" heigth="120px" src="/img/empty-cart.png" alt="Empty cart"/>
              <h2>Empty cart</h2>
              <p className="opacity-6">Add more 1 sneaker, for order sneakers</p>
              <button onClick={onCloseCart} className="greenButton">
                <img src="/img/arrow.png" alt="Arrow" />Back
              </button>
            </div>
              }

              

              

              
            </div>


          </div>
    );
}

export default Drawer;