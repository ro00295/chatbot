const axios = require("axios");
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const UPDATE_USER_MESSAGE = "UPDATE_USER_MESSAGE";

export const tetxtQueryAction = (data) => {
  console.log("data", data);
  return async (dispatch, getState) => {
    dispatch({ type: UPDATE_USER_MESSAGE, data: data });
    const response = await axios.get("http://localhost:3001/dialogflow/query", {
      params: {
        q: data.text,
      },
    });

    console.log("response", response.data);
    return dispatch({ type: UPDATE_MESSAGE, data: response.data });
  };
};
