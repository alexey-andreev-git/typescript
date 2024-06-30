import React from "react";
import Sidebar from "../components/sidebar";

interface DashBoardProps {
    // Add any props you need for the sidebar component
}

const DashBoard: React.FC<DashBoardProps> = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* <Sidebar/> */}
            <div style={{ flexGrow: 1 }}>
                <h1>Dash Board</h1>
            </div>
        </div>
    );
}

export default DashBoard;