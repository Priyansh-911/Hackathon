import { ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile,AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop ({ matches }) {

   
    return (
        
        <AppbarContainer>
            <AppbarHeader>ScholArships</AppbarHeader>
            <MyList type = "row">
                <ListItemText primary="Home"/>
                <ListItemText primary="About"/>
                <ListItemText primary="Scholarships"/>
                <ListItemText primary="Contact Us"/>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches}/>
        </AppbarContainer>
        
    );
}