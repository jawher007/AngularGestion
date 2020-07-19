import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Employee } from "../employee";

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private userservice: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.userservice.getEmployeesList();
    
  }

  deleteEmployee(id: number) {
    this.userservice.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  gotoListUpdate(id:number) {
    this.router.navigate(['update',id]);
  }

  employeeDetails(id: number){
    this.router.navigate(['details',id]);
  }
}