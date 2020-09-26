import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  padding: 32px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: #fff;

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;

    button {
      padding: 12px 24px;
      color: #fff;
      font-weight: 700;
      border-radius: 4px;
      background-color: #7159c1;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }

  span {
    display: block;
    margin-top: 6px;
    font-size: 16px;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;

    input {
      width: 56px;
      padding: 6px;

      color: #666;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  button {
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: 700;
  }

  strong {
    font-size: 28px;
    margin-left: 8px;
  }
`;

export const Loading = styled.div`
  width: 100%;

  font-size: 32px;
  font-weight: 900;
  text-align: center;
`;
