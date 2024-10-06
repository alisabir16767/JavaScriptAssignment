import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import { Route, Routes } from "react-router-dom"; // Use Routes in place of Switch
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
