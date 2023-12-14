import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
  }

  interface PaletteOptions {
    black?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F4E041",
    },
    secondary: {
      main: "#00BDD3",
    },
    black: {
      main: "#000000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1024,
      xl: 1170,
    },
  },
  spacing: [0, 5, 10, 20, 32, 64],
  typography: {
    fontFamily: "Nunito",
    subtitle1: {
      fontFamily: "Nunito",
      fontSize: "40px",
      lineHeight: "40px",
    },
    body1: {
      fontFamily: "Nunito",
      fontSize: "16px",
      lineHeight: "26px",
    },
  },
});
