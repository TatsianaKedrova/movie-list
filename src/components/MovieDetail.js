import React from 'react';
import {connect} from 'react-redux';

const MovieDetail = (props) => {
    if (!props.selectedMovie) {
        return (
        <div className="details-container">
            <h2>Movie</h2>
            <div className="properties">
                <p>SelectMovie</p>
            </div>
        </div>
        )
    } else {
        return (
            <div className="details-container" style={{width: '70%'}}>
                <h2>Movie</h2>
                <div className="properties">
                    <p>Title: {props.selectedMovie.title}</p>
                    <p>Release: {props.selectedMovie.releaseDate}</p>
                    <p>Rating: {props.selectedMovie.rating}</p>
                </div>
            </div>
        )
    }
}

const mapStateTpProps = (state) => {
    return {
        selectedMovie: state.selectedMovies
    }
}

export default connect(mapStateTpProps)(MovieDetail);