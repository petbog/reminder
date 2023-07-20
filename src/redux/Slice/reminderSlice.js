import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item:[]
}

export const reminderSlice = createSlice({
    name: 'reminder',
    initialState,
    reducers: {
      addReminder: (state, action) => {
        state.item = [...state.item,action.payload]
      },
    },
  })
  
  export const { addReminder } = reminderSlice.actions
  
  export default reminderSlice.reducer
  
  export const selectReminder = (state) => state.reminder