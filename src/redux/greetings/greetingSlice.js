import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/random_greeting');
    if (!response.ok) {
      return Promise.reject(new Error('Something went wrong'));
    }
    const json = await response.json();
    return json;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { greeting: '', loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload.greeting;
        state.loading = false;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default greetingSlice.reducer;
