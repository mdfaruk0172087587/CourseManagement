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
import Loading from "../shared/Loading";
import CourseDetails from "../pages/CourseDetails";
import ManageCourses from "../pages/ManageCourses";
import Edit from "../shared/Edit";
import NotFound from "../pages/NotFound ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    errorElement: <NotFound></NotFound>,
    children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:3000/courses'),
            hydrateFallbackElement: <Loading></Loading>
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
          path : '/courseDetails/:id',
          element : <CourseDetails></CourseDetails>,
          loader: ({params}) => fetch(`http://localhost:3000/courses/${params.id}`),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path : '/manageCourses',
          element : <PrivateRoute>
            <ManageCourses></ManageCourses>
          </PrivateRoute>,
         
        },
        {
          path : '/edit/:id',
          element : <PrivateRoute>
            <Edit></Edit>
          </PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:3000/courses/${params.id}`)
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
