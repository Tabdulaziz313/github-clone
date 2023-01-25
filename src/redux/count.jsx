import { createSlice } from "@reduxjs/toolkit";
// import { Action } from "@remix-run/router";

export const count = createSlice({
    name: "count",
    initialState: {
        count: '',
    },

    reducers: {
        INCER: (state, action) => {
            state.count = action;
        }
    }
});

export const {INCER} = count.actions;
export default count.reducer;