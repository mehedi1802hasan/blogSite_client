import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegistration/Login";
import Registration from "../Pages/LoginRegistration/Registration";
import AddBlog from "../Pages/AddBlog/AddBlog";
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../Pages/Details/BlogDetails";
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
    },{
      path:"/addblog",
      element:<PrivateRoute><AddBlog></AddBlog></PrivateRoute>
    },{
      path: "story/:id",
      element: <BlogDetails></BlogDetails>,
      loader: ({ params }) => fetch(`http://localhost:2000/story/${params.id}`)
    }
    
  ]);
  export default router;