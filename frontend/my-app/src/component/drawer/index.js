import {styled }from "@mui/system";
import { Divider,Drawer,List, ListItemButton, ListItemText } from "@mui/material";

const MiddleDivider = styled((props) => (
    <Divider variant="middle"{...props} />

))``;
export default function AppDrawer() {

return (
    <Drawer open={true}>
    <List>
    <ListItemButton>
    <ListItemText>Home</ListItemText>
    </ListItemButton>
    <MiddleDivider/>
    <ListItemButton>
    <ListItemText>About us</ListItemText>
    </ListItemButton>
    <MiddleDivider/>
    <ListItemButton>
    <ListItemText>Scholarships</ListItemText>
    </ListItemButton>
    <MiddleDivider/>
    <ListItemButton>
    <ListItemText>Contact Us</ListItemText>
    </ListItemButton>


    </List>

    </Drawer>

)
}