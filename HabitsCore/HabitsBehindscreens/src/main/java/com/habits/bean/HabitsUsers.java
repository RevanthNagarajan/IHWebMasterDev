/**
 * 
 */
package com.habits.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author revanth
 *
 */
@Entity
@Table(name = "COURSES")
public class HabitsUsers {
	@Id
	@GeneratedValue
	@Column(name = "id")

	private Integer id;
	@Column(name = "user_name")
	private String userName;

	@Column(name = "user_id")
	private Integer userId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	

}
