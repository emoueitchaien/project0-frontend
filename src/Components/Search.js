import React from "react";
import {
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

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

const Search = () => {
  const classes = useStyles();

  //States Declarations
  const [Product, SetProduct] = React.useState("");
  const [Merchant, SetMerchant] = React.useState("");

  //handle change Functions
  const handleChangeProducts = e => {
    SetProduct(e.target.value);
  };

  const handleChangeMerchant = e => {
    SetMerchant(e.target.value);
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
            label="Merchant Name"
            variant="outlined"
            color="primary"
            defaultValue={Merchant}
            onChange={handleChangeMerchant}
            className={classes.input}
          />
          <br />
          <Button variant="contained" color="primary" className={classes.input}>
            <SearchIcon/>
          </Button>
      </div>
      <div className={classes.position}>
      </div>
    </CssBaseline>
  );
};
export default Search;