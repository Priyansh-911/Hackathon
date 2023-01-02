import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../context";


export default function AppbarMobile ({ matches }) {
    const {setDrawerOpen} = useUIContext()
    return (
        <AppbarContainer>
            <IconButton onClick={()=> setDrawerOpen(true)}>
                <MenuIcon />

              
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h5">
                Scholarships
            </AppbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}