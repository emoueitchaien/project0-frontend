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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(4)
  },
  statusBar: {
    width: "60%"
  },
  ratesBar: {
    width: "40%",
    marginLeft: theme.spacing(4),
    marginRight:theme.spacing(4)
  }
}));

const StatusList = () => {
  const [rates, setRates] = useState([]);
  axios.get("https://mgmtsys.herokuapp.com/products").then(function(response) {
    setRates(response.data);
  });
  return rates.map((rate) => {
    return (
      <TableRow key={rate._id}>
        <TableCell>{rate.ProductName}</TableCell>
        <TableCell>{rate.Available}</TableCell>
      </TableRow>
    );
  });
};

const RateList = () => {
  const [rates, setRates] = useState([]);
  axios.get("https://mgmtsys.herokuapp.com/products").then(function(response) {
    setRates(response.data);
  });

  return rates.map((rate) => {
    return (
      <TableRow key={rate._id}>
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
              </TableRow>
            </TableHead>
            <TableBody>
              <StatusList/>
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
