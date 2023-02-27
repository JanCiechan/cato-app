import { createSlice } from '@reduxjs/toolkit'

export const catSlice = createSlice({
  name: 'cat',
  initialState: {
    cats:[{url:"https://cdn2.thecatapi.com/images/8aq.jpg",rating:0}]
},
  reducers: {
    changeRate: (state,action) => {

      state.cats[action.payload.current].rating = action.payload.rating
      
    },
    addCat: (state, action) => {
      state.cats=[...state.cats,action.payload]    
      
    },
  },
})

export const { changeRate, addCat, incrementByAmount } = catSlice.actions


export default catSlice.reducer