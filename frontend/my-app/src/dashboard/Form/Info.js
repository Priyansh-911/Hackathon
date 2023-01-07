import { Avatar, Grid, Paper, Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useNavigate } from "react-router-dom";
import "./info.css";

const Info = () => {
    let navigate=useNavigate();
    const paperStyle={padding:40, width:1000, margin:"0 25px"}
    const avatarStyle={backgroundColor:'rgb(8 154 214)'}
    const btnstyle={margin:"50px 0"}

  return (
    <div className="form">
    <div className="form-body">
        <div className="caste">
            <label className="form__label" for="Name">Caste </label>
            <input className="form__input" type="text" id="Name" placeholder=" Caste"/>
        </div>
        <div className="ten">
            <label className="form__label" for="10marks">10th passing marks </label>
            <input  type="number" id="10marks" className="form__input" placeholder="Enter"/>
        </div>
        <div className="twelve">
            <label className="form__label" for="12marks">12th passing marks </label>
            <input  type="number" id="12marks" className="form__input" placeholder="Enter"/>
        </div>
        <p>Your place of origin?</p>
<input type="radio" id="UP" name="state" value="UP"></input>
<label for="UP">Uttar Pradesh</label><br></br>

<input type="radio" id="Punjab" name="state" value="Punjab"></input>
<label for="Punjab">Punjab</label><br></br>

<input type="radio" id="Delhi" name="state" value="Delhi"></input>
<label for="Delhi">Delhi</label><br></br>

<input type="radio" id="Haryana" name="state" value="Haryana"></input>
<label for="Haryana">Haryana</label><br></br>

<input type="radio" id="Rajasthan" name="state" value="Rajasthan"></input>
<label for="sRajasthan">Rajasthan</label><br></br>
        <div className="password">
            <label className="form__label" for="date" >Enter date of birth(DD/MM/YYYY) </label>
            <input className="form__input" type="date"  id="dob" placeholder="Enter"/>
        </div>
    </div>
    <div class="footer">
        <button type="submit" class="btn" onClick={()=>navigate("/dashboard/student")}>Submit</button>
    </div>
</div>
    
  )
}

export default Info