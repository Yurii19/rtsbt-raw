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
import Article from "../components/Article";

export default function Home() {
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
    content: {
      backgroundColor: "cyan"
    }
  }));
  const classes = useStyles();
  return (
    <Box className={classes.root} display="flex" width="80%">
      {/* <Header Location="Articles" /> */}
      <Sidebar location="Home" mats={count} />
      <Box className={classes.root} width="100%">
        <h3>Main Content</h3>
        <Article
          //className={classes.content}
          content={{
            name: "Greetings",
            text: "Welcome to our app"
          }}
        />
      </Box>
    </Box>
  );
}
