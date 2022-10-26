import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Layout/Mainpage";
import Checkoutpage from "../Pages/CheckoutPage/Checkoutpage";
import Homepage from "../Pages/Homepage/Homepage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Privetroute from "../PrivetRoute/Privetroute";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Mainpage></Mainpage>,
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
                path:'/checkout',
                element:<Privetroute><Checkoutpage></Checkoutpage></Privetroute>
            }
        ]
    }
])

export default Routes