package com.shiv.department.controller;

import com.shiv.department.entity.Department;
import com.shiv.department.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/departments")
//@CrossOrigin(origins = "http://localhost:3000")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;


    @PostMapping
    public ResponseEntity<Department> saveDepartment(@RequestBody Department department){
        Department department1=departmentService.saveDepartment(department);
        return new ResponseEntity<>(department1, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Department> findDepartmentById(@PathVariable("id") Long departmentId){
        Department department= departmentService.getDepartmentById(departmentId);
        return new ResponseEntity<>(department,HttpStatus.OK);
    }
}
