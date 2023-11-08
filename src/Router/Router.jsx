import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login & Register/Login";
import Register from "../Pages/Login & Register/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Blogs from "../Pages/Blogs/Blogs";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import UpdateAJob from "../Pages/MyJobs/UpdateAJob";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/job/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/alljobs/${params.id}`)
            },
            {
                path: '/allJobs',
                element: <AllJobs></AllJobs>,
                loader: ()=> fetch('http://localhost:5000/alljobs')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addJobs',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: '/myJobs',
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateAJob></UpdateAJob></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/allJobs/${params.id}`)
            },
            {
                path: '/appliedJobs',
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            }
        ]
    },
]);


export default router;