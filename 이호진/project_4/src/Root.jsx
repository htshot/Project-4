import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";

function Root() {

    const theme = createTheme({
        typography: {
          fontFamily: ["GmarketSansMedium"],
        },
        palette: {
          primary: {
            main: "#FF8686",
            contrastText: "#ffffff",
          },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </>
    );
}
export default Root;