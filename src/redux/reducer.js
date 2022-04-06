import { ADD_MOVIE } from "./action-type";
import Movies from '../data'
const initialState = {
    Movie :  Movies /* data mta3na */ 
}
export const movieReducer = (state = initialState ,action ) => {
    switch (action.type) {
        case ADD_MOVIE:  return {
            ...state,
            Movie : action.payload
        }
            
            
    
        default: return state 
            
    }

}