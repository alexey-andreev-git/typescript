import React from "react";
import Sidebar from "../components/sidebar";

interface CustomersProps {
    // Add any props you need for the sidebar component
}

const Customers: React.FC<CustomersProps> = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* <Sidebar/> */}
            <div style={{ flexGrow: 1 }}>
                <h1>Customers</h1>
            </div>
        </div>
    );
}

export default Customers;