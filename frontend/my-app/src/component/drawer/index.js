// import { styled,lighten }from "@mui/system";
// import {Button, Divider,Drawer,List, ListItemButton, ListItemText } from "@mui/material";
// import { useUIContext } from "../context";
// import { DrawerCloseButton } from "../../styles/appbar";
// import CloseIcon from "@mui/icons-material/Close";

// import { Colors}from "../../styles/theme";

// const MiddleDivider = styled((props) => (
//     <Divider variant="middle"{...props} />

// ))``;
// export default function AppDrawer() {
//     const {drawerOpen,setDrawerOpen}= useUIContext();

//    return (
//       <>
  
//         { drawerOpen && (
//         <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
//             <CloseIcon
//             className="testing"
//             sx={{
//                 fontSize: "2.5rem",
//                 color: lighten(0.09, Colors.secondary),
//             }}
//         />
//         </DrawerCloseButton> 
//         )}

//         <Drawer open={drawerOpen}>
//     <List>
//     <ListItemButton>
//     <ListItemText>Home</ListItemText>
//     </ListItemButton>
//     <MiddleDivider/>
//     <ListItemButton>
//     <ListItemText>About us</ListItemText>
//     </ListItemButton>
//     <MiddleDivider/>
//     <ListItemButton>
//     <ListItemText>Scholarships</ListItemText>
//     </ListItemButton>
//     <MiddleDivider/>
//     <ListItemButton>
//     <ListItemText>Contact Us</ListItemText>
//     </ListItemButton>


//     </List>

//     </Drawer>
//     </>
// )
// }