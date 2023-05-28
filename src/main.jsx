import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from "react";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Orders from './pages/Orders';
import AddOrder from './pages/AddOrder';
import EditOrder from './pages/EditOrder';



export const Main = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://63b68f481907f863aaf9e25f.mockapi.io/items').then(res => {
      setItems(res.data);
    });

    axios.get('https://63b68f481907f863aaf9e25f.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://63b68f481907f863aaf9e25f.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://63b68f481907f863aaf9e25f.mockapi.io/cart/${id}`);

    setCartItems((prev) => prev.filter(item => item.id !== id));
  };


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);

  };




  return (
    <div className="wrapper">

      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} />



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onAddToCart={onAddToCart}
            onChangeSearchInput={onChangeSearchInput} />}>
          </Route>

          <Route path="orders" element={<Orders />}/>
          <Route path="create" element={<AddOrder/>}/>
          <Route path="edit" element={<EditOrder/>}/>
            
      
        </Routes>
      </BrowserRouter>





    </div>
  )
}