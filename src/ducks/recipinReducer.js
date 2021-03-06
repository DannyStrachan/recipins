import axios from "axios";
// import { createStore, applyMiddleware } from 'redux'
import {
  GET_RECIPINS,
  GET_BOARDS,
  GET_BOARD_RECIPINS,
  GET_USER_RECIPINS
} from "./actionTypes";
// import promiseMiddleware from 'redux-promise-middleware'
const API_KEY = "87b7b55a7946014e4deb6bf0509da32f";
// const boards = [
//     {boardTitle: 'Dessert', board_id: 1, image_url: 'https://i.pinimg.com/originals/13/ff/2d/13ff2d3c3455b14121a5edab85d161e8.gif'},
//     {boardTitle: 'Snacks', board_id: 2},
//     {boardTitle: 'Healthy Meals', board_id: 3},
//     {boardTitle: 'Quick Eats', board_id: 4},
//     {boardTitle: 'Smoothies', board_id: 5},
//     {boardTitle: 'Cakes', board_id: 6},
//     {boardTitle: 'Mexican Meals', board_id: 7}]

const recipes = [
  {
    publisher: "Closet Cooking",
    f2f_url: "http://food2fork.com/view/35171",
    title: "Buffalo Chicken Grilled Cheese Sandwich",
    source_url:
      "http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html",
    recipe_id: "35171",
    image_url:
      "http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg",
    social_rank: 100.0,
    publisher_url: "http://closetcooking.com"
  },
  {
    publisher: "All Recipes",
    f2f_url: "http://food2fork.com/view/29159",
    title: "Slow Cooker Chicken Tortilla Soup",
    source_url:
      "http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx",
    recipe_id: "29159",
    image_url: "http://static.food2fork.com/19321150c4.jpg",
    social_rank: 100.0,
    publisher_url: "http://allrecipes.com"
  },
  {
    publisher: "My Baking Addiction",
    f2f_url: "http://food2fork.com/view/e7fdb2",
    title: "Mac and Cheese with Roasted Chicken, Goat Cheese, and Rosemary",
    source_url:
      "http://www.mybakingaddiction.com/mac-and-cheese-roasted-chicken-and-goat-cheese/",
    recipe_id: "e7fdb2",
    image_url: "http://static.food2fork.com/MacandCheese1122b.jpg",
    social_rank: 100.0,
    publisher_url: "http://www.mybakingaddiction.com"
  },
  {
    publisher: "The Pioneer Woman",
    f2f_url: "http://food2fork.com/view/47187",
    title: "White Chicken Enchiladas",
    source_url:
      "http://thepioneerwoman.com/cooking/2009/11/white-chicken-enchiladas/",
    recipe_id: "47187",
    image_url: "http://static.food2fork.com/4060528829_67db52b435ebe3.jpg",
    social_rank: 99.99999999999997,
    publisher_url: "http://thepioneerwoman.com"
  },
  {
    publisher: "Closet Cooking",
    f2f_url: "http://food2fork.com/view/41470",
    title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
    source_url:
      "http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html",
    recipe_id: "41470",
    image_url:
      "http://static.food2fork.com/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
    social_rank: 99.9999999999994,
    publisher_url: "http://closetcooking.com"
  },
  {
    publisher: "Closet Cooking",
    f2f_url: "http://food2fork.com/view/35118",
    title: "Bacon Wrapped Buffalo Chicken Jalapeno Poppers",
    source_url:
      "http://www.closetcooking.com/2012/03/bacon-wrapped-buffalo-chicken-jalapeno.html",
    recipe_id: "35118",
    image_url:
      "http://static.food2fork.com/Bacon2BWrapped2BBuffalo2BChicken2BJalapeno2BPoppers2B5002B3668e0d793a2.jpg",
    social_rank: 99.99999999999841,
    publisher_url: "http://closetcooking.com"
  },
  {
    publisher: "Closet Cooking",
    f2f_url: "http://food2fork.com/view/35172",
    title: "Buffalo Chicken Potato Skins",
    source_url:
      "http://www.closetcooking.com/2012/02/buffalo-chicken-potato-skins.html",
    recipe_id: "35172",
    image_url:
      "http://static.food2fork.com/Buffalo2BChicken2BPotato2BSkins2B5002B5802a7cf6f8f.jpg",
    social_rank: 99.9999999999941,
    publisher_url: "http://closetcooking.com"
  },
  {
    publisher: "Closet Cooking",
    f2f_url: "http://food2fork.com/view/35616",
    title: "Sweet Chili Chicken Quesadilla",
    source_url:
      "http://www.closetcooking.com/2012/05/sweet-chili-chicken-quesadilla.html",
    recipe_id: "35616",
    image_url:
      "http://static.food2fork.com/Sweet2BChili2BChicken2BQuesadilla2B5002B459829a2ca63.jpg",
    social_rank: 99.99999999645584,
    publisher_url: "http://closetcooking.com"
  },
  {
    publisher: "Whats Gaby Cooking",
    f2f_url: "http://food2fork.com/view/606bf4",
    title: "BBQ Chicken Quinoa Salad",
    source_url: "http://whatsgabycooking.com/bbq-chicken-quinoa-salad/",
    recipe_id: "606bf4",
    image_url: "http://static.food2fork.com/BBQChickenQuinoaSalad1a0f2.jpg",
    social_rank: 99.99996084937123,
    publisher_url: "http://whatsgabycooking.com"
  },
  {
    publisher: "Two Peas and Their Pod",
    f2f_url: "http://food2fork.com/view/54290",
    title: "Lemon Chicken Orzo Soup",
    source_url: "http://www.twopeasandtheirpod.com/lemon-chicken-orzo-soup/",
    recipe_id: "54290",
    image_url: "http://static.food2fork.com/LemonChickenOrzoSoup33989.jpg",
    social_rank: 99.99999952354868,
    publisher_url: "http://www.twopeasandtheirpod.com"
  },
  {
    publisher: "My Baking Addiction",
    f2f_url: "http://food2fork.com/view/a723e8",
    title: "Barbecue Chicken Pizza",
    source_url:
      "http://www.mybakingaddiction.com/barbecue-chicken-pizza-recipe/",
    recipe_id: "a723e8",
    image_url: "http://static.food2fork.com/BBQChickenPizza3e2b.jpg",
    social_rank: 99.9999968917598,
    publisher_url: "http://www.mybakingaddiction.com"
  }
];

const initialState = {
  recipins: recipes,
  userBoards: [],
  boardRecipins: [],
  userRecipins: [],
  error: false
};

export function getRecipins(recipeName) {
  // const recipeName =
  console.log("hit function");
  const data = axios
    .get(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`
    )
    .then(res => res.data);

  return {
    type: GET_RECIPINS,
    payload: data
  };
}

export function getUserRecipins(userId) {
    console.log('in reducer:', userId);
  const data = axios.get(`/api/saved-recipins/${userId}`).then(res => res.data);

  return {
    type: GET_USER_RECIPINS,
    payload: data
  };
}

export function getUserBoards(userId) {
  console.log("getting boards...", userId);
  const data = axios.get(`/api/boards/${userId}`).then(res => res.data);

  return {
    type: GET_BOARDS,
    payload: data
  };
}

export function getBoardRecipins(boardId) {
  const data = axios
    .get(`/api/saved-board-recipins/${boardId}`)
    .then(res => res.data);

  return {
    type: GET_BOARD_RECIPINS,
    payload: data
  };
}

export default function reducer(state = initialState, action) {
  console.log("action:", action);
  const { type, payload } = action;
  switch (type) {
    case GET_RECIPINS + "_FULFILLED":
      console.log("payload:", payload);
      return { ...state, error: false, recipins: payload.recipes };
    case GET_BOARDS + "_FULFILLED":
      console.log("payload from boards:", payload);
      return { ...state, error: false, userBoards: payload };
    case GET_BOARD_RECIPINS + "_FULFILLED":
      return { ...state, error: false, boardRecipins: payload };
    case GET_USER_RECIPINS + "_FULFILLED":
      return { ...state, error: false, userRecipins: payload };
    default:
      return state;
  }
}

// export default createStore(reducer, applyMiddleware(promiseMiddleware))
