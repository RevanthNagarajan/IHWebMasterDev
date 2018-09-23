/**
 * 
 */
package com.habits.dao.implementation;

import org.hibernate.SessionFactory;

import com.habits.dao.UserLoginDao;
import com.habits.request.UserLoginRequest;

/**
 * @author revanth
 *
 */
public class UserDaoImpl implements UserLoginDao {

	@SuppressWarnings("deprecation")
	@Override
	public String getLoginMessage(UserLoginRequest request, SessionFactory sessionFactory) {
		String  message = null;
		
		boolean login=(boolean) sessionFactory.getCurrentSession()
		.createSQLQuery("SELECT COUNT(id)>0 FROM habitsusers WHERE user_id=:id AND  password=:pwd")
		.setParameter("id", request.getUserId())
		.setParameter("pwd", request.getPassword())
		.uniqueResult();
		
		if(login) {
			message = "logged in successfully";
		}
		else {
			message="User id or password incorrect";
		}
		return message;
	}

}
