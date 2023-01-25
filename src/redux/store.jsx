import { configureStore } from "@reduxjs/toolkit";
import count from "./count";
import post from "./data";

export const store = configureStore({
    reducer: {
        count,
        post,
    },
});

