import React from 'react';
import './App.css';
import Header from "./components/Header"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <Photos />
    </div>
  );
}

export default App;
