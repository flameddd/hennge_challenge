import { css, createGlobalStyle } from "styled-components";
import normalizeCSS from "normalize.css";

export const normalize = css`
  ${normalizeCSS}
`;
const Normalize = createGlobalStyle(normalize);

export default Normalize;
