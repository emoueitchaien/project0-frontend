import React from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const ExportInfo = props => (
  <TableRow>
    <TableCell>{props.row.createdAt.slice(0, 10)}</TableCell>
    <TableCell>{props.row.ProductName}</TableCell>
    <TableCell>{props.row.Quantity}</TableCell>
    <TableCell>{props.row.Rate}</TableCell>
    <TableCell>{props.row.Total}</TableCell>
    <TableCell>{props.selectUser}</TableCell>
    <TableCell>{props.selectPno}</TableCell>
    <TableCell>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.onDelete(props.row._id, props.mode)}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginLeft: "10px" }}
        onClick={() => props.onPrint(props.row._id)}
      >
        Add to Print
      </Button>
    </TableCell>
  </TableRow>
);

const DataTable = props => {
  return props.data.map(currentinfo => {
    const userName = props.mode ? currentinfo.Customer : currentinfo.Merchant;
    const userPno = props.mode
      ? currentinfo.Customer_Phone_No
      : currentinfo.Merchant_Phone_No;
    return (
      <ExportInfo
        row={currentinfo}
        selectUser={userName}
        selectPno={userPno}
        mode={props.mode}
        onDelete={props.onDelete}
        onPrint={props.onPrint}
        key={currentinfo._id}
      />
    );
  });
};

export default function SearchResults(props) {
  const userLabel = props.mode ? "Customer Name" : "Merchant Name";
  const userPno = props.mode ? "Customer No" : "Merchant No";
  return (
    <div>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Products</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell>Transaction</TableCell>
            <TableCell>{userLabel}</TableCell>
            <TableCell>{userPno}</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <DataTable
            data={props.data}
            mode={props.mode}
            onDelete={props.onDelete}
            onPrint={props.onPrint}
          />
        </TableBody>
      </Table>
    </div>
  );
}
