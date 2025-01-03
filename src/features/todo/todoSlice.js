import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      todo: "This is todo",
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const todo = {
          id: nanoid(),
          text: action.payload.text,
          isCompleted: action.payload.isCompleted,
        };
        state.todos.push(todo);
      },
      prepare: (text) => {
        const id = nanoid();
        return {
          payload: {
            id,
            text,
            isCompleted: false,
          },
        };
      },
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => action.payload !== todo.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
