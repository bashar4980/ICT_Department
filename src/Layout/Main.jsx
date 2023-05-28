// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../Pages/SharedPages/Navbar";
import Footer from "../Pages/SharedPages/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;