import React, { Component } from "react";
import { CssBaseline} from "@material-ui/core";
import axios from "axios";

// import Inputs from "./Inputs";
import Inputs from "./Inputs";

const classes = {
  root: {
    marginTop: 80,
    marginLeft: 60
  }
};

class Exports extends Component {
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
      rate: 0,
      modeSelection:""
    };
  }
  //handling Data events ------------------------------------------//
  componentDidMount = () => {
    axios.get("https://mgmtsys.herokuapp.com/products").then((res) => {
      this.setState({ products: res.data });
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      ProductName: this.state.ProductName,
      Quantity:this.state.quantity,
      Rate:this.state.rate,
      mode:this.state.modeSelection,
      Total: this.state.Total,
      Customer: this.state.userName,
      Customer_Phone_No: this.state.userPno
    };
    
    
    axios
      .post("https://mgmtsys.herokuapp.com/exports/add", newData)
      .then(() => alert("Data is added!"))
      .catch((err) => alert(err));

    let updateAvailable =
      Number(this.state.selectedProduct.Available) -
      (Number(this.state.quantity)*Number(this.state.modeSelection));
      
    const updateData = {
      ProductName: this.state.selectedProduct.ProductName,
      PricePerKg: this.state.selectedProduct.PricePerKg,
      PricePer25Bag: this.state.selectedProduct.PricePer25Bag,
      PricePer30Bag: this.state.selectedProduct.PricePer30Bag,
      PricePer50Bag: this.state.selectedProduct.PricePer50Bag,
      Available: updateAvailable
    };
    axios
      .put(
        "https://mgmtsys.herokuapp.com/products/update/" +
          this.state.selectedProduct._id,
        updateData
      )
      .then(() => {
        this.handleReset();
      });
  };
  handleReset = () => {
    this.setState({
      Total: 0,
      ProductName: "",
      userName: "",
      userPno: "",
      selectedProduct: [],
      quantity: "",
      rate: 0,
      modeSelection:""
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
  handleModeChange = (event) => {
    this.setState(
      {
        modeSelection: event.target.value
      },
      () => {
        let rate = 0;
        const {modeSelection} = this.state;
        if(modeSelection === "1")
          rate = this.state.selectedProduct.PricePerKg;
        else if(modeSelection === "25")
          rate = this.state.selectedProduct.PricePer25Bag;
        else if(modeSelection === "30")
          rate = this.state.selectedProduct.PricePer30Bag;
        else if(modeSelection === "50")
          rate = this.state.selectedProduct.PricePer50Bag;
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
          <h1 align="center">Exports Page</h1>
          <Inputs
            mode={1}
            state={this.state}
            handleSubmit={this.handleSubmit}
            handleReset={this.handleReset}
            handleProductChange={this.handleProductChange}
            handleModeChange={this.handleModeChange}
            handleQChange={this.handleQChange}
            handleChange={this.handleChange}
          />
        </div>
      </CssBaseline>
    );
  }
}

export default Exports;
