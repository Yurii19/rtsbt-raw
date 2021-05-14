import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { colors } from "../theme";
import Article from "./Article";
//import state from "../store";

interface IPropsSection {
  
}

const Section = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      // backgroundColor: colors.tBrown
      // color: colors.tBrown,
    }
  }));
  const classes = useStyles();
  // console.log(props);
  return (
    <Box className={classes.root} width="100%">
      <h3>Main Content</h3>
      {/* <Article content={props.mats.articles[0]} /> */}
    </Box>
  );
};
export default Section;
