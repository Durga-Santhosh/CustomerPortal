package com.nenu.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nenu.customer.model.Customer;
import com.nenu.customer.service.CustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

	@Autowired
	CustomerService customerService;
	
	//http://localhost:7070/customer/wel
	@GetMapping("/wel")
	String showMsg() {
		return "Welcome to Java Customer Application";
	}
	//http://localhost:7070/customer/create
	@PostMapping("/create") 
	Customer createCustomerInfo(@RequestBody Customer c){
		return customerService.createCustomerData(c); 

	}
	
	//http://localhost:7070/customer/getcus
	@GetMapping("/getcus")
	List<Customer> getAllCustomer(){
		return customerService.getAllCustomer();
	}
	
	//http://localhost:7070/customer/getcusid/2
	@GetMapping("/getcusid/{id}")
	Customer findCustomerById(@PathVariable Integer id) {
		return customerService.getCustomer(id);
	}
	
	//http://localhost:7070/customer/delcus/3
	@DeleteMapping("/delcus/{id}")
	String  deletecustomer(@PathVariable Integer id) {
		customerService.deleteData(id);
		return (id+"Delete Sucessfuly");
	}
	//http://localhost:7070/customer/getcus/email/santhyosh@gmail.com
	@GetMapping("/getcus/email/{email}")
	Customer getByEmail(@PathVariable String email) {
		return customerService.findByEmail(email);
	}
	
	//http://localhost:7070/customer/update/3
	@PutMapping("/update/{id}")
	Customer updateCustomer(@RequestBody Customer c,@PathVariable Integer id ) {
		return customerService.updateData(c, id);
	}
	
	
	
}
