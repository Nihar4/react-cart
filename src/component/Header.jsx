import { React } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiShoppingBag } from "react-icons/fi";
const Header = () => {
  return (
    <nav>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
      ></link>
      <div className="left">
        <a href="/#home" class="nav__logo">
          <i class="bx bxs-watch nav__logo-icon"></i> Rolex
        </a>

        <HashLink to="/#home">Home</HashLink>
        <HashLink to="/#features">Features</HashLink>
        <HashLink to="/#products">Products</HashLink>
        <HashLink to="/#new">New</HashLink>
      </div>
      <Link to="/cart" className="right">
        <FiShoppingBag />
      </Link>
    </nav>
  );
};

export default Header;
