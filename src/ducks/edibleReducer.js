import axios from 'axios';

const initialState = {
    boardImage: '',
    boardName: '',
    edibleImage: '',
    edibleName: '',
    description: '',
    sellerId: '',
    sellerBoards: []
}

export const UPDATE_BOARD_NAME = 'UPDATE_BOARD_NAME'
export const UPDATE_BOARD_IMAGE = 'UPDATE_BOARD_IMAGE'
export const UPDATE_EDIBLE_NAME = 'UPDATE_EDIBLE_NAME'
export const UPDATE_EDIBLE_IMAGE = 'UPDATE_EDIBLE_IMAGE'
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'
export const UPDATE_SELLER_ID = 'UPDATE_SELLER_ID'
export const CANCEL_CHANGES = 'CANCEL_CHANGES'
export const GET_SELLER_BOARDS = 'GET_SELLER_BOARDS'
export const UPDATE_STEP1 = 'UPDATE_STEP1'
export const UPDATE_STEP2 = 'UPDATE_STEP2'


export function saveBoard(state) {
    console.log('hit function saveBoard');
    const {boardImage, boardName, sellerId} = state
    axios.post('/api/create-seller-board', { sellerId, boardImage, boardName})
    console.log('state to be sent:', state );
    return {
        type: CANCEL_CHANGES
    }
}

export function getSellerBoards(sellerId) {
    console.log('getting seller  + "_FULFILLED"boards....');
    const data = axios.get(`/api/seller-boards/${sellerId}`)
        .then(res => res.data)
    return {
        type: GET_SELLER_BOARDS,
        payload: data
    }
}

export function updateStep1(state) {
    return {
        type: UPDATE_STEP1,
        payload: state
    }
}

export function updateStep2(state) {
    return {
        type: UPDATE_STEP2,
        payload: state
    }
}

export function saveEdible(state) {
    console.log("saveEdible state:", state);
}

export function cancelChanges() {
    return {
        type: CANCEL_CHANGES
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case UPDATE_BOARD_IMAGE + "_FULFILLED":
            return {...state, boardImage: payload}
        case UPDATE_BOARD_NAME + "_FULFILLED":
            return {...state, boardName: payload}
        case UPDATE_EDIBLE_IMAGE + "_FULFILLED":
            return {...state, edibleImage: payload}
        case UPDATE_EDIBLE_NAME + "_FULFILLED":
            return {...state, edibleName: payload}
        case UPDATE_DESCRIPTION + "_FULFILLED":
            return {...state, description: payload}
        case UPDATE_SELLER_ID + "_FULFILLED":
            return {...state, sellerId: payload}
        case GET_SELLER_BOARDS + "_FULFILLED":
            return {...state, sellerBoards: payload}
        case CANCEL_CHANGES + "_FULFILLED":
            return {...initialState}
        case UPDATE_STEP1 + "_FULFILLED":
            const { boardImage, boardName, sellerId } = payload
            return {...state, boardImage, boardName, sellerId}
        case UPDATE_STEP2 + "_FULFILLED":
            const { edibleImage, edibleName, description } = payload
            return {...state, edibleImage, edibleName, description}
        default:
            return state
    }
}

