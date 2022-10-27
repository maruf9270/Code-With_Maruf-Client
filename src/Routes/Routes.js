import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Layout/Mainpage";
import Checkoutpage from "../Pages/CheckoutPage/Checkoutpage";
import Courses from "../Pages/Courses/Courses";
import SingleCourseDetails from "../Pages/Courses/SingleCourseDetails/SingleCourseDetails";
import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Privetroute from "../PrivetRoute/Privetroute";
import Errorpage from "../Shard/ErrorPage/Errorpage";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Mainpage></Mainpage>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                index:true,
                element:<Homepage></Homepage>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Registration></Registration>
            },
            
            {
                path:'/checkout/:ID',
                element:<Privetroute><Checkoutpage></Checkoutpage></Privetroute>,
                loader:({params})=>fetch(`http://localhost:3150/${params.ID}`)
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                // loader: ()=>fetch('https://server-side-two.vercel.app/categories'),
                loader: ()=>fetch('http://localhost:3150/categories'),
                children:[
                    {
                        index:true,
                        loader: ()=> fetch('http://localhost:3150/01'),
                        element:<SingleCourseDetails></SingleCourseDetails>
                    },
                    {
                        path:'/courses/course/:ID',
                        loader: ({params})=>fetch(`http://localhost:3150/${params.ID}`)
                        ,element:<SingleCourseDetails></SingleCourseDetails>
                    }
                ]
            }
        ]
    }
])

export default Routes