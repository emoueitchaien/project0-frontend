import React from "react";
import {
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ProductTable from "./ProductTable";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(13),
    marginLeft: theme.spacing(4)
  },
  position: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(5)
  },
  input:{
    marginRight: theme.spacing(3)
  }
}));

const Products = () => {
  const classes = useStyles();

  //States Declarations
  const [Product, SetProduct] = React.useState("");
  const [PricePerKg, SetPricePerKg] = React.useState("");
  const [PricePerBag, SetPricePerBag] = React.useState("");

  //handle change Functions
  const handleChangeProducts = e => {
    SetProduct(e.target.value);
  };

  const handleChangePriceperkg = e => {
    SetPricePerKg(e.target.value);
  };

  const handleChangePriceperbag = e => {
    SetPricePerBag(e.target.value);
  };

  return (
    <CssBaseline>
      <div className={classes.root}>
          <TextField
            label="Products Name"
            variant="outlined"
            color="primary"
            defaultValue={Product}
            onChange={handleChangeProducts}
            className={classes.input}
          />
          <TextField
            label="Price Per Kg"
            variant="outlined"
            color="primary"
            defaultValue={PricePerKg}
            onChange={handleChangePriceperkg}
            className={classes.input}
          />
          <TextField
            label="Price Per Bag"
            variant="outlined"
            color="primary"
            defaultValue={PricePerBag}
            onChange={handleChangePriceperbag}
            className={classes.input}
          />
          <br />
          <Button variant="contained" color="primary" className={classes.input}>
            Add Product
          </Button>
      </div>

      <div className={classes.position}>
        <ProductTable />
      </div>
    </CssBaseline>
  );
};

export default Products;
