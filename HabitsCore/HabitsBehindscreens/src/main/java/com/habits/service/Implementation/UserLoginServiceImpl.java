package com.habits.service.Implementation;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.habits.dao.UserLoginDao;
import com.habits.request.UserLoginRequest;
import com.habits.service.UserLoginService;

@Service
public class UserLoginServiceImpl implements UserLoginService {
	
	@Autowired
	private UserLoginDao userDao;
	
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	@Transactional
	public String getLoginMessage(UserLoginRequest request) {
		// TODO Auto-generated method stub
		return userDao.getLoginMessage(request,sessionFactory);
	}

}
