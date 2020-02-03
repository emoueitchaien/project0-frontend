import React from "react";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import SearchIcon from "@material-ui/icons/Search";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  iconSpacing: {
    display: "flex",
    marginLeft: theme.spacing(3)
  },
  backButton: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default function Apppbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            size="medium"
            edge="start"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Container>
            <Typography align="center">RICE MILL SYSTEM</Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        className={classes.root}
        open={open}
        classes={{ paper: classes.drawer }}
      >
        <MenuItem onClick={handleDrawer}>
          <Container className={classes.backButton}>
            <ChevronLeftIcon />
          </Container>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleDrawer} component={Link} to={"/"}>
          <HomeIcon />
          <Typography className={classes.iconSpacing}>Home</Typography>
        </MenuItem>

        <MenuItem onClick={handleDrawer} component={Link} to={"/imports"}>
          <SaveAltIcon />
          <Typography className={classes.iconSpacing}>Import</Typography>
        </MenuItem>
        <MenuItem onClick={handleDrawer} component={Link} to={"/exports"}>
          <LocalAtmIcon />
          <Typography className={classes.iconSpacing}>Export</Typography>
        </MenuItem>

        <MenuItem onClick={handleDrawer} component={Link} to={"/search"}>
          <SearchIcon />
          <Typography className={classes.iconSpacing}>Search</Typography>
        </MenuItem>

        <MenuItem onClick={handleDrawer} component={Link} to={"/products"}>
          <BorderColorIcon />
          <Typography className={classes.iconSpacing}>Products</Typography>
        </MenuItem>
      </Drawer>
    </div>
  );
}
