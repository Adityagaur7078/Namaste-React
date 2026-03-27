import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Componenets/Header";
import Body from "./Componenets/Body";
import RestaurantCard from "./Componenets/RestaurantCard";
import Footer from "./Componenets/Footer";
import resObj from "./utils/mockdata";



const AppLayout = () => (
    <>
        <Header />
        <Body />
        <Footer />
    </>
)




const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />)