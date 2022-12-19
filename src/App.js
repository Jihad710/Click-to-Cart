import React from "react";

// react router dom
import { Route, Routes } from 'react-router-dom';
// pages

import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
//components
import Header from './components/Header';

function App () {
  return (
    <>
    <Header />
    <Routes>
    <Route exact path='/header' element={<Header/>} />
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/about' element={<About/>} />
    <Route exact path="/cart" element={<Cart/>} />
    <Route exact path="/checkout" element={<Checkout/>} />
    <Route exact path="login" element={<Login/>} />
    <Route exact path="/products" element={<Products/>} />
    <Route exact path="/products/:id" element={<ProductsDetails/>} />
    <Route exact path="*" element={<Error/>} />
    </Routes>
    </>
    );
    }
  export default App;


          
          
