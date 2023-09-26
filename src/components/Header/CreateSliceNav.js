import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Bool : false
}

const CreateSliceNav = createSlice({
    initialState,
    name:"nav",
    reducers:{
      setBool : {
        reducer(state, action){
            state.Bool = action.payload
        },
        prepare(value){
            return{
                payload:{
                    Bool : value
                }
            }
        }
      }
        
    }
})

export const selectBool = state => state.nav.Bool
export const {setBool} = CreateSliceNav.actions
export default CreateSliceNav.reducer