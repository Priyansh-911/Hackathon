import { Avatar, Button,  Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import './signup.css';

const Signup=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [Value, setValue] = useState("");
    const [pass, setPass] = useState("");

    const collectData= async ()=>{
        console.warn(name,email,pass);
        let result = await fetch("http://localhost:4500/register" , {
            method: "post",
            body: JSON.stringify({name,email,pass}),
            header: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        console.warn(result);
    };



    const paperStyle={padding:20, width:350 , margin:"0 auto"}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor:"#ffde59"}
    const btnstyle={margin:"10px 0", backgroundColor:"#ffde59"}
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
        <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="Name">Name </label>
                  <input className="form__input" type="text" id="Name" placeholder=" Name"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              
              <p>Are you a donor or a student?</p>
<input type="radio" id="donor" name="donor" value="donor"></input>
<label for="donor">Donor</label><br></br>

<input type="radio" id="student" name="donor" value="student"></input>
<label for="student">Student</label><br></br>
           
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>
    )
}

export default Signup;