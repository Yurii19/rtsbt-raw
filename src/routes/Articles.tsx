import "../styles.css";
import Header from "../components/Header";
import Content from "../components/Content";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme";
import { CssBaseline, Box, makeStyles, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../reducers/articlesReducer";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
import Article from "../components/Article";
import { useLocation } from "react-router-dom";
import { ReactReduxContext } from 'react-redux';
import { UPDATE_ARTICLES } from '../reducers/articlesReducer';
import { IArticle } from "../components/Article";


export default function Articles() {
  const articlesSet = useSelector((state: any) => state.articlesData);
  articlesSet.articles.sort((a:IArticle,b:IArticle)=> a.id -b.id)

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      fetch('https://body-training-1a3ad-default-rtdb.europe-west1.firebasedatabase.app/articles.json')
        .then(response => response.json()).then(data => {
          const dataPayload = Array.from(Object.values(data));
          dispatch({ type: UPDATE_ARTICLES, payload: dataPayload })
        });
    }, 1000);


  }, [])
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "0 auto",
      minHeight: "80vh",
      "@media (max-width: 700px)": {
        width: "100%"
      }
    },

    articleWrapper: {
    }
  }));
  
  const classes = useStyles();
  return (
    <Box className={classes.root} display="flex" width="80%">
      <Sidebar location="Articles" />
      <Box className={classes.articleWrapper} width="100%">
        <h3>Main Content</h3>
        {articlesSet.articles.length === 0 && <CircularProgress />}
        {articlesSet.articles.map((el: IArticle) => (
          <Article content={el} key={el.id} isPreview={true} isMark={true} id={el.id} />
        ))}
      </Box>
    </Box>
  );
}
