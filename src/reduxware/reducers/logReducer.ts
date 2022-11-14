import { createReducer } from "@reduxjs/toolkit";

import initialState from "../initialState_Log";

import { logUser, logOutUser } from "../actionCreators";

const moviesReducer = createReducer(initialState, builder => {
    builder.addCase(logUser, (state, action) => {
        state.isLogged = true;
    });
    builder.addCase(logOutUser, (state, action) => {
        state.isLogged = false;
    });
});

export default moviesReducer;
