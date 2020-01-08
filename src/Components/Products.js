import React from "react";
import { TextField, Button, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(4)
  },
  position: {
    marginTop: theme.spacing(13),
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(1)
  },
  input: {
    marginRight: theme.spacing(3)
  }
}));

export default function Products(props) {
  const classes = useStyles();
  return (
    <CssBaseline>
      <div className={classes.position}>
        <h3 align="left">Add Product Name and Rates:</h3>
      </div>

      <div className={classes.root}>
        <TextField
          label="Products Name"
          variant="outlined"
          color="primary"
          value={props.values.Product}
          onChange={props.handleChange("Product")}
          className={classes.input}
        />
        <TextField
          label="Price Per Kg"
          variant="outlined"
          color="primary"
          value={props.values.PricePerKg}
          onChange={props.handleChange("PricePerKg")}
          className={classes.input}
        />
        <TextField
          label="25KG Bag Price"
          variant="outlined"
          color="primary"
          value={props.values.PricePer25Bag}
          onChange={props.handleChange("PricePer25Bag")}
          className={classes.input}
        />
        <TextField
          label="30KG Bag Price"
          variant="outlined"
          color="primary"
          value={props.values.PricePer30Bag}
          onChange={props.handleChange("PricePer30Bag")}
          className={classes.input}
        />
        <TextField
          label="50KG Bag Price"
          variant="outlined"
          color="primary"
          value={props.values.PricePer50Bag}
          onChange={props.handleChange("PricePer50Bag")}
          className={classes.input}
        />
      </div>
      <div className={classes.root}>
        <h3 align="left">Add Now Available Quantities:</h3>
      </div>
      <div className={classes.root}>
        <TextField
          label="AVL  KGs"
          variant="outlined"
          color="primary"
          value={props.values.Available}
          onChange={props.handleChange("Available")}
          className={classes.input}
        />
        
        <Button
          variant="contained"
          color="primary"
          className={classes.input}
          onClick={props.onSubmit}
        >
          Add Product
        </Button>
      </div>
    </CssBaseline>
  );
}