import axios from 'axios'
// import { createStore, applyMiddleware } from 'redux'
import { GET_RECIPINS } from "./actionTypes"
// import promiseMiddleware from 'redux-promise-middleware'
const API_KEY = "87b7b55a7946014e4deb6bf0509da32f"
const recipes = [{"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/35171", "title": "Buffalo Chicken Grilled Cheese Sandwich", "source_url": "http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html", "recipe_id": "35171", "image_url": "http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg", "social_rank": 100.0, "publisher_url": "http://closetcooking.com"}, {"publisher": "All Recipes", "f2f_url": "http://food2fork.com/view/29159", "title": "Slow Cooker Chicken Tortilla Soup", "source_url": "http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx", "recipe_id": "29159", "image_url": "http://static.food2fork.com/19321150c4.jpg", "social_rank": 100.0, "publisher_url": "http://allrecipes.com"}, {"publisher": "My Baking Addiction", "f2f_url": "http://food2fork.com/view/e7fdb2", "title": "Mac and Cheese with Roasted Chicken, Goat Cheese, and Rosemary", "source_url": "http://www.mybakingaddiction.com/mac-and-cheese-roasted-chicken-and-goat-cheese/", "recipe_id": "e7fdb2", "image_url": "http://static.food2fork.com/MacandCheese1122b.jpg", "social_rank": 100.0, "publisher_url": "http://www.mybakingaddiction.com"}, {"publisher": "The Pioneer Woman", "f2f_url": "http://food2fork.com/view/47187", "title": "White Chicken Enchiladas", "source_url": "http://thepioneerwoman.com/cooking/2009/11/white-chicken-enchiladas/", "recipe_id": "47187", "image_url": "http://static.food2fork.com/4060528829_67db52b435ebe3.jpg", "social_rank": 99.99999999999997, "publisher_url": "http://thepioneerwoman.com"}, {"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/41470", "title": "Cauliflower Pizza Crust (with BBQ Chicken Pizza)", "source_url": "http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html", "recipe_id": "41470", "image_url": "http://static.food2fork.com/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg", "social_rank": 99.9999999999994, "publisher_url": "http://closetcooking.com"}, {"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/35118", "title": "Bacon Wrapped Buffalo Chicken Jalapeno Poppers", "source_url": "http://www.closetcooking.com/2012/03/bacon-wrapped-buffalo-chicken-jalapeno.html", "recipe_id": "35118", "image_url": "http://static.food2fork.com/Bacon2BWrapped2BBuffalo2BChicken2BJalapeno2BPoppers2B5002B3668e0d793a2.jpg", "social_rank": 99.99999999999841, "publisher_url": "http://closetcooking.com"}, {"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/35172", "title": "Buffalo Chicken Potato Skins", "source_url": "http://www.closetcooking.com/2012/02/buffalo-chicken-potato-skins.html", "recipe_id": "35172", "image_url": "http://static.food2fork.com/Buffalo2BChicken2BPotato2BSkins2B5002B5802a7cf6f8f.jpg", "social_rank": 99.9999999999941, "publisher_url": "http://closetcooking.com"}, {"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/35616", "title": "Sweet Chili Chicken Quesadilla", "source_url": "http://www.closetcooking.com/2012/05/sweet-chili-chicken-quesadilla.html", "recipe_id": "35616", "image_url": "http://static.food2fork.com/Sweet2BChili2BChicken2BQuesadilla2B5002B459829a2ca63.jpg", "social_rank": 99.99999999645584, "publisher_url": "http://closetcooking.com"}, {"publisher": "Whats Gaby Cooking", "f2f_url": "http://food2fork.com/view/606bf4", "title": "BBQ Chicken Quinoa Salad", "source_url": "http://whatsgabycooking.com/bbq-chicken-quinoa-salad/", "recipe_id": "606bf4", "image_url": "http://static.food2fork.com/BBQChickenQuinoaSalad1a0f2.jpg", "social_rank": 99.99996084937123, "publisher_url": "http://whatsgabycooking.com"}, {"publisher": "Two Peas and Their Pod", "f2f_url": "http://food2fork.com/view/54290", "title": "Lemon Chicken Orzo Soup", "source_url": "http://www.twopeasandtheirpod.com/lemon-chicken-orzo-soup/", "recipe_id": "54290", "image_url": "http://static.food2fork.com/LemonChickenOrzoSoup33989.jpg", "social_rank": 99.99999952354868, "publisher_url": "http://www.twopeasandtheirpod.com"}, {"publisher": "My Baking Addiction", "f2f_url": "http://food2fork.com/view/a723e8", "title": "Barbecue Chicken Pizza", "source_url": "http://www.mybakingaddiction.com/barbecue-chicken-pizza-recipe/", "recipe_id": "a723e8", "image_url": "http://static.food2fork.com/BBQChickenPizza3e2b.jpg", "social_rank": 99.9999968917598, "publisher_url": "http://www.mybakingaddiction.com"}, {"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/35173", "title": "Buffalo Chicken Quinoa Fritters", "source_url": "http://www.closetcooking.com/2012/08/buffalo-chicken-quinoa-fritters.html", "recipe_id": "35173", "image_url": "http://static.food2fork.com/Buffalo2BChicken2BQuinoa2BFritters2B5002B67518a646be9.jpg", "social_rank": 99.99999511306747, "publisher_url": "http://closetcooking.com"}]


console.log(recipes);
const initialState = {
    recipins: recipes
}
console.log('recipins in state reducer:', initialState.recipins);

export function getRecipins() {
    // const api_call = await axios.get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=6`).then(res => res.data.recipes)
        
        // let data = await api_call.json()
        // let data = JSON.stringify(api_call)
        // data = JSON.parse(data)

        console.log('hit function');
        // return {
        //     type: GET_RECIPINS,
        //     payload: axios.get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=6`).then(res => res.data.recipes)
        // }
        const data = axios.get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=6`).then(res => res.data )
        // console.log(data);

        return {
            type: GET_RECIPINS,
            payload: data
        }
}

export default function reducer(state=initialState, action) {
    console.log('action:', action);
    const {type, payload} = action
    switch (type) {
        case GET_RECIPINS + "_FULFILLED":
            console.log('payload:', payload);
            return { ...state, recipins: payload.recipes}
        default: console.log('hit default'); return state;
    }
}

// export default createStore(reducer, applyMiddleware(promiseMiddleware))