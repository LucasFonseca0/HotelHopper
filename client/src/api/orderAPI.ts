import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8000/order";

const getAccessToken = () => {
  return Cookies.get("access_token");
};

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
});

export async function createOrder(orderData:OrderPost) {
  try {
    const response = await axiosInstance.post("", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}

export async function getAllOrders() {
  try {
    const response = await axiosInstance.get("");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}

export async function getOrderById(orderId:string) {
  try {
    const response = await axiosInstance.get(`/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
}
