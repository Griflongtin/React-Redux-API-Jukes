export default function reducer(state={
  juke:{},
}, action) {

  switch (action.type) {
    case "RECEIVE_JUKE":{
      return {...state, juke: action.payload}
      break;
    }
  }
  return state
}
