import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axios";
import { IPost, Tags } from "../../types";

interface PostsState {
  posts: {
    items: IPost[];
    status: "loading" | "succeeded" | "error";
  };
  tags: {
    items: Tags;
    status: "loading" | "succeeded" | "error";
  };
}

const initialState: PostsState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: {
      items: [], 
    },
    status: "loading",
  },
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get<IPost[]>("/posts");
  return data;
});

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const { data } = await axios.get<Tags>("/tags");
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
      })
      .addCase(fetchTags.pending, (state) => {
        state.tags.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action: PayloadAction<Tags>) => {
        state.tags.items = action.payload;
        state.tags.status = "succeeded";
      })
      .addCase(fetchTags.rejected, (state) => {
        state.tags.items = { items: [] }; 
        state.tags.status = "error";
      });
  },
});

export const postsReducer = postsSlice.reducer;
