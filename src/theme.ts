import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      // light: "#FFFFFF",
      main: "#FFFFFF",
      dark: "#363636",
    },
    secondary: {
      main: "##575757",
      // light: "#82e9de",
      dark: "#EAEAEA",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "20px",
    },
    h3: {
      fontSize: 24,
      lineHeight: "29px",
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "20px",
    },
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
    caption: {
      fontSize: 14,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          "&.MuiContainer-maxWidthSm": {
            maxWidth: 200,
          },
        },
        maxWidthMd: {
          "&.MuiContainer-maxWidthMd": {
            maxWidth: 320,
          },
        },
        maxWidthLg: {
          "&.MuiContainer-maxWidthLg": {
            maxWidth: 500,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 20,
        },
      },
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 900,
      desktop: 1440,
    },
  },
});
