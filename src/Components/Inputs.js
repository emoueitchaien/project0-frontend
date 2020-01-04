import React from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField
} from "@material-ui/core";
import { Button } from "@material-ui/core";
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
  //State Definitions
  const [products, setValue] = React.useState([
    {
      id: 1,
      productname: "mansuli",
      productpriceperkg: "100",
      productpriceperbag: "80"
    },
    {
      id: 2,
      productname: "andi",
      productpriceperkg: "180",
      productpriceperbag: "150"
    }
  ]);
  //States Definitions
  const [currentProduct, setProduct] = React.useState("");
  const [radio, setRadio] = React.useState("perkg");
  const [rate, setRate] = React.useState("");
  const classes = useStyles();

  //handling function
  const handleChange = (event) => {
    setProduct(event.target.value);
  };
  const handleRadio = (event) => {
    setRadio(event.target.value);
    // let obj = products.find((query) => query.productname === currentProduct);
    // return radio === "perkg"
    //   ? setRate(obj.productpriceperkg)
    //   : setRate(obj.productpriceperbag);
  };
  const user = ((props.state === 0) ? "Merchant" : "Customer");
  return (
    <React.Fragment>
      <h4>Product Details</h4>
      <div className={classes.root}>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Select
            value={currentProduct}
            onChange={handleChange}
            style={{ width: 130 }}
          >
            {products.map((current) => {
              return (
                <MenuItem key={current.id} value={current.productname}>
                  {current.productname}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl component="fieldset" className={classes.position}>
          <RadioGroup value={radio} onChange={handleRadio}>
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
          variant="outlined"
          disabled
          label="Rate"
          value={100}
          style={{ width: 80 }}
          className={classes.position}
        />
        <TextField
          variant="outlined"
          label="Quantity"
          style={{ width: 100 }}
          onChange={handleChange}
          className={classes.position}
        />
        <TextField
          variant="outlined"
          label="Total"
          onChange={handleChange}
          className={classes.position}
        />
      </div>
      <br />
      <br />
      <h4>{user} Details</h4>
      <div className={classes.root}>
        <TextField variant="outlined" label="Name" value="" />
        <TextField
          variant="outlined"
          className={classes.position}
          label="Phone No"
          value=""
        />
      </div>
      <div className={clsx(classes.buttons, classes.root)}>
        <Button variant="contained" style={{width:'200px'}} color="primary" onClick={() => console.log()}>Add</Button>
        <Button variant="contained" style={{width:'200px'}} color="secondary" className={classes.position} onClick={() => console.log()}>
          Reset
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Inputs;
