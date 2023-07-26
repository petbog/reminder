import { createSlice } from '@reduxjs/toolkit'

const stateLocalStorage = JSON.parse(localStorage.getItem('reminder'))

const initialState = {
  items: stateLocalStorage ? stateLocalStorage : []
}

export const reminderSlice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    addReminder: (state, action) => {
      state.items = [...state.items, action.payload]
      localStorage.setItem('reminder', JSON.stringify(state.items));
    },
    removeReminder(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
      localStorage.setItem('reminder', JSON.stringify(state.items))
    }, newReminder(state, action) {
      state.items = action.payload
      localStorage.setItem('reminder', JSON.stringify(state.items));
    }
  },
})

export const { addReminder, removeReminder,newReminder } = reminderSlice.actions

export default reminderSlice.reducer

export const selectReminder = (state) => state.reminder