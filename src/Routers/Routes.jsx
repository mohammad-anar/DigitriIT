import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Layout from "../Loyout/Layout";
import Error from "../Pages/Error";
import Blog from "../Pages/Blog";
import Webdesign from "../Pages/FacebookAdvertising";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/services",
                element: <Services/>,
                
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/webdesign",
                element: <Webdesign/>
            },
        ]
    }
])

export default Routes;