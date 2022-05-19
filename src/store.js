import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(state){
      return 'john ' + state
    }
  }
})

let cart = createSlice({
  name : 'data',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCount(state, action){
      let index = state.findIndex((a)=>{return a.id === action.payload})
      console.log(index)
      
      state[index].count += 1;
    },
    addItem(state, action){
      state.push(action.payload);
    }
  },

})

export let { changeName } = user.actions
export let { changeCount, addItem } = cart.actions






export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer

  }
}) 