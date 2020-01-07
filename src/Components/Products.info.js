import React, { Component } from "react";
import Products from "./Products";
import axios from 'axios';
import ProductTable from "./ProductTable";
import { StylesProvider, Container } from "@material-ui/core";

export default class Products_info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Product:"",
      PricePerKg: 0,
      PricePerBag: 0,
      Available: 0,
      ProductsTable:[],
    };
  }

  componentDidMount(){
    axios.get("http://localhost:5000/products/")
    .then(res=>this.setState({ProductsTable:res.data}))
    .catch(err=>console.log(err));
    
  }

   onDelete=(id)=>{
    axios.delete("http://localhost/products/delete/"+id)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));
    this.setState({
      ProductsTable:this.state.ProductsTable.filter(el=>el._id!==id)
    })
}

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

    //  console.log(Products);
    //  console.log(this.state.ProductsTable);
     
  }

  handleChange = (input) => e => {
    this.setState({ [input]: e.target.value });
}

  render() {
    return (
      <div>
        <Products values={this.state} handleChange={this.handleChange} onSubmit={this.onSubmit} />
        <Container style={Styles.table}>
        <ProductTable Tableinfo={this.state.ProductsTable} onDelete={this.onDelete}/>
      </Container>
      </div>
    );
  }
}

const Styles={
  table:{
     marginLeft:"4%",
     marginTop:"4%"
  }
}
