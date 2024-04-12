import Header from '@/src/components/Layout/Header'
import React, { useState } from 'react'

const page = () => {
  const [orders,setOrders] = useState<Order>()
  return (
    <div>
        <Header></Header>
      estou aqui 
    </div>
  )
}

export default page
