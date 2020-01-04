import React from 'react';
import {CssBaseline} from '@material-ui/core';
import{makeStyles} from '@material-ui/core/styles';

//Importing components
import Inputs from './Inputs';

const useStyles = makeStyles((theme) => ({
    root: {
      flex: "1",
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(6)
    }
  }));
  
const Imports = () => {
    const classes = useStyles();
    return ( <CssBaseline>
        <div className={classes.root}>
          <h1 align="center">Imports Page</h1>
          <Inputs state={0}/>
        </div>
      </CssBaseline> );
}
 
export default Imports;