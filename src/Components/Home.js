import React from "react";
import { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(4)
  },
  statusBar: {
    width: "70%"
  },
  ratesBar: {
    width: "20%",
    marginLeft: theme.spacing(4)
  }
}));

const StatusList = () => {
  const [rates, setRates] = useState([]);
  axios.get("http://localhost:5000/products").then(function(response) {
    setRates(response.data);
    // console.log(rates);
  });
  return rates.map(rate => {
    return (
      <TableRow>
        <TableCell>{rate.ProductName}</TableCell>
        <TableCell>{rate.Available}</TableCell>
        {/* <TableCell>'Total N/A now'</TableCell> */}
      </TableRow>
    );
  });
};

const RateList = () => {
  const [rates, setRates] = useState([]);
  axios.get("http://localhost:5000/products").then(function(response) {
    setRates(response.data);
    // console.log(rates);
  });

  return rates.map(rate => {
    return (
      <TableRow>
        <TableCell>{rate.ProductName}</TableCell>
        <TableCell>{rate.PricePerKg}</TableCell>
        <TableCell>{rate.PricePerBag}</TableCell>
      </TableRow>
    );
  });
};

const Home = () => {
  const classes = useStyles();
  return (
    <CssBaseline>
      <div className={classes.root}>
        <Card className={classes.statusBar}>
          <h1 align="center">Status</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Products</TableCell>
                <TableCell>Available (KG)</TableCell>
                {/* <TableCell>Available (Bags)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              <StatusList />
            </TableBody>
          </Table>
        </Card>
        <Card className={classes.ratesBar}>
          <h1 align="center">Rates</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Products</TableCell>
                <TableCell>Per KG</TableCell>
                <TableCell>Per Bag</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <RateList />
            </TableBody>
          </Table>
        </Card>
      </div>
    </CssBaseline>
  );
};

export default Home;