import axios from 'axios';

const initialState = {
    boardImage: '',
    boardName: '',
    edibleImage: '',
    edibleName: '',
    description: '',
    sellerId: '',
    price: '',
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
export const UPDATE_STEP3 = 'UPDATE_STEP3'


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
    console.log('hit updateStep1 in reducer');
    return {
        type: UPDATE_STEP1,
        payload: state
    }
}

export function updateStep2(state) {
    console.log('hit updateStep2 in reducer');
    return {
        type: UPDATE_STEP2,
        payload: state
    }
}

export function updateStep3(state) {
    console.log('hit updateStep3 in reducer');
    return {
        type: UPDATE_STEP3,
        payload: state
    }
}

export function saveEdible(obj) {
    console.log("saveEdible state:", obj);
    return {
        type: CANCEL_CHANGES
    }
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
        case GET_SELLER_BOARDS + "_PENDING":
            return {...state}
        case CANCEL_CHANGES:
            return {...initialState}
        case UPDATE_STEP1:
             console.log('hit reducer fulfilled');
            const { boardImage, boardName, sellerId } = payload
            return {...state, boardImage, boardName, sellerId}
        case UPDATE_STEP2:
            const { edibleImage } = payload
            return {...state, edibleImage}
        case UPDATE_STEP3:
            const { edibleName, description, price } = payload
            return {...state, edibleName, description, price}
        default:
            return state
    }
}

