import { createStore, combineReducers } from "redux";
import articlesReducer from "./reducers/articlesReducer";

let reducers = combineReducers({
  articlesData: articlesReducer
});

const store = createStore(reducers);

export default store;
