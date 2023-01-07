import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./signup.css";
import { useNavigate } from "react-router-dom";


const Login=({handleChange})=>{
    let navigate=useNavigate();

    const paperStyle={padding :20, height : '79.25vh', width: 350, margin : "0 auto"}
    const avatarStyle={backgroundColor:"#ffde59"}
    const btnstyle={margin:"10px 0",backgroundColor:"#ffde59"}
    return(
        <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="Name">Name </label>
                  <input className="form__input" type="text" id="Name" placeholder="Name"/>
              </div>
            
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              
          </div>
          <div class="footer">
              <button type="submit" class="btn" onClick={()=>{navigate("/dashboard/student")}}>Login</button>
          </div>
      </div>
    )
}

export default Login;

/*<Grid> 
            <Paper  style={paperStyle}>
                <Grid align='center'>
                  <Avatar style={avatarStyle}> <LockOutlinedIcon/> </Avatar>
                  <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' margin ='normal' fullWidth/>
                <TextField label='Password' placeholder='Enter password' type='password' margin ='normal' fullWidth/>
                <FormControlLabel
                    control={
                     <Checkbox  name="checkedB" color="info" />
                    }
                    label="Remember me"
                />
                <Button type='submit'  variant='contained' style={btnstyle} fullWidth>Sign In</Button>
                <Typography>
                    <Link href='#' color="rgb(8 154 214)">
                    Forgot Password ?
                    </Link>
                </Typography>
                <Typography> Don't have an account ? 
                    <Link href='#' color="rgb(8 154 214)" onClick={()=>handleChange("event",1)}>
                     Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>*/