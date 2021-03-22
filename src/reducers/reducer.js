// import { combineReducers } from 'redux';
import { combineReducers } from "redux";


const moviesReducer = () => {
    return [
        {title: 'Spider-man', releaseDate: '23-09-1988',rating: 7.4},
        {title: 'Ghost', releaseDate: '01-01-1990',rating: 9.8},
        {title: 'Die hard', releaseDate: '20-07-1991',rating: 8.4},
        {title: 'Pretty Woman', releaseDate: '28-09-1991',rating: 9.0},
        {title: 'Jumanji', releaseDate: '14-08-1997',rating: 7.4}
    ]
}

const selectMovieReducer = (state = null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovies: selectMovieReducer
})