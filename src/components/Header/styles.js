import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  margin: 50px auto;

  img {
    height: 32px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;

    svg {
      transform: scale(1.2);
    }
  }

  div {
    text-align: right;
    margin-right: 12px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      color: #999;
      font-size: 12px;
    }
  }
`;
