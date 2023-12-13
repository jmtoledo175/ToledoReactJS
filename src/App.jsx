import React from "react";
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<ItemListConteiner greeting={'Bienvenidos'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListConteiner greeting={'Productos filtrados'}/>}/>
          <Route path='/detail/:productId' element={<ItemListConteiner />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
