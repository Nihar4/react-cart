import React from "react";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import New from "./New";
import Products from "./Products";
const Home = () => {
  return (
    <div>
      <Main />
      <Features />
      <Products />
      <New />
      <Footer />
    </div>
  );
};

export default Home;
