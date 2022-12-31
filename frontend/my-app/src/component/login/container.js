import { Tabs, Tab, Paper } from "@mui/material";
import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from ".";
import Signup from "./signup";

const SignInOutContainer=()=>{
    const paperStyle={width:390, margin:"20px auto"}
    const [value,setValue]=useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    return(
        <Paper elevation={20} style={paperStyle}>
            <Tabs
               value={value}
               indicatorColor="primary"
               textColor="primary"
               onChange={handleChange}
               variant="fullWidth"
               aria-label="disabled tabs example"
            >
                <Tab label="Sign In"/>
                <Tab label="Sign Up"/>

            </Tabs>
            <TabPanel value={value} index={0}>
                <Login handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Signup/>
            </TabPanel>
        </Paper>
    )
}

export default SignInOutContainer;