package com.shiv.user.dto;

public class ResponseDto {

    private DepartmentDto department;
    private UserDto user;


    public ResponseDto(DepartmentDto department, UserDto user) {
        this.department = department;
        this.user = user;
    }

    public ResponseDto() {
    }

    public DepartmentDto getDepartment() {
        return department;
    }

    public void setDepartment(DepartmentDto department) {
        this.department = department;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }
}
