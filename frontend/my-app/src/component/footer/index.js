import {Box, Grid, Typography} from "@mui/material";
import { FooterTitle } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedINIcon from "@mui/icons-material/LinkedIn"
export default function Footer() {
    return (
       <Box
         sx={{
            background: Colors.shaft,
            color: Colors.white,
            p:{ xs: 4,md: 10},
            pt: 12,
            pb: 12,
            fontSize: { xs: '12px', md: '14px' }
         }}
       >
        <Grid container spacing={2} justifyContent="center">
            <Grid item md={6} lg={4}>
                <FooterTitle variant ="body1" >About us</FooterTitle>
                
            </Grid>
        </Grid>
       </Box>
    )
}