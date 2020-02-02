import React, { useState } from "react";
import {
  TextField,
  Paper,
  makeStyles,
  Typography,
  Button
} from "@material-ui/core";
import axios from "axios";
const styles = makeStyles({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "99.5vh",
    width: "99.9vw",
    backgroundColor: "#a8ab6c"
  },
  input:{
      display:'flex',
      flexDirection:'column'
  },
  button: {
    marginTop: "2rem"
  }
});

const Login = (props) => {
  const classes = styles();
  const [check, setCheck] = useState("");
  const handleChange = (event) => {
    setCheck(event.target.value);
  };
  const misMatch =()=>{
    alert("Wrong Password!!");
    setCheck("");
  }
  const handleSubmit = (event) => {
    axios
      .get("http://localhost:5000/login/")
      .then((res) =>{
        check === res.data[0].password
          ? props.setLogin(true)
          : misMatch();
      })
      .catch((err) => alert(err));
  };
  return (
    <React.Fragment>
      <Paper className={classes.paper} variant="outlined">
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Rice Mill System
        </Typography>
        <div className={classes.input}>
          <TextField
            type="password"
            name="password"
            label="Password"
            value={check}
            variant="filled"
            onChange={handleChange}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default Login;
