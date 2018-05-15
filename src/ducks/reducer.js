import axios from "axios";

const initialState = {
  user: {}
};

const GET_USER = "GET_USER";

export default function reducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
}

export function getUser(username, password) {
  return {
    type: GET_USER,
    payload: axios
      .post(`/api/login`, { username, password })
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => console.log(err))
  };
}
