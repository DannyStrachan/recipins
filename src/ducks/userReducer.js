import { SIGNUP, LOGIN } from "./actionTypes";
import axios from "axios";

const initialState = {
  user: {},
  error: false,
  redirect: false,
  loading: false
};

export function login( username, password ) {
  let data = axios
  .post('/auth/login', { username, password })
  .then(res => res.data)
    return {
      type: LOGIN,
      payload: data
    }
}

export function signup( username, email, password ) {
  let data = axios
  .post('/auth/register', { username, email, password })
  .then(res => res.data)
    return {
      type: SIGNUP,
      payload: data
    }
}

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case SIGNUP + "_FULFILLED":
      console.log('payload:', payload);
      return { user: payload, redirect: false, error: false, loading: false };
    case SIGNUP + "_REJETED":
      return { ...state, error: payload };
    case LOGIN + "_FULFILLED":
      return { ...state, user: payload, error: false, redirect: false }
    case LOGIN + "_REJCTED":
      return { ...state, error: payload }
    default:
      return state;
  }
}
