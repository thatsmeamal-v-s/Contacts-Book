import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "John",
    lastName: "Dory",
    status: "active",
  },
  {
    firstName: "John",
    lastName: "Wick",
    status: "inactive",
  },
  {
    firstName: "Albert",
    lastName: "Dory",
    status: "active",
  },
];

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    editContact: (state, action) => {
      state.value += action.payload;
    },
    deleteContact: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
