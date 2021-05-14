//import "./App.css";
import Header from "./components/Header";
import Home from "./routes/Home";
import Articles from "./routes/Articles";
import Training from "./routes/Training";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
 // console.log(location.pathname);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Provider store={store}>
            <BrowserRouter>
              <Header location={'location.pathname'} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/articles" component={Articles} />
                <Route exact path="/training" component={Training} />
              </Switch>
            </BrowserRouter>
          </Provider>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
