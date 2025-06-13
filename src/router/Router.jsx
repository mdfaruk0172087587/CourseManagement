import {
  createBrowserRouter,
} from "react-router";
import HomeLayOut from "../layout/HomeLayOut";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children:[
        {
            path:'/',
            element: <Home></Home>,
        }
    ]
  },
]);
