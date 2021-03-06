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
    changeCount(i){
      return state[i].count + 1
    }
  }
})

export let { changeName, changeCount } = user.actions





export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer

  }
}) 