import React from "react";
import { CssBaseline } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableHead,TableBody, TableCell, TableRow } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    marginLeft: theme.spacing(8)
  }
}));

const StatusList = () => {
  return (
    <TableRow>
      <TableCell>Mansuli</TableCell>
      <TableCell>500</TableCell>
      <TableCell>10</TableCell>
    </TableRow>
  );
};

const RateList = () => {
  return (
    <TableRow>
      <TableCell>Mansuli</TableCell>
      <TableCell>500</TableCell>
      <TableCell>400</TableCell>
    </TableRow>
  );
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
                <TableCell>Available (Bags)</TableCell>
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
