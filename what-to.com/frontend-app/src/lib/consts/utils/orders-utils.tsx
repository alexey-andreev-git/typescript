export function getOrderStatus(status: string) {
    switch (status) {
        case 'SHIPPED':
            return (
                <span className="badge bg-primary text-white">Shipped</span>
            );
        case 'DELIVERED':
            return (
                <span className="badge bg-success text-white">Delivered</span>
            );
        case 'PENDING':
            return (
                <span className="badge bg-warning text-white">Pending</span>
            );
        case 'CANCELED':
            return (
                <span className="badge bg-danger text-white">Canceled</span>
            );
        case 'PLACED':
            return (
                <span className="badge bg-info text-white">Placed</span>
            );
        case 'CONFIRMED':
            return (
                <span className="badge bg-danger text-white">Confirmed</span>
            );
        default:
            return (
                <span className="badge bg-secondary text-white">Unknown</span>
            );
    }
}