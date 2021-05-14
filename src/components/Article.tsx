import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { colors } from "../theme";

interface IArticle {
  name: string;
  text: string;
}
interface IPropsArticle {
  content: IArticle;
}

const Article = (props: IPropsArticle) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      borderLeft: "3px solid black",
      backgroundColor: "#f7f1e3",
      textAlign: "left",
      fontFamily: "Verdana",
      marginTop: "10px",
      color: "rgba(0,0,0, .9)"
    },
    header: {
      fontFamily: "Trebuchet MS",
      color: "rgba(0,0,0, .8)"
    }
  }));
  const classes = useStyles();
  return (
    <Box className={classes.root} padding="8px">
      <h2 className={classes.header}>
        {props.content.name ? props.content.name : <CircularProgress />}
      </h2>
      <p>{props.content.text}</p>
    </Box>
  );
};
export default Article;
