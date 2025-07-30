import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
            <Body/>
        </div>
    )
    //header
    //body
    //footer
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)