import {configureStore} from "@reduxjs/toolkit";
import {rtkQueryErrorLogger} from "./errors";
import errorsAlertsReducer from "./reducers/ErrorsAlertsReducer";

const store = configureStore({
    reducer: {
        errorsAlertsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        })
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
