import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    firstName: "John",
    lastName: "Dory",
    status: "active",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Wick",
    status: "inactive",
  },
  {
    id: 3,
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
      state.push({ ...action.payload, id: state.length + 1 });
    },
    editContact: (state, action) => {
      let id = action.payload.id;
      state[id - 1] = action.payload;
    },
    deleteContact: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
