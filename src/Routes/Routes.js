import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Layout/Mainpage";
import Homepage from "../Pages/Homepage/Homepage";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Mainpage></Mainpage>,
        children:[
            {
                index:true,
                element:<Homepage></Homepage>
            }
        ]
    }
])

export default Routes