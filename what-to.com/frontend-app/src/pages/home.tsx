import React from "react";
import Sidebar from "../components/sidebar";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./dashboard";

interface HomeProps {
    // Add any props you need for the sidebar component
}

const Home: React.FC<HomeProps> = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* <Sidebar/> */}
            <div style={{ flexGrow: 1 }}>
                <h1>Home</h1>
            </div>
        </div>
    );
}

export default Home;