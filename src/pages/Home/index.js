import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { Container, ProductList } from "./styles";

function Home() {
  return (
    <Container>
      <ProductList>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-olympikus-globe-se-814-masculino/26/D22-3837-026/D22-3837-026_detalhe1.jpg?ts=1595354797?ims=280x280"
            alt="Tenis"
          />
          <strong>Shoe very cool</strong>
          <span>R$129,90</span>

          <button>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-olympikus-globe-se-814-masculino/26/D22-3837-026/D22-3837-026_detalhe1.jpg?ts=1595354797?ims=280x280"
            alt="Tenis"
          />
          <strong>Shoe very cool</strong>
          <span>R$129,90</span>

          <button>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-olympikus-globe-se-814-masculino/26/D22-3837-026/D22-3837-026_detalhe1.jpg?ts=1595354797?ims=280x280"
            alt="Tenis"
          />
          <strong>Shoe very cool</strong>
          <span>R$129,90</span>

          <button>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
            </div>

            <span>ADD TO CART</span>
          </button>
        </li>
      </ProductList>
    </Container>
  );
}

export default Home;
