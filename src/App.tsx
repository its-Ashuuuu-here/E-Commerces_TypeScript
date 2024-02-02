import React from 'react';
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/Store";
import DProduct from './Components/DProduct';
import Cart from './Components/Cart';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './Components/Home';
import Check from './Components/Check';
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



export default function App() {
  
  
  return (
    <>
     <Provider store={store}>  
     <PersistGate loading={null} persistor={persistor}>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/dproduct/:id' element={<DProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/check'element={<Check  />} />
      <Route path='/about' element={<About/>}/>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </PersistGate>
 </Provider>

    </>
  );
}


