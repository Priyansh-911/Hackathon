import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { Component } from "react";

export default function() {
  let navigate=useNavigate();
    return (
        <MyList type="row">
        {/* <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItemButton> */}
            <Divider orientation="vertical" flexItem/>
            {/* <ListItemButton
              sx={{
                  justifyContent: "center",
              }}  */}
            {/* > */}
                {/* <ListItemIcon
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                    <FavoriteIcon />
                </ListItemIcon>
                 */}
            {/* </ListItemButton> */}
            
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
              sx={{
                  justifyContent: "right",
              }} 
              onClick={() =>{
                  navigate("/register");
              }}
            >
                <ListItemIcon
                  sx={{
                    display: 'absolute',
                    justifyContent: 'center',
                  }}
                >
                    <PersonIcon />
                </ListItemIcon>
                
                
            </ListItemButton>
            <Divider orientation="absolute" flexItem/>
        </MyList>
    )
}