import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  font-family: 'Inter';
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  text-decoration: none;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
`;
