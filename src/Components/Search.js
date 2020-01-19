import React, { Component } from "react";
import {
  TextField,
  Button,
  CssBaseline,
  TableContainer,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from "@material-ui/core";
import SearchResults from "./SearchResults";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: "",
      Username: "",
      search: [],
      data: [],
      date: "",
      modeSelection: 1,
      ids: new Set()
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    if (this.state.modeSelection)
      axios
        .get("https://mgmtsys.herokuapp.com/exports/")
        .then(res => this.setState({ data: res.data.reverse() }))
        .catch(err => console.log(err));
    else
      axios
        .get("https://mgmtsys.herokuapp.com/imports/")
        .then(res => this.setState({ data: res.data.reverse() }))
        .catch(err => console.log(err));
  };

  onSearch = () => {
    if (
      this.state.date === "" &&
      this.state.Username === "" &&
      this.state.Product === ""
    ) {
      alert("All Data are displayed!");
      this.setState({
        search: this.state.data
      });
    } else {
      let search = [];
      if (this.state.modeSelection)
        search = this.state.data.filter(
          item =>
            item.createdAt.slice(0, 10).includes(this.state.date) &&
            item.ProductName.toLowerCase().includes(
              this.state.Product.toLowerCase()
            ) &&
            item.Customer.toLowerCase().includes(
              this.state.Username.toLowerCase()
            )
        );
      else
        search = this.state.data.filter(
          item =>
            item.createdAt.slice(0, 10).includes(this.state.date) &&
            item.ProductName.toLowerCase().includes(
              this.state.Product.toLowerCase()
            ) &&
            item.Merchant.toLowerCase().includes(
              this.state.Username.toLowerCase()
            )
        );

      this.setState({ search: search });
    }
  };

  onPrint = id => {
    this.setState({
      ids: new Set([...this.state.ids, id])
    });
  };

  onDelete = (id, trigger) => {
    if (trigger) {
      axios
        .delete("https://mgmtsys.herokuapp.com/exports/delete/" + id)
        .then(() => alert("Item Deleted"))
        .catch(err => alert(err));
      this.setState({
        search: this.state.search.filter(el => el._id !== id)
      });
    } else {
      axios
        .delete("https://mgmtsys.herokuapp.com/imports/delete/" + id)
        .then(() => alert("Item Deleted"))
        .catch(err => alert(err));
      this.setState({
        search: this.state.search.filter(el => el._id !== id)
      });
    }
  };

  //handle change Functions
  handleChangeProducts = e => {
    this.setState({ Product: e.target.value });
  };

  handleChangeUsername = e => {
    this.setState({ Username: e.target.value });
  };
  handleChangeMode = e => {
    this.setState({ modeSelection: e.target.value }, () => this.getData());
    this.setState({ search: [] });
  };
  onChangeDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  render() {
    console.log(this.state.ids);
    const header = this.state.modeSelection ? "Exports" : "Imports";
    const label = this.state.modeSelection ? "Customer Name" : "Merchant Name";
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
            label={label}
            onChange={this.handleChangeUsername}
            variant="outlined"
            defaultValue={this.state.Merchant}
          />
          <FormControl component="fieldset" style={Styles.inputfileds}>
            <InputLabel>Search Area</InputLabel>
            <Select
              value={this.state.modeSelection}
              onChange={this.handleChangeMode}
              style={{ width: "150px" }}
            >
              <MenuItem value={1}>Exports</MenuItem>
              <MenuItem value={0}>Imports</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onSearch}
            style={Styles.button}
          >
            <SearchIcon />
          </Button>
          <Button
            variant="contained"
            style={Styles.button2}
            color="secondary"
            component={Link}
            to={{
              pathname: "/printExport",
              state: this.state
            }}
          >
            Print
          </Button>
        </div>

        <div style={Styles.table}>
          <Typography align="center" variant="h4">
            {header} Transactions
          </Typography>
          <TableContainer style={Styles.tables}>
            <SearchResults
              mode={this.state.modeSelection}
              data={this.state.search}
              onDelete={this.onDelete}
              onPrint={this.onPrint}
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
  button2: {
    marginTop: "3%",
    marginLeft: "2%",
    height: 50,
    width: 100
  },
  tables: {
    height: "380px"
  },
  table: {
    marginLeft: "3%"
  }
};
