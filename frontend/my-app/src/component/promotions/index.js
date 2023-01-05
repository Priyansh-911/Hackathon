import { MessageText, PromotionsContainer } from "../../styles/promotions";
import {Box} from "@mui/system";
import { useEffect, useState,useRef } from "react";
import { Slide } from "@mui/material";


const messages = [
"Applications for Scholarships are NOW OPEN!",
"Students can apply scholarships from 20th of january,2023.",
"Enternal the mandatory details and register yourself.",
"Applicants must have date of birth before 2008.",

];

export default function Promotions() {
    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0)
    const[show, setShow] = useState(true);

    useEffect(() => {

        setTimeout(() => {
        setShow(false)
    }, 3000);
        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length);
            setShow(true);

            setTimeout(() => {
                setShow(false)
            }, 3000);

        },4000);
         
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <PromotionsContainer ref={containerRef}>

            <Slide 
            container={containerRef.current}
            direction={show ? "left" : "right"} in={show}
            timeout= {{
                enter: 500,
                exit: 100
            }}
            >
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>
            </Box>
            </Slide>

        </PromotionsContainer>
    );

}