import { configureStore } from '@reduxjs/toolkit'
import reminderSlice from './Slice/reminderSlice'



export const store = configureStore({
    reducer: {
        reminder: reminderSlice,
    },
})