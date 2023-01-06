
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerTitle,BannerImage } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));


    return(
        <BannerContainer>
            <BannerImage src="/image/banner/scc.png"/>
             {/* <BannerContent>
                


            </BannerContent> */}
    
        </BannerContainer>
    );
        
}