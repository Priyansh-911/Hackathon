import { ListItemButton, ListItemText, ListItemIcon,Typography } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";
import { useNavigate } from "react-router-dom";

export default function AppbarDesktop ({ matches }) {
    let navigate=useNavigate();
   
    return (
        
        <AppbarContainer>
            <AppbarHeader><Typography variant="h3">अनुदान</Typography></AppbarHeader>
            <MyList type = "row">
                <ListItemButton
                onClick={() =>{
                    navigate("/");
                }}
                >
                <ListItemText primary="Home"/>
                </ListItemButton>

                <ListItemButton>
                <ListItemText primary="About"/>
                </ListItemButton>
                
                <ListItemButton>
                <ListItemText primary="Scholarships"/>
                </ListItemButton>
                
                <ListItemButton>
                <ListItemText primary="Contact Us"/>
                </ListItemButton>
                
                
            </MyList>
            <Actions matches={matches}/>
        </AppbarContainer>
        
    );
}