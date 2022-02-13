import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./slices/tasksSlice";

const store = configureStore({
    reducer: {
        todoSlice: todoSlice,
    }
})


export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store