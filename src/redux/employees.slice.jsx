import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const EmployeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addEmployee } = EmployeesSlice.actions;
export default EmployeesSlice.reducer;
