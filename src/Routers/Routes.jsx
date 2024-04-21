import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Layout from "../Loyout/Layout";
import Error from "../Pages/Error";
import Blog from "../Pages/Blog";
import GoogleAds from "../Pages/GoogleAds";
import ConversionApi from "../Pages/ConversionApi";
import YoutubeSeo from "../Pages/YoutubeSeo";
import Webdevelopement from "../Pages/Webdevelopment";
import WebSeo from "../Pages/WebSeo";
import Fbadvertisement from "../Pages/Fbadvertisement";

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
                path: "/facebookads",
                element: <Fbadvertisement/>
            },
            {
                path: "/googleads",
                element: <GoogleAds/>
            },
            {
                path: "/conversionapi",
                element: <ConversionApi/>
            },
            {
                path: "/youtubeseo",
                element: <YoutubeSeo/>
            },
            {
                path: "/webdevelopment",
                element: <Webdevelopement/>
            },
            {
                path: "/webseo",
                element: <WebSeo/>
            },
        ]
    }
])

export default Routes;