import React, { Component } from "react";
import Products from "./Products";
import axios from 'axios'

export default class Products_info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Product:"",
      PricePerKg: 0,
      PricePerBag: 0,
      Available: 0
    };
  }

  // componentDidMount(){

  // }

  onSubmit=()=>
  {
     const Products={
       ProductName:this.state.Product,
       PricePerKg:this.state.PricePerKg,
       PricePerBag:this.state.PricePerBag,
       Available:this.state.Available
     }
     axios.post("http://localhost:5000/products/add",Products)
     .then(res=>console.log(res.data))
     .catch(err=>console.log("Error::"+err));

     console.log(Products);
     
  }

  handleChange = (input) => e => {
    this.setState({ [input]: e.target.value });
}

  render() {
    return (
      <div>
        <Products values={this.state} handleChange={this.handleChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}
