const GET_ARTICLES = "GET_ARTICLES";
export const UPDATE_ARTICLES = "UPDATE_ARTICLES";
export const SELECT_ARTICLE = "SELECT_ARTICLE";

export interface IAction {
  type: string;
  payload: object;
}

const initialState = {
  articles: [],
  articlesSelected: null
};

function articlesReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case SELECT_ARTICLE:
      return state;
    case GET_ARTICLES:
      return state;
    case UPDATE_ARTICLES:
      return { articles: action.payload };
    default:
      return state;
  }
}

interface IPayload { articles: [] }
export const getArticles = () => ({ type: GET_ARTICLES });
export const updateArticles = (payload: IPayload) => ({ type: UPDATE_ARTICLES, payload });
export const selectArticle = (payload: number) => ({ type: SELECT_ARTICLE, payload });
export default articlesReducer;
