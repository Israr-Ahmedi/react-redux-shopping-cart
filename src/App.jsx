import Header from "./header";
import AddtoCart from "./AddtoCart";
import { clrItem } from "../redux/slice";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "./CartList";

function App() {

  const dispatch = useDispatch();



  const [search, setSearch] = useState('');

  // const filteredProduct = productSelector.filter(())

  return (
    <>

      <Header />
      <input className="search-bar" type="text"
        placeholder="Search by ID, name, brand, price..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <main className="main-container">
        {/* <h1>Redux Toolkit</h1>

        <button className="btn" onClick={() => dispatch(clrItem())}>Clear to Cart</button> */}

        <Routes>
          <Route path="/" element={<AddtoCart search={search} />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>

      </main>
    </>
  );
}

export default App;