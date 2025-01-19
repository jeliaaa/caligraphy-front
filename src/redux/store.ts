import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from "./slices/servicesReducer"
import renovationReducer from "./slices/renovationReducer"
const store = configureStore({
    reducer: {
        services: serviceReducer,
        renovation: renovationReducer 
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;