import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard'
import Main from '../layouts/Main'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import Instructor from '../pages/dashboard/Instructors/Instructor'
import Home from '../pages/home/Home'
import MyClasses from '../pages/dashboard/Instructors/MyClasses'
import SelectedClasses from '../pages/dashboard/Student/SelectedClasses'
import Enrolled from '../pages/dashboard/Student/Enrolled'
import InstructorPage from '../pages/Instructor/InstructorPage'
import Classes from '../pages/Classes/Classes'
import AllUsers from '../pages/dashboard/Admin/AllUsers'
import ManageClasses from '../pages/dashboard/Admin/ManageClasses'
import Payment from '../pages/dashboard/Payment/Payment'
import PrivateRoute from './PrivateRoute'
import MyPayments from '../pages/dashboard/Student/MyPayments'
import ErrorPage from '../pages/ErrorPage'
import StudentRoute from './StudentRoute'
import InstructorRoute from './InstructorRoute'
import AdminRoute from './AdminRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructor',
        element: <InstructorPage></InstructorPage>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/error',
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/addClass',
        element: <InstructorRoute><Instructor></Instructor></InstructorRoute>
      },
      {
        path: '/dashboard/myclasses',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: '/dashboard/selectedclass',
        element: <StudentRoute><SelectedClasses></SelectedClasses></StudentRoute>
      },
      {
        path: '/dashboard/enrolled',
        element: <StudentRoute><Enrolled></Enrolled></StudentRoute>
      },
      {
        path : '/dashboard/payments',
        element: <StudentRoute><MyPayments></MyPayments></StudentRoute>
      },
      {
        path: '/dashboard/admin/allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "/dashboard/payment/:id",
        element: <StudentRoute><Payment></Payment></StudentRoute>
      },
      {
        path: '/dashboard/admin/manageClasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      }
    ]
  }
])
