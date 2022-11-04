import React from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import ItemListContainer from "./components/ItemListContainer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <ItemListContainer greeting={"hola mundo!!"} />
      <Footer />
    </>
  );
}

export default App;
