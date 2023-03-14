import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const addToDo = createAction("ADD"); //name of action
// const deleteToDo = createAction("DELETE"); //name of action

// const reducer = createReducer([], {
//   // you can mutate state, must be returned new state
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

// store.subscribe(); 변화가 있으면 re-render하기 바람.

console.log(toDos.actions);

export const { add, remove } = toDos.actions;

export default store;
