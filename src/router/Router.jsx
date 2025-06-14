import {
  createBrowserRouter,
} from "react-router";
import HomeLayOut from "../layout/HomeLayOut";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddCourse from "../pages/AddCourse";
import PrivateRoute from "../privateRouter/PrivateRoute";

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
        },
        {
          path : '/addCourse',
          element: <PrivateRoute>
            <AddCourse></AddCourse>
          </PrivateRoute>
        },
        {
            path: '/register',
            element : <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }

    ]
  },
]);
