import { createReducer } from "@reduxjs/toolkit";

import initialState from "../initialState_Movies";

import { storeMovies, setSelectedMovie } from "../actionCreators";

const moviesReducer = createReducer(initialState, builder => {
    builder
        .addCase(storeMovies, (state, action) => {
            if (action.payload) {
                state.movies = action.payload;
            }
        })
        .addCase(setSelectedMovie, (state, action) => {
            if (action.payload) {
                state.selectedMovie = action.payload;
            }
        });
});

export default moviesReducer;
