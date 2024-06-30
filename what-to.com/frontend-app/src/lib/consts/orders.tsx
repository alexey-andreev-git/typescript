import React, { useState } from "react";
import { getOrderStatus } from "./utils/orders-utils";

const fakeOrdersData = {
  head: [
    'ID',
    'Product ID',
    'Customer ID',
    'Customer Name',
    'Order Date',
    'Order Total',
    'Current Order Status',
    'Shipment Address',
  ],
  data: [
    {
      id: '1',
      product_id: '4324',
      customer_id: '23143',
      customer_name: 'Shirley A. Lopo',
      order_date: '2022-05-17T03:24:00',
      order_total: '$435.50',
      current_order_status: 'PLACED',
      shipment_address: 'Cottage Grove, OR 97424',
    },
    {
      id: '2',
      product_id: '7453',
      customer_id: '96453',
      customer_name: 'Ryan Carroll',
      order_date: '2022-05-14T05:24:00',
      order_total: '$96.35',
      current_order_status: 'CONFIRMED',
      shipment_address: 'Los Angeles, CA 98817',
    },
    {
      id: '3',
      product_id: '5434',
      customer_id: '65345',
      customer_name: 'Mason Nash',
      order_date: '2022-05-17T07:14:00',
      order_total: '$836.44',
      current_order_status: 'SHIPPED',
      shipment_address: 'Westminster, CA 92683',
    },
    {
      id: '4',
      product_id: '9854',
      customer_id: '87832',
      customer_name: 'Luke Parkin',
      order_date: '2022-05-16T12:40:00',
      order_total: '$334.69',
      current_order_status: 'SHIPPED',
      shipment_address: 'San Mateo, CA 94403',
    },
    {
      id: '5',
      product_id: '5627',
      customer_id: '97632',
      customer_name: 'Ryan Carroll',
      order_date: '2022-05-14T09:24:09',
      order_total: '$96.35',
      current_order_status: 'DELIVERED',
      shipment_address: 'Los Angeles, CA 98017',
    },
  ]
};

type Order = typeof fakeOrdersData.data[0];

interface EditState {
  rowKey: number | null;
  columnKey: keyof Order | null;
  value: string;
}

interface GetOrdersProps {
  data: typeof fakeOrdersData;
}

const GetOrders: React.FC<GetOrdersProps> = ({ data }) => {
  const [edit, setEdit] = useState<EditState>({ rowKey: null, columnKey: null, value: '' });

  const handleCellClick = (rowKey: number, columnKey: keyof Order, value: string) => {
    setEdit({ rowKey, columnKey, value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit((prevEdit) => ({ ...prevEdit, value: e.target.value }));
  };

  const handleSave = () => {
    if (edit.rowKey !== null && edit.columnKey !== null) {
      updateOrderData(edit.rowKey, edit.columnKey, edit.value);
    }
    setEdit({ rowKey: null, columnKey: null, value: '' });
  };

  const updateOrderData = (rowKey: number, columnKey: keyof Order, newValue: string) => {
    const updatedData = [...data.data];
    updatedData[rowKey][columnKey] = newValue;
    console.log(`Updating order at row ${rowKey}, column ${columnKey} with new value: ${newValue}`);
  };

  const handleKeyEvents = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEdit({ rowKey: null, columnKey: null, value: '' });
    }
  };

  return (
    <div>
      <strong>Orders</strong>
      <div className="d-flex p-5 mt-3">
        <table className="table table-striped table-sm table-hover table-active">
          <thead>
            <tr>
              {data.head.map((head, index) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.data.map((order, rowIndex) => (
              <tr key={rowIndex}>
                {Object.keys(order).map((key) => {
                  const columnKey = key as keyof Order;
                  const isEditing = edit.rowKey === rowIndex && edit.columnKey === columnKey;
                  return (
                    <td key={columnKey} onClick={() => handleCellClick(rowIndex, columnKey, order[columnKey])}>
                      {isEditing ? (
                        <input
                          type="text"
                          value={edit.value}
                          onChange={handleInputChange}
                          onBlur={handleSave}
                          onKeyDown={handleKeyEvents}
                          autoFocus
                        />
                      ) : (
                        columnKey === 'current_order_status' ? getOrderStatus(order[columnKey]) : order[columnKey]
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetOrders;
export { fakeOrdersData };
