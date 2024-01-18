import React from "react";
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
          <Route path='/' element={<ItemListConteiner greeting={'Bienvenidos'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListConteiner greeting={'Productos filtrados'}/>}/>
          <Route path='/item/:productId' element={<ItemDetailConteiner />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
