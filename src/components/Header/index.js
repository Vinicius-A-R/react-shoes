import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assets/logo.svg';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

function Header() {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="ReactShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={32} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;
