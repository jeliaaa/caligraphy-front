import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from "./slices/servicesReducer"
import renovationReducer from "./slices/renovationReducer"
import stageReducer from "./slices/stageReducer"
const store = configureStore({
    reducer: {
        services: serviceReducer,
        renovation: renovationReducer,
        stages: stageReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;