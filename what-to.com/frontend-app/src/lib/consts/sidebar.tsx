import { 
    HiOutlineHome, 
    HiOutlineViewGrid, 
    HiOutlineCube, 
    HiOutlineShoppingCart,
    HiOutlinePlusCircle
} from 'react-icons/hi';
import Home from '../../pages/home';
import DashBoard from '../../pages/dashboard';
import Products from '../../pages/products';
import Orders from '../../pages/orders';
import Customers from '../../pages/customers';

// export const HiOutlineHome = () => (
//     <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
// );
// export const HiOutlineViewGrid = () => (
//     <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
// );
// export const HiOutlineCube = () => (
//     <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
// );
// export const HiOutlineShoppingCart = () => (
//     <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
// );
// export const HiOutlinePeopleCircle = () => (
//     <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
// );


export const DASHBOARD_SIDEBAR_LINKS = [
    { key: 'home', label: 'Home', path: '/', icon: <HiOutlineHome />, component: Home},
    { key: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: <HiOutlineViewGrid />, component: DashBoard},
    { key: 'products', label: 'Products', path: '/products', icon: <HiOutlineCube />, component: Products},
    { key: 'orders', label: 'Orders', path: '/orders', icon: <HiOutlineShoppingCart />, component: Orders},
    // { key: 'customers', label: 'Customers', path: '/customers', icon: <HiOutlinePeopleCircle /> },
    { key: 'customers', label: 'Customers', path: '/customers', icon: <HiOutlinePlusCircle />, component: Customers},
];
