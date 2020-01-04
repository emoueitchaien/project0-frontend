import React from "react";
import { makeStyles, CssBaseline } from "@material-ui/core";

import Inputs from "./Inputs";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "1",
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(6)
  }
}));

const Exports = () => {
  const classes = useStyles();
  return (
    <CssBaseline>
      <div className={classes.root}>
        <h1 align="center">Exports Page</h1>
        <Inputs state={1}/>
      </div>
    </CssBaseline>
  );
};

export default Exports;
