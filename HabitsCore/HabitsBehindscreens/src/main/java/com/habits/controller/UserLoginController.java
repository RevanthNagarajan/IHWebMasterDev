/**
 * 
 */
package com.habits.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.habits.request.UserLoginRequest;
import com.habits.response.UserLoginResponse;
import com.habits.service.UserLoginService;

/**
 * @author revanth
 *
 */

@Controller
public class UserLoginController  {

@Autowired
UserLoginService userLogin; 

@ResponseBody
@RequestMapping(value="/user/login",method=RequestMethod.POST)
private UserLoginResponse userLogin (@RequestBody UserLoginRequest request) {
	UserLoginResponse response = new UserLoginResponse();
	
	response.setMessage(userLogin.getLoginMessage(request));
	
	return response;
	
}


}
