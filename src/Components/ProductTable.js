import React from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Tableinfo = (props) => (
  <TableRow>
    <TableCell>{props.row.ProductName}</TableCell>
    <TableCell>{props.row.PricePerKg}</TableCell>
    <TableCell>{props.row.PricePer25Bag}</TableCell>
    <TableCell>{props.row.PricePer30Bag}</TableCell>
    <TableCell>{props.row.PricePer50Bag}</TableCell>
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
  { id: "Products", label: "Products Name" },
  { id: "PricePerKg", label: "Price Per KG" },
  { id: "PricePer25Bag", label: "Price Per Bag" },
  { id: "PricePer30Bag", label: "Price Per Bag" },
  { id: "PricePer50Bag", label: "Price Per Bag" },
  { id: "Actions", label: "Actions" },
];

export default function ProductTable(props) {
  const tablelist = () => {
    return props.Tableinfo.map((currentinfo) => {
      return (
        <Tableinfo
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
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{tablelist()}</TableBody>
      </Table>
    </div>
  );
}
