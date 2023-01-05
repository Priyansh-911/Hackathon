
// import { styled } from "@mui/system";
// import { Colors } from "../theme";
// import {Button,IconButton,Box} from "@mui/material";
// import { slideInBottom,slideInRight } from "../../animation";


// export const Product = styled(Box)(({theme}) => ({
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     felxDirection: 'column',
//     border:'none',
//     boxShadow:'none',
//     [theme.breakpoints.up('md')]: {
//         position: 'absolute'
//     }
// }));
 
<<<<<<< Updated upstream
export const ProductImage = styled('img')(({src,theme}) => ({
    src: `url($(src))`,
    width: '100%',
    height:'30vh',
    // background: Colors.light,
    //  padding: '5px',
    [theme.breakpoints.down('md')]: {
        width: '120%',
        // height:'100%'
        // padding: '24px'
    }
}));
=======
// export const ProductImage = styled('img')(({src,theme}) => ({
//     src: `url($(src))`,
//     width: '100%',
//     // background: Colors.light,
//      padding: '5px',
//     [theme.breakpoints.down('md')]: {
//         width: '120%',
//         // height:'100%'
//         padding: '24px'
//     }
// }));
>>>>>>> Stashed changes

// export const ProductActionButton = styled(IconButton)(() => ({
//     // background: <Colors className="grey"></Colors>,
//     margin: 4,
// }));

// export const ProductFavButton = styled(ProductActionButton)(({ isfav,theme}) => ({
//   color: isfav ? Colors.primary : Colors.light,
//    [theme.breakpoints.up("md")]: {
//     position: "absolute",
//     right: 0,
//     top: 0,
// },
// }));

// export const ProductMetaWrapper = styled(Box)(({ theme })  => ({
// //  padding: 4,
//  display: "flex",
//  felxDirection: "column",
//  alignItems:"center",
// }));
// export const ProductActionsWrapper = styled(Box)(({ show,theme })  => ({
//    [theme.breakpoints.up('md')]: {
//     display: show ? 'visible' : 'none',
//     position : 'absolute',
//     right: 0,
//     top: '20%',
//     animation : show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460,0,450,0,940)both`,

//    },
// }));