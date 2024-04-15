"use client";

import { getAllOrders } from "@/src/api/orderAPI";
import Header from "@/src/components/Layout/Header";
import LoadingSpinner from "@/src/shared/Loading/LoadingSpinner";
import styles from "@/src/utils/style";
import { Button } from "@nextui-org/react";
import { format } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [orders, setOrders] = useState<OrderPopulated[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const ordersData = await getAllOrders();

        if (ordersData) setOrders(ordersData);
      } catch (error) {
        toast.error("Error fetching your orders. Please refresh the page.");
      }
      setIsLoading(false);
    };
    fetchOrders()
  }, []);

  return (
    <div>
      <Header></Header>
      {isLoading && <LoadingSpinner />}
      <h2 className="text-dark font-bold flex justify-center items-center text-2xl m-4">
        All orders
      </h2>
      {orders && (
        <div className="flex flex-col gap-5  justify-center items-center ">
          {orders.map((data: OrderPopulated, index) => {
            return (
              <div
                key={index}
                className="bg-primary p-4 flex flex-col gap-5 rounded-lg shadow-md w-[90%] justify-start items-start text-black [&>p>span]:font-bold"
              >
                <h3 className="text-secondary font-semibold text-xl sm:text-2xl">
                  {data.hotel.name}
                </h3>
                <p>
                  <span>Check-in:</span>{" "}
                  {format(new Date(data.Date[0]), "yyyy-MM-dd")}
                </p>
                <p>
                  <span>Check-out (morning):</span>{" "}
                  {format(new Date(data.Date[1]), "yyyy-MM-dd")}
                </p>
                <p>
                  <span>room number:</span> {data.room_number}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {!orders && (
  <div className="flex flex-col justify-center items-center text-gray-500">
    
    <p className="text-lg font-semibold mb-2">Oops! Looks like you don't have any orders yet.</p>
    <p className="text-sm">But don't worry, you can start booking your next adventure now!</p>
    <Link href={"/hotels"}><Button className={`${styles.button} mt-4 bg-secondary text-white px-4 py-2 w-[30vw] hover:bg-primary-dark`}>Book Now</Button></Link>
  </div>
)}

    </div>
  );
};

export default Page;
