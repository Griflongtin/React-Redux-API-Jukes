import axios from "axios";

export function fetchJuke() {
  return function(dispatch) {
    axios.get("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke")
      .then((response) => {
        dispatch({type: 'RECEIVE_JUKE', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_JUKE_ERROR", payload: err})
      });
    }
  }
