import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, setState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import "./signup.css";
import {ref,push,child,update} from "firebase/database";
import {database} from '../../firebase';

function RegistrationForm() {
  // const Signup=()=>{
  //     const [name, setName] = useState("");
  //     const [email, setEmail] = useState("");
  //     const [gender, setGender] = useState("");
  //     const [Value, setValue] = useState("");
  //     const [pass, setPass] = useState("");

  //     const collectData= async ()=>{
  //         console.warn(name,email,pass);
  //         let result = await fetch("http://localhost:4500/register" , {
  //             method: "post",
  //             body: JSON.stringify({name,email,pass}),
  //             header: {
  //                 "Content-Type": "application/json",
  //             },
  //         });
  //         result = await result.json();
  //         console.warn(result);
  //     };

  //     const paperStyle={padding:20, width:350 , margin:"0 auto"}
  //     const headerStyle={margin:0}
  //     const avatarStyle={backgroundColor:"#ffde59"}
  //     const btnstyle={margin:"10px 0", backgroundColor:"#ffde59"}
  //     const marginTop={marginTop: 5}
  //     const states = [
  //         {
  //           value: 'D',
  //           label: 'Delhi',
  //         },
  //         {
  //           value: 'P',
  //           label: 'Punjab',
  //         },
  //         {
  //           value: 'R',
  //           label: 'Rajasthan',
  //         },
  //         {
  //           value: 'H',
  //           label: 'Haryana',
  //         },
  //         {
  //             value: 'UP',
  //             label: 'Uttar Pradesh',
  //         },
  //       ];

  const [Name, setName] = useState(null);
  const [choice, setChoice] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "Name") {
      setName(value);
    }

    if (id === "email") {
      setEmail(value);
    }

    if (id === "choice"){
      setChoice(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    let obj = {
      Name: Name,
      email: email,
      choice: choice,
      password: password
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);
  };
  return (
    <div className="form" method="get">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="Name">
            Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="Name"
            placeholder=" Name"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
          />
        </div>

        <p>Are you a donor or a student?</p>
        <input type="radio" id="donor" name="choice" value="donor"></input>
        <label for="donor">Donor{" "}</label>
        <br></br>

        <input type="radio" id="student" name="choice" value="student"></input>
        <label for="student">Student{" "}</label>
        <br></br>

        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default RegistrationForm;
