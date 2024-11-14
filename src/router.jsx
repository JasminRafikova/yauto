import { createBrowserRouter } from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { UsersPage } from './pages/UsersPage/UsersPage'
import MainLayout from "./layouts/MainLayout/MainLayout"

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "/catalog/:id",
        element: <ProductPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
    ]
  }
]);
