import React from "react";
import {
  Select,
  InputLabel,
  Button,
  MenuItem,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  position: {
    marginLeft: theme.spacing(8)
  },
  buttons: {
    marginTop: theme.spacing(5)
  }
}));

const Inputs = (props) => {
  const classes = useStyles();
  const user = props.mode === 0 ? "Merchant" : "Customer";
  return (
    <React.Fragment>
      <h4>Product Details</h4>
      <div className={classes.root}>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Select
            value={props.state.ProductName}
            onChange={props.handleProductChange}
            style={{ width: 130 }}
          >
            {props.state.products.map((current) => {
              return (
                <MenuItem key={current._id} value={current.ProductName}>
                  {current.ProductName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl component="fieldset" className={classes.position}>
          <RadioGroup value={props.state.radio} onChange={props.handleRadio}>
            <FormControlLabel
              value="perkg"
              control={<Radio />}
              label="Per Kg"
            />
            <FormControlLabel
              value="perbag"
              control={<Radio />}
              label="Per Bag"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          disabled
          variant="outlined"
          value={props.state.rate}
          style={{ width: 80 }}
          className={classes.position}
        />
        <TextField
          variant="outlined"
          label="Quantity"
          value={props.state.quantity}
          onChange={props.handleQChange}
          style={{ width: 100 }}
          // onChange={handleQchange}
          className={classes.position}
        />
        <TextField
          variant="outlined"
          label="Total"
          disabled
          value={props.state.Total}
          className={classes.position}
        />
      </div>
      <br />
      <br />
      <h4>{user} Details</h4>
      <div className={classes.root}>
        <TextField
          variant="outlined"
          label="Name"
          value={props.state.userName}
          onChange={props.handleChange("userName")}
        />
        <TextField
          variant="outlined"
          className={classes.position}
          label="Phone No"
          value={props.state.userPno}
          onChange={props.handleChange("userPno")}
        />
      </div>
      <div className={clsx(classes.buttons, classes.root)}>
        <Button variant="contained" style={{ width: "200px" }} color="primary"
        onClick={props.handleSubmit}
        >
          Add
        </Button>
        <Button
          variant="contained"
          style={{ width: "200px" }}
          color="secondary"
          className={classes.position}
          onClick={props.handleReset}
        >
          Reset
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Inputs;
