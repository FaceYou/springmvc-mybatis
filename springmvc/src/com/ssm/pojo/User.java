package com.ssm.pojo;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class User {
   
    private Integer id;
   
    @NotNull(message="{user.username.isNull}")
    @Size(min=6,max=30,message="{user.username.length.error}")
    private String username;

    @NotNull(message="{user.password.isNull}")
    private String password;

   
    private String phone;

   
    private Integer authority;

   
    private Boolean state;

   
    public Integer getId() {
        return id;
    }

  
    public void setId(Integer id) {
        this.id = id;
    }

  
    public String getUsername() {
        return username;
    }

   
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

   
    public String getPassword() {
        return password;
    }

   
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

   
    public String getPhone() {
        return phone;
    }

   
    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

  
    public Integer getAuthority() {
        return authority;
    }

   
    public void setAuthority(Integer authority) {
        this.authority = authority;
    }

    
    public Boolean getState() {
        return state;
    }

    
    public void setState(Boolean state) {
        this.state = state;
    }
}