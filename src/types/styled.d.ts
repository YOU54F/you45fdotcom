import {} from "styled-components";
import { CSSProp } from "styled-components";
declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {}
}