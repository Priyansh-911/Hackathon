import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList,ActionIconsContainerDesktop, ActionIconsContainerMobile, } from "../../styles/appbar";
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Actions({ matches }) {

  const Component = matches 
  ?  ActionIconsContainerMobile
  : ActionIconsContainerDesktop;

    return (
      <Component>
        <MyList type="row">
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
              sx={{
                  justifyContent: "center",
              }} 
            >   
                <ListItemIcon
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                    
                
                    <FavoriteIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
              sx={{
                  justifyContent: "center",
              }} 
            >
                <ListItemIcon
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                    <PersonIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
        </MyList>
        </Component>
    )
}