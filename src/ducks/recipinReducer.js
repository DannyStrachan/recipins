// import axios from 'axios'
import { GET_RECIPINS } from "./actionTypes"
const API_KEY = "87b7b55a7946014e4deb6bf0509da32f"

const initialState = {
    recipins: []
}

export async function getRecipins() {
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=6`)
        
        const data = await api_call.json()
        return {
            type: GET_RECIPINS,
            payload: data.recipes
        }
}

export default function (state=initialState, action) {
    const {type, payload} = action
    switch (type) {
        case GET_RECIPINS + "_FULFILLED":
            return {recipins: payload}
        default: return state;
    }
}