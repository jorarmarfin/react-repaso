import { createSlice } from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});


// eslint-disable-next-line react-refresh/only-export-components
export const {
    increment 
} = CounterSlice.actions;
