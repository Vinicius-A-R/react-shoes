import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  removeFromCart,
  updateAmount,
} from '../../redux/reducers/cart/actions';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total, Loading } from './styles';

import { formatPrice } from '../../util/format';

function Cart() {
  const dispatch = useDispatch();

  const { products, total } = useSelector((state) => ({
    products: state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    ),
  }));

  const increment = (id, amount) => {
    dispatch(updateAmount(id, ++amount));
  };

  const decrement = (id, amount) => {
    dispatch(updateAmount(id, --amount));
  };

  return (
    <Container>
      {products.length ? (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUCT</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {products.map(
                ({ id, title, image, priceFormatted, amount, subtotal }) => (
                  <tr key={id}>
                    <td>
                      <img src={image} alt={title} />
                    </td>
                    <td>
                      <strong>{title}</strong>
                      <span>{priceFormatted}</span>
                    </td>
                    <td>
                      <div>
                        <button
                          type="button"
                          onClick={() => decrement(id, amount)}
                        >
                          <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="number" readOnly value={amount} />
                        <button
                          type="button"
                          onClick={() => increment(id, amount)}
                        >
                          <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{subtotal}</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => dispatch(removeFromCart(id))}
                      >
                        <MdDelete size={20} color="#7159c1" />
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </ProductTable>

          <footer>
            <button type="button">BUY</button>

            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </>
      ) : (
        <Loading>EMPTY</Loading>
      )}
    </Container>
  );
}

export default Cart;
