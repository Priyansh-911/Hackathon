
import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBottom: '1em',



}));
 
// export const SubscribeIf = styled(TextField(() => ({
//     '.MuiInputLabel-root' :{
//         color: Colors.secondary
//     },
//     '.MuiInput-root::before': {
//         borderBottom: `1px solid ${Colors.secondary}`
//     },

// })))