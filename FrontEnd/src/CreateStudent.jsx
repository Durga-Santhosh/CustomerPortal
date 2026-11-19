import React, { useState } from 'react'
import { insertCustomer } from './customerService'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function CreateStudent() {

  const navigate=useNavigate();

  const[customer,setCustomer]=useState({
    cname:"",
    email:"",
    phoneNumber:""
  })
  const handleChage=(e)=>{
    setCustomer({...customer ,[e.target.name]:e.target.value})
  }
  const save=()=>{
    insertCustomer(customer);
    toast.success("Create Sucessfully");

    navigate("/get")
  }
  
  return (
    <div className='createDiv '>
      <h2>Student creation form</h2>
      <input type="text"  placeholder='Full Name' name="cname" onChange={handleChage}   />
      
      <input type="email" placeholder='Emai' name="email" onChange={handleChage} />
      
      <input type=" number" placeholder="Phone Number" name="phoneNumber"onChange={handleChage} />
      
      <button onClick={save}>Sumbit</button>
    </div>
  )
}

export default CreateStudent;
