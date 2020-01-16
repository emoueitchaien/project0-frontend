import React, { Component } from "react";
import {Button} from "@material-ui/core/";
import {
  Table,
  TableCell,
  // TableHead,
  TableRow,
  TableBody
} from "@material-ui/core";
import { Link } from "react-router-dom";

export class PrintExport extends Component {
  render() {
    const date = new Date();
    const dateinwords = date.toString().slice(0, 16);
    const {
      ProductName,
      Total,
      userName,
      quantity,
      modeSelection,
      rate
    } = this.props.location.state;
    // console.log(ProductName);
    let Qty = "";
    if (modeSelection === "1") Qty = `${quantity} KG(s)`;
    else if (modeSelection === "25") Qty = `${quantity} (25KGs Bag)`;
    else if (modeSelection === "30") Qty = `${quantity} (30KGs Bag)`;
    else if (modeSelection === "50") Qty = `${quantity} (50KGs Bag)`;
    return (
      <React.Fragment>
        <div
          style={{
            position: "relative",
            width: 400,
            textAlign: "center",
            margin: "auto",
            paddingTop: 60
          }}
        >
          <br />
          <br />
          <Table stickyHeader aria-label="sticky table">
            <TableBody>
              <TableRow>
                <TableCell>Date:</TableCell>
                <TableCell>{dateinwords}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Customer:</TableCell>
                <TableCell>{userName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product Name:</TableCell>
                <TableCell>{ProductName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quantity:</TableCell>
                <TableCell>{Qty}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rate:</TableCell>
                <TableCell>{rate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total:</TableCell>
                <TableCell>{Total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <br />
          <br />
          <style>{`@media print {.no-print{display: none;}}`}</style>
          <div className="no-print">
            <Button
              color="primary"
              variant="contained"
              onClick={() => window.print()}
            >
              Print
            </Button>
            &emsp;
            <Button
              component={Link}
              to={"/exports"}
              color="primary"
              variant="contained"
            >
              Back
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PrintExport;
