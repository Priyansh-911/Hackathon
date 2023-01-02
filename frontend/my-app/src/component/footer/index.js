import {Box, Grid, List, ListItemText, Typography} from "@mui/material";
import { FooterTitle} from "../../styles/footer";
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
                <Box sx={{
                    mt:4,
                    color: Colors.dove_gray



                }}>
                    <FacebookIcon sx={{ mr: 1}} />
                    <TwitterIcon sx={{mr: 1}} />
                    <InstagramIcon sx={{mx:1}} />
                    <LinkedINIcon sx={{mx:1}} />
                    </Box>
                    </Grid>
                    <Grid item md={6} lg={2}>
                        <FooterTitle variant ="body1">information</FooterTitle>
                        <List>
                           <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About Us
                            </Typography>
                            </ListItemText> 
                            <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privacy &amp; Policy
                            </Typography>
                            </ListItemText> 
                            <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp;Conditions
                            </Typography>
                            </ListItemText> 
                        </List>

            </Grid>
            
        </Grid> 
       </Box>
    )
}