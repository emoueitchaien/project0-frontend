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

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Product: "",
      Username: "",
      exports: [],
      date: "",
      imports: [],
      modeSelection: 1
    };
  }
  onSearch = () => {
    if (
      this.state.date === "" &&
      this.state.Product === "" &&
      this.state.Username === ""
    ) {
      if (this.state.modeSelection)
        axios
          .get("https://mgmtsys.herokuapp.com/exports/")
          .then((res) => this.setState({ exports: res.data.reverse() }))
          .catch((err) => console.log(err));
      else
        axios
          .get("https://mgmtsys.herokuapp.com/imports/")
          .then((res) => this.setState({ imports: res.data.reverse() }))
          .catch((err) => console.log(err));
    }
  };

  onDelete = (id, trigger) => {
    if (trigger) {
      axios
        .delete("https://mgmtsys.herokuapp.com/exports/delete/" + id)
        .then(() => alert("Item Deleted"))
        .catch((err) => alert(err));
      this.setState({
        exports: this.state.exports.filter((el) => el._id !== id)
      });
    } else {
      axios
        .delete("https://mgmtsys.herokuapp.com/imports/delete/" + id)
        .then(() => alert("Item Deleted"))
        .catch((err) => alert(err));
      this.setState({
        imports: this.state.imports.filter((el) => el._id !== id)
      });
    }
  };

  //handle change Functions
  handleChangeProducts = (e) => {
    this.setState({ Product: e.target.value });
  };

  handleChangeUsername = (e) => {
    this.setState({ Username: e.target.value });
  };
  handleChangeMode = (e) => {
    this.setState({ modeSelection: e.target.value });
  };
  onChangeDate = (e) => {
    this.setState({
      date: e.target.value
    });
  };
  handleData = () => {
    return this.state.modeSelection ? this.state.exports : this.state.imports;
  };

  render() {
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
          <FormControl
            component="fieldset"
            style={Styles.inputfileds}
          >
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
        </div>

        <div style={Styles.table}>
          <Typography align="center" variant="h4">
            {header} Transactions
          </Typography>
          <TableContainer style={Styles.tables}>
            <SearchResults
              mode={this.state.modeSelection}
              data={this.handleData()}
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
