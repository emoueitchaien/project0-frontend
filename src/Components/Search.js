import React, { Component } from "react";
import {
  TextField,
  Button,
  CssBaseline,
  TableContainer
} from "@material-ui/core";
import ExportsTable from "./ExportsTable";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: "",
      Merchant: "",
      exports: [],
      date: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exports/")
      .then(res =>
        this.setState({
          exports: res.data.reverse()
        })
      )
      .catch(err => console.log(err));
  }

  onSearch = () => {
    if (
      this.state.date === "" &&
      this.state.Product === "" &&
      this.state.Merchant === ""
    ) {
      alert("Please Enter the Information");
    } else if (this.state.Product === "" && this.state.Merchant === "") {
      let search = this.state.exports.filter(
        searchitem => searchitem.createdAt.slice(0, 10) === this.state.date
      );
      this.setState({ exports: search });
    } else if (this.state.date === "" && this.state.Merchant === "") {
      let search = this.state.exports.filter(
        searchitem => searchitem.ProductName === this.state.Product
      );
      this.setState({ exports: search });
    } else if (this.state.date === "" && this.state.Product === "") {
      let search = this.state.exports.filter(
        searchitem => searchitem.Customer === this.state.Merchant
      );
      this.setState({ exports: search });
    } else if (this.state.date === "") {
      let search = this.state.exports.filter(
        searchitem =>
          searchitem.ProductName === this.state.Product &&
          searchitem.Customer === this.state.Merchant
      );
      this.setState({ exports: search });
    } else if (this.state.Product === "") {
      let search = this.state.exports.filter(
        searchitem =>
          searchitem.createdAt.slice(0, 10) === this.state.date &&
          searchitem.Customer === this.state.Merchant
      );
      this.setState({ exports: search });
    } else if (this.state.Merchant === "") {
      let search = this.state.exports.filter(
        searchitem =>
          searchitem.createdAt.slice(0, 10) === this.state.date &&
          searchitem.ProductName === this.state.Product
      );
      this.setState({ exports: search });
    } else {
      let search = this.state.exports.filter(
        searchitem =>
          searchitem.createdAt.slice(0, 10) === this.state.date &&
          searchitem.ProductName === this.state.Product &&
          searchitem.Customer === this.state.Merchant
      );
      this.setState({ exports: search });
    }
  };

  onDelete = id => {
    axios
      .delete("http://localhost:5000/exports/delete/" + id)
      .then(() => alert("Item Deleted"))
      .catch(err => alert(err));
    this.setState({
      exports: this.state.exports.filter(el => el._id !== id)
    });
  };

  //handle change Functions
  handleChangeProducts = e => {
    this.setState({ Product: e.target.value });
  };

  handleChangeMerchant = e => {
    this.setState({ Merchant: e.target.value });
  };

  onChangeDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  render() {
    return (
      <CssBaseline>
        <div style={Styles.inputfiled}>
          <TextField
            style={Styles.inputfileds}
            id="date"
            label="Date"
            type="date"
            format="yyyy-mm-dd"
            onChange={this.onChangeDate}
            defaultValue={this.state.date}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            style={Styles.inputfileds}
            label="Product Name"
            onChange={this.handleChangeProducts}
            variant="outlined"
            defaultValue={this.state.Product}
          />
          <TextField
            style={Styles.inputfileds}
            label="Customer Name"
            onChange={this.handleChangeMerchant}
            variant="outlined"
            defaultValue={this.state.Merchant}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.onSearch}
            style={Styles.button}
          >
            <SearchIcon />
          </Button>
        </div>
        <div style={Styles.table}>
          <TableContainer style={Styles.tables}>
            <ExportsTable
              exports={this.state.exports}
              onDelete={this.onDelete}
            />
          </TableContainer>
        </div>
      </CssBaseline>
    );
  }
}

const Styles = {
  inputfiled: {
    marginTop: "6%",
    marginLeft: "5%",
    marginBottom: "2%"
  },
  inputfileds: {
    marginTop: "3%",
    marginLeft: "3%",
    marginBottom: "2%"
  },
  button: {
    marginTop: "3%",
    marginLeft: "5%",
    height: 50
  },
  tables: {
    height: 350
  },
  table: {
    marginLeft: "3%"
  }
};
