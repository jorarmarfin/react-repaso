import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not_logged', // not_logged, logging, logged
        uid: null,
        email: null,
        name: null,
        photo: null,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.status = 'logging';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.photo = action.payload.photo;
        },
        logout: (state, /* action */ ) => {
            state.status = 'not_logged';
            state.uid = null;
            state.email = null;
            state.name = null;
            state.photo = null;
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    login,
    logout,
} = AuthSlice.actions;
