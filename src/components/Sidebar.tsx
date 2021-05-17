import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { colors } from "../theme";

interface IPropsSidebar {
  location: string;
  mats?: [];
}
const Sidebar = (props: IPropsSidebar) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "@media (max-width: 700px)": {
        display: "none"
      }
    }
  }));
  const classes = useStyles();
  return (
    <Box className={classes.root} width={300}>
      {/* <h3>Sidebar</h3> */}
      <h3>{props.location ? props.location : "Default"}</h3>
    </Box>
  );
};
export default Sidebar;
