import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { API } from '../api/api';

export const setposts = createAsyncThunk("post/setposts", () => {
    const response = API.github();
    const dates  = dates.then(dates)

});

export const postSlise = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loader: false,
        status: '',
    },

    extraReducers: {
        [setposts.pending]: (state, action) => {
            state.status = "Panding"
        },
        [setposts.rejected]: (state, action) => {
            state.status = "Rejected"
        },
        [setposts.fulfilled]: (state, action) => {
            state.status = "Ful Fuild",
                state.loader = true,
                state.posts = action.payload;
        }
    },
});


export default postSlise.reducer;
;