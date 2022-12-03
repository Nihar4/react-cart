import "./styles/app.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Home from "./component/Home";
import Header from "./component/Header";
import Cart from "./component/Cart";
function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
