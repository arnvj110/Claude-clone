import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  names: localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : [],
  chatText: localStorage.getItem("chatText") ? JSON.parse(localStorage.getItem("chatText")) : []
}

export const claudeSlice = createSlice({
  name: 'claude',
  initialState,
  reducers: {
    
    updatename: (state, action) => {
      const name=action.payload;
      console.log(name.fullname);
      if(name.fullname.trim() && name.nickname.trim()){

        state.names.push(name);
        localStorage.setItem('names',JSON.stringify(state.names));
      }
    },
    
  },
})


export const { updatename } = claudeSlice.actions

export default claudeSlice.reducer