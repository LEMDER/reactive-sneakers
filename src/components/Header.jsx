import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';
 
function Header(props){
  // const{cartItems} = React.useContext(AppContext);
  // const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    return (
        <header className="d-flex">
          <div onClick={() => window.open("http://localhost:3000/")} className="headerLeft">
            {/* <Link to="/"> */}
              <img width={40} height={40} src="/img/logo.png" alt="Logotype"/>
            {/* </Link> */}
            <div>
              <h3>Reactive sneakers</h3>
              <p>Best sneaker shop</p>
            </div>
          </div>
  
          <ul className="headerRight">
            <li onClick={props.onClickCart }><img width={18} height={18} src="/img/cart.svg" alt="Cart"/><span> 0$</span></li>
              <li><a href='/orders'><img width={18} height={18} src="/img/user.svg" alt="Profile"/></a></li>
            
          </ul>
        </header>
    );
}

export default Header;