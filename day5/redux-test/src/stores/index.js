import { createStore } from 'redux'
const counter = (state = {
    searchValue: ''
}, action) => {
    switch (action.type) {
        case 'SETSEARCHVALUE':
            return {
                ...state,
                searchValue: action.searchValue
            }
        default:
            return state
    }
}

const store = createStore(counter)
export default store