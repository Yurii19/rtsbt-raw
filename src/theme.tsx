import { FormHelperText } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const colors = {
  tBlue: "#487eb0",
  tBrown: "#e1b12c",
  hardBlue: "#303569",
  hardBrown: "#5E5843",
  light: "#dcdde1"
};
//export colors;

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiToolbar: {
      root: {
        textAlign: "right"
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: "white"
      },
      root: {
        // right: "0"
      }
    },
    MuiTab: {
      textColorPrimary: {
        // color: "#b8e994",
        color: "white",
        "&$selected": {
          color: "white"
          // bordeBottom: '3px solid black'
        }
      },
      root: {
        fontWeight: 600
      }
    }
  }
});
export default theme;
