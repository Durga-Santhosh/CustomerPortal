package com.nenu.customer.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nenu.customer.model.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer> {
	
	Customer findByEmail(String email);
}
