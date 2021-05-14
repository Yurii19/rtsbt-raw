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

interface IArticle {
  name: string;
  text: string;
}

export default function Articles() {
  const [articles, setArticlesKit] = useState([{}]);
  const articlesSet = useSelector((state: any) => state.articlesData);
  // console.log(count);
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
    root: {
      //border: "1px solid red",
      margin: "0 auto",
      minHeight: "80vh",
      "@media (max-width: 700px)": {
        width: "100%"
      }
    },

    articleWrapper: {
      // marginTop: "10px"
    }
  }));
  const classes = useStyles();
  // const articlesSet =
  return (
    <Box className={classes.root} display="flex" width="80%">
      {/* <Header Location="Articles" /> */}
      <Sidebar location="Articles" />
      <Box className={classes.articleWrapper} width="100%">
        <h3>Main Content</h3>
        {articlesSet.articles.map((el: IArticle) => (
          <Article  content={el} key={el.name} />
        ))}
        {/* <Article content={count.articles[0]} /> */}
      </Box>
    </Box>
  );
}
