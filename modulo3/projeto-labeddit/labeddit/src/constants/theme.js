import { primary, secondary } from "./colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary: {
            main: primary
        },
        secondary: {
            main: secondary
        }
    }
});
export default theme;