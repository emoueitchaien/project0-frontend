import React from 'react';
import {Table,TableCell,TableHead,TableRow,TableBody} from "@material-ui/core";

const columns=[
    {id:"Date",label:"Date"},
    {id:"Products",label:"Products Name"},
    {id:"Actions",label:"Actions"},
    {id:"Quantity",label:"Quantity"},
    {id:"Rate",label:"Rate"},
    {id:"Transaction",label:"Transaction"},
    {id:"Merchant",label:"Merchant Name"},
    {id:"Phone_No",label:"Merchants No"},
]

function createData(Date,Product,Actions,Quantity,Rate,Transaction,Merchant,Phone_No) {
  return {Date,Product,Actions,Quantity,Rate,Transaction,Merchant,Phone_No};
}

const rows=[
  createData("2020/01/01","Mansuli","Import","100 Bags",2500,250000,"Hira lal",9800002223),
  createData("2020/01/02","Jira Mashina","Export","98 Bags",2000,196000,"Binod",9822002223),
  createData("2020/01/02","Basmati","Import","100 Bags",2700,270000,"Durga",9866002223),
  createData("2020/01/03","Pokherli Jira Mashina","Import","100 Bags",2300,230000,"Durgesh",9843002223),
  createData("2020/01/04","Normal","Import","100 Bags",2500,250000,"Rajesh",9855002223),
]

export default function SearchTable() {
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
                  <TableCell key={rows.Date}>
                   {rows.Date}
                  </TableCell>
                  <TableCell key={rows.Product}>
                    {rows.Product}
                  </TableCell>
                  <TableCell key={rows.Actions}>
                  {rows.Actions}
                 </TableCell>
                 <TableCell key={rows.Quantity}>
                   {rows.Quantity}
                  </TableCell>
                  <TableCell key={rows.Rate}>
                   {rows.Rate}
                  </TableCell>
                  <TableCell key={rows.Transaction}>
                   {rows.Transaction}
                  </TableCell>
                  <TableCell key={rows.Merchant}>
                   {rows.Merchant}
                  </TableCell>
                  <TableCell key={rows.Phone_No}>
                   {rows.Phone_No}
                  </TableCell>
                 </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
    )
}
