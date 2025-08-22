import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    boardColor: string;
    cardColor: string;
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
