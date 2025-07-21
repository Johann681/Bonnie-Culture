"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Order {
  id: string;
  date: string;
  total: string;
  status: string;
}

export default function OrderSection() {
  // Replace with real data from backend later
  const [orders, setOrders] = useState<Order[]>([]);

  return (
    <section className="w-full px-6 md:px-16 py-20 bg-[#fafafa]">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Orders
      </motion.h2>

      {orders.length === 0 ? (
        <motion.div
          className="text-center text-gray-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No orders yet.
          <p className="text-sm mt-2">
            Start shopping and your orders will appear here.
          </p>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">
                  Order #{order.id}
                </span>
                <span className="text-sm text-gray-500">{order.date}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Status: {order.status}</span>
                <span>Total: {order.total}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
