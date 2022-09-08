import React, { useState, useEffect } from "react";
// import { DataStore } from "aws-amplify";
// import { Order, OrderStatus } from "../../models";
import orders from "../../assets/data/orders.json";
import { Card, Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  //   const [orders, setOrders] = useState([]);

  //   useEffect(() => {
  //     DataStore.query(Order).then(setOrders);
  //   }, []);

  console.log("orders", orders);
  let color = "grey";

  const renderOrderStatus = (orderStatus) => {
    if (orderStatus == "Accepted") {
      color = "green";
    } else if (orderStatus == "Pending") {
      color = "orange";
    } else if (orderStatus == "Declined") {
      color = "red";
    }
    return <Tag color={color}>{orderStatus}</Tag>;
  };

  const tableColumns = [
    { title: "Order ID", dataIndex: "orderID", key: "orderID" },
    {
      title: "Delivery Address",
      dataIndex: "deliveryAddress",
      key: "deliveryAddress",
    },
    {
      title: "Price",
      dataIndex: "total",
      key: "total",
      render: (price) => `Rs ${price}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: renderOrderStatus,
    },
  ];

  return (
    <Card title={"Orders"} style={{ margin: 20 }}>
      <Table
        dataSource={orders}
        columns={tableColumns}
        onRow={(orderItem) => ({
          onClick: () => navigate(`order/${orderItem.orderID}`),
        })}
        rowKey="orderID"
      />
    </Card>
  );
};

export default Orders;
