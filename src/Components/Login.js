import React, { useState, useEffect } from "react";
import {
  TextField,
  Paper,
  makeStyles,
  Typography,
  Button
} from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";
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
  input: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginTop: "2rem"
  }
});

const Login = props => {
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    setLogin(loggedIn);
  }, []);
  const classes = styles();
  const [check, setCheck] = useState("");

  const handleChange = event => {
    setCheck(event.target.value);
  };
  const misMatch = () => {
    alert("Wrong Password!!");
    setCheck("");
  };
  const handleSubmit = event => {
    axios
      .get("https://mgmtsys.herokuapp.com/login/")
      .then(res => {
        if (check === res.data[0].password) {
          localStorage.setItem("token", "anyrandomstring");
          props.setLogin(true);
        } else misMatch();
      })
      .catch(err => alert(err));
  };
  if (isLogin) {
    return <Redirect to="/" />;
  }
  return (
    <React.Fragment>
      <Paper className={classes.paper} variant="outlined">
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", marginBottom: "20px" }}
        >
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
