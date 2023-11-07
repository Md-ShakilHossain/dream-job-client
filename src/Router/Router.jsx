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
            }
        ]
    },
]);


export default router;