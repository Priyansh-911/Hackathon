import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { List , Typography } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez"

export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}));


//header
export const AppbarHeader =styled(Typography)(() => ({
     padding: '4px',
     flexGrow: 1,
     fontSize: '2em',
     fontFamily: '"Nunito"',
     color:Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'felx',
  background: Colors.shaft,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  allignItems: 'center',
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`


}));
export const ActionIconsContainerDesktop= styled(Box)(() => ({
  flexGrow: 0
}));
 