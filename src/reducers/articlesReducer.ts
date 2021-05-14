const GET_ARTICLES = "GET_ARTICLES";

export interface IAction {
  type: string;
  payload: object;
}

const initialState = {
  articles: [
    {
      name: "Intro",
      text:
        "Physical culture, philosophy, regimen, or lifestyle seeking maximum physical development through such means as weight (resistance) training, diet, aerobic activity, athletic competition, and mental discipline. Specific benefits include improvements in health, appearance, strength, endurance, flexibility, speed, and general fitness as well as greater proficiency in sport-related activities."
    },
    {
      name: "Intro",
      text:
        "Physical culture, philosophy, regimen, or lifestyle seeking maximum physical development through such means as weight (resistance) training, diet, aerobic activity, athletic competition, and mental discipline. Specific benefits include improvements in health, appearance, strength, endurance, flexibility, speed, and general fitness as well as greater proficiency in sport-related activities."
    }
  ]
};

function articlesReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case GET_ARTICLES:
      return state;
    default:
      return state;
  }
}

interface IPayload { articles: []}
export const getArticles = (payload: IPayload) => ({ type: GET_ARTICLES, payload });
export default articlesReducer;
