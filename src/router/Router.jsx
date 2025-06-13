import {
  createBrowserRouter,
} from "react-router";
import HomeLayOut from "../layout/HomeLayOut";
import Home from "../pages/Home";
import Courses from "../pages/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children:[
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/courses',
            element: <Courses></Courses>
        }

    ]
  },
]);
