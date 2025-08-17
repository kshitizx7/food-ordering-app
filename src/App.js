import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router";
/*
header
    logo
    header-utils
        home
        about
        cart
body
    search-bar
    restro-cards
footer
    cpoyright
    links
    contact us

*/


const AppLayout = () => {
    return (
        <div className="applayout">
            <Header/>
            <Outlet/>
        </div>
    )
    //header
    //body
    //footer
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        children : [
            {
            path : "/",
            element : <Body/>,
            },
            {
            path: "/About",
            element : <About/>,
            },
            {
            path: "/Contact",
            element : <Contact/>,
            },
            {
                path : "/restroMenu/:resId",
                element :<RestroMenu />,
            },
        ],
        errorElement : <Error/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)