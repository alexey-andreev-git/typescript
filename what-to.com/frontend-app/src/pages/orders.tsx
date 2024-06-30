import React from "react";
import Searchbar from "../components/searchbar";
import getOrders, {fakeOrdersData} from "../lib/consts/orders";

interface OrdersProps {
    // Add any props you need for the sidebar component
}

const Orders: React.FC<OrdersProps> = () => {
    const ordersProps = {
        head: ["id", "product_id", "customer_id", "customer_name", "order_date", "order_total", "current_order_status", "shipment_address"],
        data: fakeOrdersData
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <div className="d-flex justify-content-left flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <Searchbar />
            </div>
            <div style={{ flexGrow: 1 }}>
                <h1>Orders</h1>
                {getOrders(ordersProps)}
            </div>
        </div>
    );
}

export default Orders;