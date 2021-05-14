import "../styles.css";
import Header from "../components/Header";
import Content from "../components/Content";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme";
import { CssBaseline, Box, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../reducers/articlesReducer";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";

export default function Training() {
  const [articles, setArticlesKit] = useState([]);
  const count = useSelector((state: any) => state.articlesData);
  // console.log(count);
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
    root: {
      //border: "1px solid red",
      margin: "0 auto",
      minHeight: "80vh"
    },
    img: {
      border: "1px solid black"
    }
  }));
  const classes = useStyles();
  return (
    <Box className={classes.root} display="flex" width="80%">
      {/* <Header Location="Articles" /> */}
      <Sidebar location="Training" mats={count} />
      <Box className={classes.root} width="100%">
        <h3>Main Content</h3>

        <img
          className={classes.img}
          src="https://www.dropbox.com/s/u4n6i7ulvtakhwd/deep-step.gif?dl=1"
          height="300"
          alt=""
        />
        <img
          className={classes.img}
          src="https://www.dropbox.com/s/m59yc92no55vkow/jumps%20with%20appl%20under%20head.gif?dl=1"
          height="300"
          alt=""
        />
        {/* <Article content={count.articles[0]} /> */}
      </Box>
    </Box>
  );
}
