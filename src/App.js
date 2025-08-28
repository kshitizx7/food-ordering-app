import React, {lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import Shimmer from "./components/shimmer.js";
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

// chunking
// dynamic bundling
// code spliting
// Lazy loading
// on demand loading
// dynamic import
const Grocery = lazy( () =>  import("./components/Grocery")  );

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
            {
                path : "/Grocery",
                element : <Suspense fallback={<Shimmer />}> <Grocery /></Suspense>
            }
        ],
        errorElement : <Error/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)