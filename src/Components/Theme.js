import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { create } from "@mui/material/styles/createTransitions";
export const Theme = createTheme({
    palette:{
        primary:{
            main:'#1760a5',
            light:"skyblue"
        },
        secondary:{
           main:'#222'
        },
        otherColor:{
            main:"#7E46EE",
            light:'#EED246'
        }

    }
})