import React from 'react';
import {Table,TableCell,TableHead,TableRow,TableBody} from "@material-ui/core";
import Button from '@material-ui/core/Button';

const columns=[
    {id:"Products", label: "Products Name"},
    {id:"PricePerKg", label: "Price Per KG"},
    {id:"PricePerBag", label: "Price Per Bag"}
]

function createData(Product,PricePerKg,PricePerBag) {
  return { Product,PricePerKg,PricePerBag };
}

const rows=[
  createData("Mansuli",70,2500),
  createData("JiraMasina",90,3500),
  createData("Normal",60,2000),
]

export default function ProductTable() {
    return (
             <div> 
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(rows=>(
                  <TableRow>
                  <TableCell key={rows.Product}>
                    {rows.Product}
                  </TableCell>
                   <TableCell key={rows.PricePerKg}>
                   {rows.PricePerKg}
                  </TableCell>
                  <TableCell key={rows.PricePerBag}>
                  {rows.PricePerBag}
                 </TableCell>
                 <Button variant="contained" color="primary"  >
                Delete
                </Button>
                 </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
    )
}
