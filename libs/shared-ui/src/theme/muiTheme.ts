import { createTheme, Shadows } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#e95f42",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
      paper: "#f1f1f1", // menu popup background etc...
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    h1: {
      fontSize: 50,
      fontWeight: 600,
    },
    h2: {
      fontSize: 45,
      fontWeight: 600,
    },
  },
  shadows: [
    "none",
    "1px 1px 5px 0px #ccc",
    "1px 1px 5px 0px #ccc",
    "1px 1px 5px 0px #ccc",
    "1px 1px 5px 0px #ccc",
    ...Array(20).fill("none"),
  ] as Shadows,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          // borderRadius: 0,
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          height: 48,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: 10,
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});
