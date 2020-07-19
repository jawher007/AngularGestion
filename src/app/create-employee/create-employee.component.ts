import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from "rxjs";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employees: Observable<Employee[]>;
  employee: Employee = new Employee();
  submitted = false;
  drapeau ; 

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployeesList();
  }

  save() {
    this.employee.drapeau=this.drapeau ;
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/listeequipe']);
  }
}
