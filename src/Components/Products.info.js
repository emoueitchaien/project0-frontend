import React, { Component } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import Products from "./Products";
import ProductTable from "./ProductTable";

export default class Products_info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Product: "",
      PricePerKg: "",
      PricePer25Bag: "",
      PricePer30Bag: "",
      PricePer50Bag: "",
      Available: 0,
      Available25Bag: 0,
      Available30Bag: 0,
      Available50Bag: 0,
      ProductsTable: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/products/")
      .then(res => this.setState({ ProductsTable: res.data }))
      .catch(err => console.log(err));
  }

  onDelete = id => {
    axios
      .delete("http://localhost:5000/products/delete/" + id)
      .then(() => alert("Item Deleted"))
      .catch(err => alert(err));
    this.setState({
      ProductsTable: this.state.ProductsTable.filter(el => el._id !== id)
    });
  };

  onSubmit = () => {
    const Products = {
      ProductName: this.state.Product,
      PricePerKg: this.state.PricePerKg,
      PricePer25Bag: this.state.PricePer25Bag,
      PricePer30Bag: this.state.PricePer30Bag,
      PricePer50Bag: this.state.PricePer50Bag,
      Available: this.state.Available,
      Available25Bag: this.state.Available25Bag,
      Available30Bag: this.state.Available30Bag,
      Available50Bag: this.state.Available50Bag
    };
    axios
      .post("http://localhost:5000/products/add", Products)
      .then(() => {
        axios
          .get("http://localhost:5000/products/")
          .then(res => this.setState({ ProductsTable: res.data }))
          .catch(err => alert(err));
      })
      .catch(err => alert("Error::" + err));

    this.handleReset();
  };
  handleReset = () => {
    this.setState({
      Product: "",
      PricePerKg: "",
      PricePer25Bag: "",
      PricePer30Bag: "",
      PricePer50Bag: "",
      Available: 0,
      Available25Bag: 0,
      Available30Bag: 0,
      Available50Bag: 0
    });
    axios
      .get("http://localhost:5000/products/")
      .then(res => this.setState({ ProductsTable: res.data }))
      .catch(err => console.log(err));
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    return (
      <div>
        <Products
          values={this.state}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
        />
        <Container style={Styles.table}>
          <ProductTable
            Tableinfo={this.state.ProductsTable}
            onDelete={this.onDelete}
          />
        </Container>
      </div>
    );
  }
}

const Styles = {
  table: {
    marginLeft: "4%",
    marginTop: "4%"
  }
};