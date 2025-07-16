import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#536725",
    },
    secondary: {
      main: "#42B1A6",
    },
    background: {
      default: "#EFE7DC",
      paper: "#FCEEB2",
    },
    text: {
      primary: "#1f2937",
      secondary: "#4b5563",
    },
  },
  typography: {
    fontFamily: "Ubuntu Mono, monospace",
  },
});

export default theme;
