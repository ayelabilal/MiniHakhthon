import { configureStore } from "@reduxjs/toolkit";
import productReducers from './Slices/ProductSlice'
import addToCartReducer from './slices/addToCartSlice'    
import { persistStore, persistReducer } from 'redux-persist'    
import storage from 'redux-persist/lib/storage' 


const persistConfig = {   
    key: 'root',
    storage,  
  }     


const store = configureStore({
    reducer:{
        productReducers,
        addToCartReducer:persistReducer(persistConfig,addToCartReducer),    
    }
})

export const persistor = persistStore(store)  
  
export default store;