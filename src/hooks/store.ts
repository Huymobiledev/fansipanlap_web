import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '@/slices/userSlice'
import { appConfigSlice } from '@/slices/appConfigSlice'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['preference'] // only navigation will be persisted
}


const rootReducer = combineReducers({
    user: userSlice.reducer,
    appConfig: appConfigSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)