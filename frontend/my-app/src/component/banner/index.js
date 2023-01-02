
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerTitle,BannerImage } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));


    return(
        <BannerContainer>
            <BannerImage src="/image/banner/dcp.png"/>
            <BannerContent>
                <Typography variant="h6">Scholarships</Typography>
                <BannerTitle variant="h2">
                    Scholarships Available
                </BannerTitle>
                <BannerDescription variant="subtitle">
                    Welocme to this site.Very happy to see you all here. Hope you will find your way out of this..
                </BannerDescription>


            </BannerContent>
    
        </BannerContainer>
    );
        
}