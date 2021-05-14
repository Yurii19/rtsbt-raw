import { createStore, combineReducers } from "redux";
import articlesReducer from "./reducers/articlesReducer";

const initialState = {
  articles: []
};
let reducers = combineReducers({
  articlesData: articlesReducer
});

const store = createStore(reducers);

export default store;
