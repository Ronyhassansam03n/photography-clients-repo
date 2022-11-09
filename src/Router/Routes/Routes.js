import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../Component/About/AboutUs";
import LogIn from "../../Component/Authentication/LogIn";
import Register from "../../Component/Authentication/Register";
import Blogs from "../../Component/Blog/Blogs";
import AddServices from "../../Component/HiddenRoutes/AddServices";
import MyReviews from "../../Component/HiddenRoutes/MyReviews";
import Home from "../../Component/Home/Home";
import Services from "../../Component/Services/Services";
import ServicesDetails from "../../Component/Services/ServicesDetails/ServicesDetails";
import ServicesCarddetails from "../../Component/ServicesCardDetails/ServicesCarddetails";
import Main from "../../Layout/Main";
import HeaderButton from "../../SharedPage/Header/HeaderButtons/HeaderButton";


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

  path: '/add',
  element: <AddServices></AddServices>
},
{
  path:'/off',
  element: <HeaderButton></HeaderButton>
}
      ]
    }
    

        ])

        export default router;