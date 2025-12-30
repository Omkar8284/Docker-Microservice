package com.shiv.department.service;

import com.shiv.department.entity.Department;

public interface DepartmentService {

    Department saveDepartment(Department department);

    Department getDepartmentById(Long departmentId);
}
