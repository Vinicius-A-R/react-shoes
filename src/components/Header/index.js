import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { MdShoppingBasket } from "react-icons/md";
import { Container, Cart } from "./styles";

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="ReactShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket size={32} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;
