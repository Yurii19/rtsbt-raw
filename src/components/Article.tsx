import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { colors } from "../theme";
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { useDispatch, useSelector } from "react-redux";
import { SELECT_ARTICLE } from '../reducers/articlesReducer';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
//import useRouteMatch from ''

export interface IArticle {
  name: string;
  text: string;
  id: number;
}
interface IPropsArticle {
  content: IArticle;
  isPreview: boolean;
  isMark: boolean;
  id?: number;
}

const Article = (props: IPropsArticle) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      borderLeft: "3px solid black",
      backgroundColor: "#f7f1e3",
      textAlign: "left",
      fontFamily: "Verdana",
      marginTop: "10px",
      color: "rgba(0,0,0, .9)",

    },
    header: {
      fontFamily: "Trebuchet MS",
      color: "rgba(0,0,0, .8)",
      display: 'flex',
      alignItems: "center"
    },
    content: {
      cursor: "pointer"
    },
    link: {
      textDecoration: "none",
      color: 'inherit'
    }
  }));

  const ArticleIconPrev = () => {
    return (
      <SvgIcon htmlColor="rgb(72 126 176)">
        <path d="M17.222,5.041l-4.443-4.414c-0.152-0.151-0.356-0.235-0.571-0.235h-8.86c-0.444,0-0.807,0.361-0.807,0.808v17.602c0,0.448,0.363,0.808,0.807,0.808h13.303c0.448,0,0.808-0.36,0.808-0.808V5.615C17.459,5.399,17.373,5.192,17.222,5.041zM15.843,17.993H4.157V2.007h7.72l3.966,3.942V17.993z"></path>
        <path fill="none" d="M13.997,14.67H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.447,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,15.032,14.442,14.67,13.997,14.67z" />
      </SvgIcon>
    );
  }
  const ArticleIconFull = () => {
    return (
      <SvgIcon htmlColor="rgb(72 126 176)">
        <path d="M9.896,3.838L0.792,1.562v14.794l9.104,2.276L19,16.356V1.562L9.896,3.838z M9.327,17.332L1.93,15.219V3.27
								l7.397,1.585V17.332z M17.862,15.219l-7.397,2.113V4.855l7.397-1.585V15.219z"></path>
        <path fill="none" d="M13.997,14.67H5.92c-0.444,0-0.808,0.361-0.808,0.808c0,0.447,0.363,0.808,0.808,0.808h8.077c0.445,0,0.808-0.361,0.808-0.808C14.805,15.032,14.442,14.67,13.997,14.67z" />
      </SvgIcon>
    );
  }

  const dispatch = useDispatch();
  let { path, url } = useRouteMatch();
  const [isPrev, setIsPrev] = useState(props.isPreview);

  const contentText: string = isPrev ? `${props.content.text.slice(0, 250)}...` : `${props.content.text}`;
  const classes = useStyles();
  return (
    <Box className={classes.root} padding="8px"
    // onClick={(ev) => {
    //   dispatch({ type: SELECT_ARTICLE, payload: 3 });
    //   console.log(props)
    // }
    //}
    >
      <h2 className={classes.header}>
        {props.isMark && <ArticleIconPrev />}
        {props.content.name ? props.content.name.charAt(0).toUpperCase() + props.content.name.slice(1) : <CircularProgress />}

      </h2>
      <Link className={classes.link}   >
        <p onClick={() => { setIsPrev(!isPrev) }} className={classes.content}>{contentText}</p>
      </Link>

    </Box>
  );
};
export default Article;
