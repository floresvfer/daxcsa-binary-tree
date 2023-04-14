import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReactNode} from "react";
import exp from "constants";

type ErrorAlertState = {
    id: string,
    code?: string,
    title: string,
    description: string,
}

type ErrorsAlertsState = {
    errorAlerts: Array<ErrorAlertState>
}

const initialState: ErrorsAlertsState = {
    errorAlerts: []
}

/**
 *
 */
export const errorsAlertsSlice = createSlice({
    name: "errorsAlerts",
    initialState,
    reducers: {
        addErrorAlert: (state, action: PayloadAction<ErrorAlertState>) => {
            state.errorAlerts = state.errorAlerts.concat(action.payload);
        },
        removeErrorAlert: (state, action: PayloadAction<string>) => {
            state.errorAlerts = state.errorAlerts.filter(alert => alert.id !== action.payload);
        }
    }
})


export const {
    removeErrorAlert,
    addErrorAlert
} = errorsAlertsSlice.actions;

export default errorsAlertsSlice.reducer;
