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
import MyEnrolledCourses from "../pages/MyEnrolledCourses";
import About from "../pages/About";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-11-server-theta-ecru.vercel.app/courses'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch('https://assignment-11-server-theta-ecru.vercel.app/allCourses'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/addCourse',
        element: <PrivateRoute>
          <AddCourse></AddCourse>
        </PrivateRoute>
      },
      {
        path: '/courseDetails/:id',
        element: <PrivateRoute>
          <CourseDetails></CourseDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-theta-ecru.vercel.app/courses/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/manageCourses',
        element: <PrivateRoute>
          <ManageCourses></ManageCourses>
        </PrivateRoute>,

      },
      {
        path: '/myEnrollCourse',
        element: <PrivateRoute>
          <MyEnrolledCourses></MyEnrolledCourses>
        </PrivateRoute>
      },
      {
        path: '/edit/:id',
        element: <PrivateRoute>
          <Edit></Edit>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-theta-ecru.vercel.app/courses/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: '/about',
    element: <About></About>
  }
]);
