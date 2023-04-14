import pages from "./pages";
import {RouterType} from "../types/router.types";
import {Route, Routes} from "react-router-dom";
import {Main, Notification} from "grommet";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {removeErrorAlert} from "../redux/reducers/ErrorsAlertsReducer";


const Router = () => {
    const {errorAlerts} = useAppSelector(state => state.errorsAlertsReducer);
    const dispatch = useAppDispatch();

    const pageRoutes = pages.map(
        ({path, title, element}: RouterType) =>
            <Route key={title} path={`/${path}`} element={
                <Main>{element}</Main>
            }/>
    )

    // const errorAlertsToDisplay

    return (
        <>
            {
                errorAlerts &&
                errorAlerts.slice(0, 3).map((alert) =>
                    <Notification
                        status={'critical'}
                        title={alert.title + `${alert.code ? ` (STATUS CODE ${alert.code})` : ''}`}
                        message={alert.description}
                        onClose={() => {
                            dispatch(removeErrorAlert(alert.id));
                        }}
                    />
                )
            }
            <Routes>{pageRoutes}</Routes>
        </>
    )
}

export default Router;
