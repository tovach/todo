import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoItem} from "../../types";

interface todoSliceState {
    items: TodoItem[]
}

const initialState: todoSliceState = {
    items: []
}

const tasksSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        setTodos(state, action: PayloadAction<TodoItem[]>) {
            state.items = [...action.payload]
        },
        addNewTask(state, action: PayloadAction<TodoItem>) {
            state.items = [action.payload, ...state.items]
        },
        changeTask(state, action: PayloadAction<TodoItem>) {
            const isExistIndex = state.items.findIndex(
                item => item.id === action.payload.id
            )
            if (isExistIndex >= 0) {
                state.items[isExistIndex] = {
                    ...action.payload
                }
            }
        },
        setCompleteStatus(state, action: PayloadAction<TodoItem>) {
            const isExistIndex = state.items.findIndex(
                item => item.id === action.payload.id
            )
            if (isExistIndex >= 0) {
                state.items[isExistIndex] = {
                    ...state.items[isExistIndex],
                    completed: !action.payload.completed
                }
            }
        },
        removeTask(state, action: PayloadAction<TodoItem>) {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    }
})

export const cartActions = tasksSlice.actions;
export default tasksSlice.reducer;