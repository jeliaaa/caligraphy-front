import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from "./slices/servicesReducer"
import renovationReducer from "./slices/renovationReducer"
import stageReducer from "./slices/stageReducer"
import authReducer from './slices/authReducer';
const store = configureStore({
    reducer: {
        services: serviceReducer,
        renovation: renovationReducer,
        stages: stageReducer,
        auth: authReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;