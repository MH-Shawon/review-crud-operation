import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Dashboard from "../Pages/Dashboard/Dashboard";

import ProductsDetails from "../Pages/Products/ProductsDetails";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import Shop from "../Pages/Shop/Shop";
import AddProducts from "../Pages/Dashboard/AddProducts";
import UpdateProduct from "../Pages/Dashboard/Update/UpdateProduct";
import SignIn from "../Pages/Authentication/SignIn/SignIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Error from "../Pages/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement:<Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/shoes"),
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/shoes/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboardLayout",
    element: <DashboardLayouts />,
    children: [
      {
        path: "/dashboardLayout/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboardLayout/products",
        element: <AllProducts />,
        loader: () => fetch("http://localhost:3000/shoes"),
      },
      {
        path: "/dashboardLayout/add-products",
        element: <AddProducts />,
        
      },
      {
        path: "/dashboardLayout/update-products/:id",
        element: <UpdateProduct />,
        loader: ({params}) => fetch(`http://localhost:3000/shoes/${params.id}`)
        
      },
    ],
  },
  {
    path:'/signIn',
    element: <SignIn />
  },
  {
    path:'/signUp',
    element: <SignUp />
  }
]);

export default router;
