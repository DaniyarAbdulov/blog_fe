import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axios";

interface TagsState {
  tags: {
    items: string[][];
    status: "loading" | "succeeded" | "error";
  };
}

const initialState: TagsState = {
  tags: {
    items: [],
    status: "loading",
  },
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const { data } = await axios.get<string[]>("/tags");

  const tagsArray = data.map((tagsString) =>
    tagsString.split(",").map((tag) => tag.trim())
  );
  return tagsArray;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.tags.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action: PayloadAction<string[][]>) => {
        state.tags.items = action.payload;
        state.tags.status = "succeeded";
      })
      .addCase(fetchTags.rejected, (state) => {
        state.tags.items = [];
        state.tags.status = "error";
      });
  },
});

export const tagsReducer = tagsSlice.reducer;
