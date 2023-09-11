import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegistration/Login";
import Registration from "../Pages/LoginRegistration/Registration";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
    
      ]

    },    {
      path:"/login",
      element:<Login></Login>
    }, {
      path:"/registration",
      element:<Registration></Registration>
    }
  ]);
  export default router;