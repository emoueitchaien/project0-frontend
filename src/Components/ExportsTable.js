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
    <TableCell>{props.row.Customer}</TableCell>
    <TableCell>{props.row.Customer_Phone_No}</TableCell>
    <TableCell>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.onDelete(props.row._id)}
      >
        Delete
      </Button>
    </TableCell>
  </TableRow>
);

const columns = [
  { id: "Date", label: "Date" },
  { id: "Products", label: "Products Name" },
  { id: "Quantity", label: "Quantity" },
  { id: "Rate", label: "Rate" },
  { id: "Transaction", label: "Transaction" },
  { id: "Merchant", label: "Merchant Name" },
  { id: "Phone_No", label: "Merchants No" },
  { id: "Actions", label: "Actions" }
];

export default function ExportsTable(props) {
  const exportTable = () => {
    return props.exports.map(currentinfo => {
      return (
        <ExportInfo
          row={currentinfo}
          onDelete={props.onDelete}
          key={currentinfo._id}
        />
      );
    });
  };

  return (
    <div>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{exportTable()}</TableBody>
      </Table>
    </div>
  );
}
