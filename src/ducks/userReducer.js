import { SIGNUP, LOGIN, UPDATE, LOGOUT_USER } from "./actionTypes";
import axios from "axios";

const initialState = {
  user: {},
  error: false,
  redirect: false,
  loading: false
};

export function login(username, password) {
  let data = axios
    .post("/auth/login", { username, password })
    .then(res => res.data);
  return {
    type: LOGIN,
    payload: data
  };
}

export function logoutUser() {
  return {
      type: LOGOUT_USER
  }
}

export function signup(username, email, password) {
  let data = axios
    .post("/auth/register", { username, email, password })
    .then(res => res.data);
  return {
    type: SIGNUP,
    payload: data
  };
}

export function updateUser() {
  console.log("hit updateUser");
  let user = axios
    .get("/api/checkSession")
    .then(res => res.data)
    console.log("data:", user);
    return {
      type: UPDATE,
      payload: user
    };
}

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case SIGNUP + "_FULFILLED":
      console.log("payload:", payload);
      return { user: payload, redirect: false, error: false, loading: false };
    case SIGNUP + "_REJECTED":
      return { ...state, error: payload };
    case LOGIN + "_FULFILLED":
      return { ...state, user: payload, error: false, redirect: false };
    case LOGIN + "_REJECTED":
      return { ...state, error: payload };
    case UPDATE + "_FULFILLED":
      console.log("sending data....");
      return { ...state, user: payload, error: false, redirect: false };
    case UPDATE + "_REJECTED":
      return { ...state, error: true };
    case LOGOUT_USER:
            return initialState
    default:
      return state;
  }
}
