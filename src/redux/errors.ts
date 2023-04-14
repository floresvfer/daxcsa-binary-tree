import {MiddlewareAPI, isRejectedWithValue} from '@reduxjs/toolkit';
import {useAppDispatch} from "./hooks";
import store from "./store";
import {addErrorAlert} from "./reducers/ErrorsAlertsReducer";


/**
 *
 * @param api
 */
export const rtkQueryErrorLogger = (api: MiddlewareAPI) => (next: any) => (action: any) => {
    if (isRejectedWithValue(action)) {
        store.dispatch(addErrorAlert({
            id: (new Date()).toString(),
            code: action.payload.status,
            description: action.payload.data.message,
            title: action.error.message
        }))
    }

    return next(action);
};
