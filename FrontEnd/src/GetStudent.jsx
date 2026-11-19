import React, { useEffect, useState } from 'react'
import { deleteById, getCustomers } from './customerService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function GetStudent() {

  const navigate=useNavigate();
 const[customers,setCustomer]=useState([]);
  useEffect(()=>{
    loadData();
  },[])

  const loadData=async()=>{
   const result=await getCustomers();
   setCustomer(result.data)
  }

  const deleteCustomer=async(id)=>{
    await deleteById(id);
    loadData();
    toast.success("Delete successfully")
  }
  return (
    <>
      <div className='getHero'>
        <h1>Customer Details</h1>
        <table border={1}>
          <thead>
            <th>Sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th colSpan={2}>Action</th>
          </thead>
          <tbody>
            {customers.map(s=>(
              <tr key={s.key}>
                <td>{s.cid}</td>
                <td>{s.cname}</td>
                <td>{s.email}</td>
                <td>{s.phoneNumber}</td>
               <td> <button className='updateButton' onClick={()=> navigate(`/update/${s.cid}`)}  >Update</button></td>
               <td> <button className='deleteButton' onClick={()=>deleteCustomer(s.cid)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GetStudent
