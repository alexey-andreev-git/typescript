import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import getOrders from "../lib/consts/orders";
import Searchbar from "../components/searchbar";

interface ProductsProps {
    // Add any props you need for the sidebar component
}

const Products: React.FC<ProductsProps> = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <div className="d-flex justify-content-left flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <Searchbar />
            </div>
            <div style={{ flexGrow: 1 }}>
                <h1>Products</h1>
            </div>
        </div>
    );
}

export default Products;