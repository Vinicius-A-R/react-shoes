import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';

import * as CartActions from '../../redux/reducers/cart/actions';

import { formatPrice } from '../../util/format';

import { MdAddShoppingCart } from 'react-icons/md';
import { Container, ProductList, Loading } from './styles';

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const { stock, amount } = useSelector((state) => ({
    stock: state.stock,
    amount: state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;

      return amount;
    }, {}),
  }));

  useEffect(() => {
    const getAPI = async () => {
      const res = await api.get('products');

      const data = await res.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      dispatch({ type: 'UPDATE_STOCK', payload: data });
    };

    getAPI();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setProducts(stock);

    return () => {
      setProducts([]);
    };
  }, [stock]);

  const handleAddProduct = (product) => {
    dispatch(CartActions.addToCart(product));
  };

  return (
    <Container>
      <ProductList>
        {!products ? (
          <Loading style={{ color: '#fff' }}>Loading...</Loading>
        ) : (
          <>
            {products.map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>

                <button type="button" onClick={() => handleAddProduct(product)}>
                  <div>
                    <MdAddShoppingCart size={16} color="#FFF" />{' '}
                    {amount[product.id] || 0}
                  </div>

                  <span>ADD TO CART</span>
                </button>
              </li>
            ))}
          </>
        )}
      </ProductList>
    </Container>
  );
}

export default Home;
