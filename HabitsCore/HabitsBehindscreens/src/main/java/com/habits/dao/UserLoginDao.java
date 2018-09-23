package com.habits.dao;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.habits.request.UserLoginRequest;

@Repository
public interface UserLoginDao {

	String getLoginMessage(UserLoginRequest request, SessionFactory sessionFactory);

}
