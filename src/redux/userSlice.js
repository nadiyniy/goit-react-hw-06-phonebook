const { createSlice } = require('@reduxjs/toolkit');

const userInitialState = [];
const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducer: {},
});
