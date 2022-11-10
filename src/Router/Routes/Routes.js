import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../Component/About/AboutUs";
import LogIn from "../../Component/Authentication/LogIn";
import Register from "../../Component/Authentication/Register";
import Blogs from "../../Component/Blog/Blogs";
import AddServices from "../../Component/HiddenRoutes/AddServices";
import MyReviews from "../../Component/HiddenRoutes/MyReviews";
import Orders from "../../Component/HiddenRoutes/Orders";
import Home from "../../Component/Home/Home";
import Services from "../../Component/Services/Services";
import ServicesCarddetails from "../../Component/ServicesCardDetails/ServicesCarddetails";
import Main from "../../Layout/Main";
import HeaderButton from "../../SharedPage/Header/HeaderButtons/HeaderButton";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
  element: <PrivateRoute><Services></Services></PrivateRoute>
},
{
    path:'/blog',
    element:<Blogs></Blogs>
},

{
  path: '/*',
  element:<AboutUs></AboutUs>
},

{
  path:'/card/:id',
  element: <ServicesCarddetails></ServicesCarddetails>,
  loader: ({params}) => fetch (`http://localhost:5000/services/${params.id}`)
},
{

  path: '/login',
  element: <LogIn></LogIn>
},
{

  path: '/register',
  element: <Register></Register>
},
{

  path: '/reviews',
  element: <MyReviews></MyReviews>
},
{

  path: '/add/:id',
  element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
  loader: ({params}) => fetch (`http://localhost:5000/services/${params.id}`)
  
},

{

path:'/added',
element :<Orders></Orders>

},

{
  path:'/off',
  element: <HeaderButton></HeaderButton>
}
      ]
    }
    

        ])

        export default router;