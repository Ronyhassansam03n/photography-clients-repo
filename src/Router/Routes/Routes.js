import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../Component/About/AboutUs";
import Blogs from "../../Component/Blog/Blogs";
import Home from "../../Component/Home/Home";
import Services from "../../Component/Services/Services";
import Main from "../../Layout/Main";


const router = createBrowserRouter([


    {
      path: '/',
      element: <Main></Main>,
      children: [


{

    path: '/',
    element: <Home></Home>
},
{
  path:'/services',
  element: <Services></Services>
},
{
    path:'/blog',
    element:<Blogs></Blogs>
},

{
  path: '/*',
  element:<AboutUs></AboutUs>
}
      ]
    }
    

        ])

        export default router;