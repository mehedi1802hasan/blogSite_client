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
import LifeStyle from "../Pages/Categories/LifeStyle";
import Trending from "../Pages/Categories/Trending";
import Health from "../Pages/Categories/Health";
import Sports from "../Pages/Categories/Sports";
import Design from "../Pages/Categories/Design";
import Fashion from "../Pages/Categories/Fashion";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/lifestyle',
          element:<LifeStyle></LifeStyle>
        }, {
          path:'/trending',
          element:<Trending></Trending>
        },
        {
          path:'/health',
          element:<Health></Health>
        },
        {
          path:'/sports',
          element:<Sports></Sports>
        },
        {
          path:'/design',
          element:<Design></Design>
        }, {
          path:'/fashion',
          element:<Fashion></Fashion>
        }
       

    
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
      loader: ({ params }) => fetch(`https://blog-site-server-6tp8d2x43-mehedi1802hasan.vercel.app/story/${params.id}`)
    }
    
  ]);
  export default router;