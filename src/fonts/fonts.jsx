import { createGlobalStyle } from "styled-components";

import BlackOpsOneWoff from "./BlackOpsOne-Regular.woff";
import BlackOpsOneWoff2 from "./BlackOpsOne-Regular.woff2";

export default createGlobalStyle`
@font-face {
    font-family: "BlackOpsOne" ;
    src: url(${BlackOpsOneWoff2}) format("woff2");
    src: url(${BlackOpsOneWoff}) format("woff");
    font-weight: 400;
    font-style: normal;
}
`;
