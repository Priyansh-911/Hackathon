import { Avatar, Button,  Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';

const Signup=()=>{
    const paperStyle={padding:20, width:350 , margin:"0 auto"}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:'rgb(8 154 214)'}
    const btnstyle={margin:"10px 0"}
    const marginTop={marginTop: 5}
    const states = [
        {
          value: 'D',
          label: 'Delhi',
        },
        {
          value: 'P',
          label: 'Punjab',
        },
        {
          value: 'R',
          label: 'Rajasthan',
        },
        {
          value: 'H',
          label: 'Haryana',
        },
        {
            value: 'UP',
            label: 'Uttar Pradesh',
        },
      ];
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                    <AddCircleOutlineIcon/> 
                    </Avatar>
                    <h2 style={headerStyle}>Sign up</h2>
                    <Typography variant="caption">Please fill this form to create an account!</Typography>
                </Grid>
                <form>
                    <TextField label="Name" margin="dense" fullWidth/>
                    <TextField label="E-mail" margin="dense" fullWidth/>
                    <FormControl style={marginTop}>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            style={{display:"initial"}}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl style={marginTop}>
                        <FormLabel id="demo-radio-buttons-group-label">Are you a donor or student?</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            style={{display:"initial"}}
                        >
                            <FormControlLabel value="donor" control={<Radio />} label="Donor" />
                            <FormControlLabel value="student" control={<Radio />} label="Student" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        id="outlined-select-state"
                        select
                        label="Select"
                        helperText="Please select your state"
                        margin="dense"
                        fullWidth
                    >
                        {states.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField label="Password" type="password" margin="dense" fullWidth/>
                    <Button type='submit' color='info' variant='contained' style={btnstyle} fullWidth>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;