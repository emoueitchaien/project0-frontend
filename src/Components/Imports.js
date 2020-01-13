import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";
import axios from "axios";

//Importing components
import Inputs from "./Inputs";

const classes = {
  root: {
    marginTop: 80,
    marginLeft: 60
  }
};

class Imports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      Total: 0,
      ProductName: "",
      userName: "",
      userPno: "",
      selectedProduct: [],
      quantity: "",
      radio: "",
      rate: 0
    };
  }
  //handling Data events ------------------------------------------//
  componentDidMount = () => {
    axios.get("http://localhost:5000/products").then((res) => {
      this.setState({ products: res.data });
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      ProductName: this.state.ProductName,
      Total: this.state.Total,
      Merchant: this.state.userName,
      Merchant_Phone_No: this.state.userPno
    };

    axios
      .post("http://localhost:5000/imports/add", newData)
      .then(() => alert("Data is added!"))
      .catch((err) => alert(err));

    let updateAvailable =
      Number(this.state.selectedProduct.Available) +
      (this.state.radio === "perkg"
        ? Number(this.state.quantity)
        : Number(this.state.quantity * 50));
    const updateData = {
      ProductName: this.state.selectedProduct.ProductName,
      PricePerKg: this.state.selectedProduct.PricePerKg,
      PricePerBag: this.state.selectedProduct.PricePerBag,
      Available: updateAvailable
    };
    axios.put(
      "http://localhost:5000/products/update/" + this.state.selectedProduct._id,
      updateData
    ).then(()=>{this.handleReset()});
  };
  handleReset = () => {
    this.setState({
      products: [],
      Total: 0,
      ProductName: "",
      userName: "",
      userPno: "",
      quantity: "",
      selectedProduct: [],
      radio: "",
      rate: 0
    });
    axios.get("http://localhost:5000/products").then((res) => {
      this.setState({ products: res.data });
    });
  };
  //handling user input events----------------------------------------//
  handleProductChange = (event) => {
    let obj = this.state.products.find(
      (query) => query.ProductName === event.target.value
    );
    this.setState({
      ProductName: event.target.value,
      selectedProduct: obj
    });
  };
  handleRadio = (event) => {
    this.setState(
      {
        radio: event.target.value
      },
      () => {
        let rate =
          this.state.radio === "perkg"
            ? this.state.selectedProduct.PricePerKg
            : this.state.selectedProduct.PricePerBag;
        this.setState({
          rate: rate
        });
      }
    );
  };
  handleQChange = (event) => {
    this.setState({ quantity: event.target.value }, () => {
      let total = this.state.rate * this.state.quantity;
      this.setState({
        Total: total
      });
    });
  };
  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };
  render() {
    return (
      <CssBaseline>
        <div style={classes.root}>
          <h1 align="center">Imports Page</h1>
          <Inputs
            mode={0}
            state={this.state}
            handleSubmit={this.handleSubmit}
            handleReset={this.handleReset}
            handleProductChange={this.handleProductChange}
            handleRadio={this.handleRadio}
            handleQChange={this.handleQChange}
            handleChange={this.handleChange}
          />
        </div>
      </CssBaseline>
    );
  }
}

export default Imports;
