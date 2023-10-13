import React from "react";
import NavBar from "./components/Navbar/Navbar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListConteiner greeting={"Bienvenidos"} />
    </div>
  );
}

export default App;
