package com.nenu.customer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nenu.customer.model.Customer;
import com.nenu.customer.repo.CustomerRepo;

// press add ⬇️ press add methods

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerRepo CustomerRepo;

	@Override
	public Customer createCustomerData(Customer c) {

		return CustomerRepo.save(c);
	}

	@Override
	public List<Customer> getAllCustomer() {

		return CustomerRepo.findAll();
	}

	@Override
	public Customer getCustomer(Integer Id) {
		return CustomerRepo.findById(Id).get();
	}

	
	@Override
	public void deleteData(Integer Id) {
		CustomerRepo.deleteById(Id);

	}

	@Override
	public Customer findByEmail(String email) {
		return CustomerRepo.findByEmail(email);
	}

	@Override
	public Customer updateData(Customer c, Integer id) {
		Customer customerFromDb=getCustomer(id);
		customerFromDb.setCname(c.getCname());
		customerFromDb.setEmail(c.getEmail());
		customerFromDb.setPhoneNumber(c.getPhoneNumber());
		return CustomerRepo.save(customerFromDb);
	}

}
