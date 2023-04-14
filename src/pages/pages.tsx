import {RouterType} from "../types/router.types";
import Home from "./Home/Home";
import Details from "./Details/Details";

const pages: Array<RouterType> = [
    {
        path: "",
        element: <Home/>,
        title: "Home",
    },
    {
        path: "details",
        element: <Details/>,
        title: "Details",
    }
]
export default pages;
