package com.nenu.customer.service;

import java.util.List;

import com.nenu.customer.model.Customer;

public interface CustomerService {

	// Create customer data or insert the customer data;
	public abstract Customer createCustomerData(Customer c);

	// Get the All customer Data
	public abstract List<Customer> getAllCustomer();

	// Get the customer by id
	public abstract Customer getCustomer(Integer Id);

	// Update all the Customer Data
	public abstract Customer updateData(Customer c, Integer id);

	// Delete the from the DB Based on ID

	public abstract void deleteData(Integer Id);

	public abstract Customer findByEmail(String email);

}
