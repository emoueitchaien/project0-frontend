import React, { Component } from "react";
import { Button } from "@material-ui/core/";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody
} from "@material-ui/core";
import { Link } from "react-router-dom";

const ExportInfo = props => (
  <TableRow>
    <TableCell>{props.personName}</TableCell>
    <TableCell>{props.row.ProductName}</TableCell>
    <TableCell>{props.row.Quantity}</TableCell>
    <TableCell>{props.row.Rate}</TableCell>
    <TableCell>{props.row.Total}</TableCell>
  </TableRow>
);

const DataTable = props => {
  return props.data
    .filter(currentinfo => props.idsToPrint.includes(currentinfo._id))
    .map(currentinfo => {
      const userName = props.modeSelection
        ? currentinfo.Customer
        : currentinfo.Merchant;
      const userPno = props.modeSelection
        ? currentinfo.Customer_Phone_No
        : currentinfo.Merchant_Phone_No;
      return (
        <ExportInfo
          key={currentinfo._id}
          row={currentinfo}
          personName={userName}
          personPno={userPno}
        />
      );
    });
};

export class PrintExport extends Component {
  render() {
    const date = new Date();
    const dateinwords = date.toString().slice(0, 15);
    const { data, modeSelection, ids } = this.props.location.state;
    const idsToPrint = Array.from(ids);
    let subtotal = 0;
    data
      .filter(currentinfo => idsToPrint.includes(currentinfo._id))
      .forEach(element => {
        subtotal = subtotal + element.Total;
      });
    console.log(subtotal);
    // console.log(ProductName);
    // let Qty = "";
    // if (modeSelection === "1") Qty = `${quantity} KG(s)`;
    // else if (modeSelection === "25") Qty = `${quantity} (25KGs Bag)`;
    // else if (modeSelection === "30") Qty = `${quantity} (30KGs Bag)`;
    // else if (modeSelection === "50") Qty = `${quantity} (50KGs Bag)`;
    return (
      <React.Fragment>
        <div
          style={{
            position: "relative",
            width: 600,
            textAlign: "center",
            margin: "auto",
            paddingTop: 60
          }}
        >
          <br />
          <br />
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>{dateinwords}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Line Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <DataTable
                // key={data._id}
                data={data}
                modeSelection={modeSelection}
                idsToPrint={idsToPrint}
              />
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Subtotal :</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{subtotal}</TableCell>
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
              to={"/search"}
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
