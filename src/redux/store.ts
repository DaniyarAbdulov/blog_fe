import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import { tagsReducer } from "./slices/tags";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    tags: tagsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
