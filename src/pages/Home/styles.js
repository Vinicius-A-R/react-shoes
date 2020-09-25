import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 100;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;

    padding: 16px;
    border-radius: 4px;
    background-color: #fff;

    img {
      width: 100%;
      align-self: center;
    }

    strong {
      margin-top: 8px;

      color: #333;
      font-size: 16px;
      line-height: 20px;
    }

    span {
      font-size: 16px;
      font-weight: 700;
    }

    button {
      display: flex;
      align-items: center;

      margin-top: 20px;
      cursor: pointer;

      color: #fff;
      border: 0;
      border-radius: 4px;
      background: #7159c1;

      tramsition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#7159c1")};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.4);
      }

      span {
        flex: 1;
        font-weight: 700;
      }
    }
  }
`;
