import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/bg.svg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
	outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  width: 100%;
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Roboto', -apple-system, system-ui, sans-serif;
}

body{
  padding: 0 8px;;
  background: #191920 url(${background}) no-repeat center top;
}

ul{
  list-style: none;
  padding-left: 0;
}

button{
  border: 0;
  background: none;
  cursor: pointer;
}

`;
