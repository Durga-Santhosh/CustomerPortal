import axios from "axios";

const API_URL="http://localhost:7070/customer"
export const insertCustomer=(customer)=>axios.post(`${API_URL}/create`,customer);
export const getCustomers=()=>axios.get(`${API_URL}/getcus`);
export const deleteById=(id)=>axios.delete(`${API_URL}/delcus/${id}`);

export const getById=(id)=>axios.get(`${API_URL}/getcusid/${id}`);
export const updatetById=(id,customer)=>axios.put(`${API_URL}/update/${id}`,customer);