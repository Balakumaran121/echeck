import { createRootRoute, createRoute, createRouter, redirect, RouterProvider } from "@tanstack/react-router"
import PublicLayout from "./layout/PublicLayout"
import PrivateLayout from "./layout/PrivateLayout"
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const isLoggedIn = ()=>{
  return true
}
const AppRouter = () => {
  const rootRoute = createRootRoute()
  const publicRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: "public",
    component: PublicLayout
  })
  const privateRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: 'private',
    component: PrivateLayout,
    beforeLoad:()=>{
      if(!isLoggedIn()){
        throw redirect({to:"/login"})
      }
    }
  })
  const indexRoute = createRoute({
    getParentRoute: () => privateRoute,
    path: "/",
    component: HomePage
  })
  const contactRoute = createRoute({
    getParentRoute:()=>privateRoute,
    path:"/contact",
    component:ContactPage
  })
  const aboutRoute = createRoute({
    getParentRoute: () => privateRoute,
    path: "/about",
    component: AboutPage
  })
  const loginRoute = createRoute({
    getParentRoute: () => publicRoute,
    path: "/login",
    component: LoginPage
  })
  const registerRoute = createRoute({
    getParentRoute:()=>publicRoute,
    path:"/register",
    component:RegisterPage
  })
  const routeTree = rootRoute.addChildren([
    publicRoute.addChildren([loginRoute,registerRoute]),
    privateRoute.addChildren([indexRoute, contactRoute, aboutRoute]),
  ])
  const router = createRouter({ routeTree })
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
