// App.jsx
import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Features from "./pages/Features"
import Pricing from "./pages/Pricing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "features", element: <Features /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
