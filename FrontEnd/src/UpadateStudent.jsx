import React, { useEffect, useState } from "react";
import { getById, getCustomers, updatetById } from "./customerService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UpadateStudent() {
  const { id } = useParams();
  const navigate= useNavigate();

  const [customer, setCustomer] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await getById(id);
    setCustomer(result.data);
  };
  const handleChange=(e)=>{
    setCustomer({...customer ,[e.target.name]:e.target.value})
  }
  const update=()=>{
    updatetById(id,customer);

    toast.success("Update Sucessfully")
    navigate("/get")
  }

  return (
    <div className="createDiv ">
      <h2>Edit Customers details</h2>
      
      <input
        type="text"
        placeholder="Full Name"
        name="cname"
        value={customer.cname}
        onChange={handleChange}
      />

      <input type="email" placeholder="Emai" name="email" value={customer.email } onChange={handleChange} />

      <input type=" number" placeholder="Phone Number" name="phoneNumber" value={customer.phoneNumber} onChange={handleChange} />

      <button onClick={update} >Sumbit</button>
    </div>
  );
}

export default UpadateStudent;
