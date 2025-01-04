import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const todo = {
          id: nanoid(),
          todo: action.payload.text,
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
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        action.payload === todo.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },

    updateTodo: {
      reducer: (state, action) => {
        state.todos = state.todos.map((t) =>
          t.id === action.payload.id ? { ...t, todo: action.payload.text } : t
        );
      },
      prepare: (id, text) => {
        return {
          payload: {
            id,
            text,
          },
        };
      },
    },
  },
});

export const { addTodo, removeTodo, completeTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
