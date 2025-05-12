// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Orders.css";

const Orders = () => {
  // Dummy data for now
  const orders = [
    {
      id: "ORD123",
      customer: "John Doe",
      total: 1200,
      status: "Delivered",
      date: "2025-05-12",
    },
    {
      id: "ORD124",
      customer: "Jane Smith",
      total: 800,
      status: "Pending",
      date: "2025-05-11",
    },
  ];

  return (
    <div className="orders">
      <h2>Recent Orders</h2>
      <div className="orders-table">
        <div className="orders-header orders-row">
          <span>Order ID</span>
          <span>Customer</span>
          <span>Total</span>
          <span>Status</span>
          <span>Date</span>
        </div>
        {orders.map((order) => (
          <div className="orders-row" key={order.id}>
            <span>{order.id}</span>
            <span>{order.customer}</span>
            <span>Rs. {order.total}</span>
            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
            <span>{order.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
