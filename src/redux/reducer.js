import { ADD_MOVIE,DELETE_MOVIE } from "./action-type";
import Movies from '../data'
const initialState = {
    Movie :  Movies /* data mta3na */ 
}

export const movieReducer = (state = initialState ,action ) => {
    switch (action.type) {
        case ADD_MOVIE:  return {
            ...state,
            Movie : [...state.Movie,action.payload]
            // Movie : action.payload

        }
        case  DELETE_MOVIE:  return {
            ...state,
            Movie : state.Movie.filter(el=>el.id!=action.payload)
            // Movie : action.payload

        }  
            
    
        default: return state 
            
    }

}
