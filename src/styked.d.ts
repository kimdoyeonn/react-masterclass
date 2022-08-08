import "styled-components";

declare module "styled-components" {
  export const theme: DefaultTheme = {
    red: "#E51013",
    black: {
      veryDark: "#141414",
      darker: "#181818",
      lighter: "#2F2F2F",
    },
    white: {
      lighter: "#fff",
      darker: "#e5e5e5",
    },
  };
}