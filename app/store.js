import { configureStore } from '@reduxjs/toolkit'
import crudReducers from '../src/feacture/crudSlice.js'
export const store=configureStore({
   reducer:{
    crudSliceReducer:crudReducers,
   },
})