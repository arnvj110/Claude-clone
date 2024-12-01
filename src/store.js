import { configureStore } from '@reduxjs/toolkit'
import claudeReducer from './features/claudeSlice'

export const store = configureStore({
  reducer: {
    claude: claudeReducer,
  },
})