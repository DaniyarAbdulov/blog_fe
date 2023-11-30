import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axios";
import { IPost} from "../../types";

interface PostsState {
  posts: {
    items: IPost[];
    status: "loading" | "succeeded" | "error";
  };
}

const initialState: PostsState = {
  posts: {
    items: [],
    status: "loading",
  },
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get<IPost[]>("/posts");
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.posts.status = "loading";
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<IPost[]>) => {
          state.posts.items = action.payload;
          state.posts.status = "succeeded";
        }
      )
      .addCase(fetchPosts.rejected, (state) => {
        state.posts.items = [];
        state.posts.status = "error";
      });
  },
});

export const postsReducer = postsSlice.reducer;
