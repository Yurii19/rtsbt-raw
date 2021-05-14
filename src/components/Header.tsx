import React from "react";
import Background from "../images/bigun.jpg";
import {
  Button,
  Box,
  Typography,
  TextField,
  InputLabel,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Paper,
  makeStyles
} from "@material-ui/core";
//import { Box,  } from "@material-ui/core";
import { colors } from "../theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = (props: any) => {
  const tabs = ["/", "/articles", "/training"];
  const [value, setValue] = React.useState(props.location);
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: colors.tBlue,
      // background: `linear-gradient(90deg, ${colors.hardBlue} 0%, ${colors.tBlue} 25%, ${colors.hardBlue} 100%);`
      fontFamily: "serif",
      width: "100%",
      "@media (max-width: 700px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10px"
      }
    },
    logo: {
      height: "60px",
      width: "60px",
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundImage: `url(https://www.dropbox.com/s/fp5nramwkl8x22w/bigun23.jpg?dl=1)`
      // border: `2px solid blue`
      // boxShadow: ` inset 0px 0px 15px 3px ${colors.tBlue};`
    }
  }));
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root} display="flex" justifyContent="space-between">
      <Box pr={6} pl={6} display="flex" alignItems="center">
        <div
          className={classes.logo}
          // style={{
          //   backgroundImage: `url(${Background})`
          // }}
        ></div>
      </Box>
      <Toolbar>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          centered
        >
          {/* <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/exircise">Exircise</Link> */}
          <Tab label="Home" value="/" component={Link} to={tabs[0]} />
          <Tab
            label="Articles"
            value="/articles"
            component={Link}
            to={tabs[1]}
          />
          <Tab
            label="Exircise"
            value="/training"
            component={Link}
            to={tabs[2]}
          />
        </Tabs>
      </Toolbar>
    </Box>
  );
};

export default Header;
