"use client"

import { getAllOrders } from '@/src/api/orderAPI'
import Header from '@/src/components/Layout/Header'
import LoadingSpinner from '@/src/shared/Loading/LoadingSpinner'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {
  const [orders,setOrders] = useState<OrderPopulated[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(()=>{
    const fetchOrders = async ()=>{
    
      setIsLoading(true)
      try {
        const ordersData = await getAllOrders()
        
        if(ordersData) setOrders(ordersData)
        
      } catch (error) {
        toast.error("Error fetching your orders. Please refresh the page.")
      }
      
      setIsLoading(false)
      
    }
    fetchOrders()
  },[])

  return (
    <div>
        <Header></Header>
        {isLoading && <LoadingSpinner/>}
        {
          orders && <div>
            {orders.map((data:OrderPopulated,index)=>{
              return (
                <p key={index}>{data.hotel.name}</p>
              )
            })}
          </div>
        }
      estou aqui 
    </div>
  )
}

export default page
