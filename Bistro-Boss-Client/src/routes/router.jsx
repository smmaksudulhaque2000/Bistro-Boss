import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import Menu from "../page/menu/Menu";
import MenuPage from "../page/menu/MenuPage";




export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <MenuPage></MenuPage>
      },
      ]
    },
  ]);