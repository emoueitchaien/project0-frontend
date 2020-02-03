import React, { Component } from "react";
import { CssBaseline, Button } from "@material-ui/core";
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
    width: "55%"
  },
  ratesBar: {
    width: "45%",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4)
  }
}));

const StatusList = props => {
  return props.data.map(rate => {
    return (
      <TableRow key={rate._id}>
        <TableCell>{rate.ProductName}</TableCell>
        <TableCell>{rate.Available}</TableCell>
      </TableRow>
    );
  });
};

const RateList = props => {
  return props.data.map(rate => {
    return (
      <TableRow key={rate._id}>
        <TableCell>{rate.ProductName}</TableCell>
        <TableCell>{rate.PricePerKg}</TableCell>
        <TableCell>{rate.PricePer25Bag}</TableCell>
        <TableCell>{rate.PricePer30Bag}</TableCell>
        <TableCell>{rate.PricePer50Bag}</TableCell>
      </TableRow>
    );
  });
};
const handleSubmit = e => {
  localStorage.removeItem("token");
  window.location.assign("http://localhost:3000");
};
const Page = props => {
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
                <TableCell>Available KG</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StatusList data={props.data} />
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
                <TableCell>25KG Bag</TableCell>
                <TableCell>30KG Bag</TableCell>
                <TableCell>50KG Bag</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <RateList data={props.data} />
            </TableBody>
          </Table>
        </Card>
      </div>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          paddingTop: 60
        }}
      >
        <Button
          variant="contained"
          style={{ width: "200px" }}
          color="primary"
          onClick={handleSubmit}
        >
          Log Out
        </Button>
      </div>
    </CssBaseline>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios.get("https://mgmtsys.herokuapp.com/products").then(response => {
      this.setState({
        products: response.data
      });
    });
  }
  render() {
    return <Page data={this.state.products} />;
  }
}

export default Home;
