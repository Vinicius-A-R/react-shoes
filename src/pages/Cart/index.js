import React from "react";

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QUANTITY</th>
            <th>VALUE</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-olympikus-globe-se-814-masculino/26/D22-3837-026/D22-3837-026_detalhe1.jpg?ts=1595354797?ims=280x280"
                alt="Shoe"
              />
            </td>
            <td>
              <strong>Shoe very cool</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">BUY</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$129,00</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
