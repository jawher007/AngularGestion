import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
 
 export class UpdateEmployeeComponent implements OnInit {
  employees: Observable<Employee[]>;
  id: number;
  employee: Employee;
  drapeau ; 
  pays ;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployeesList();
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employee.drapeau=this.drapeau;
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }
  selected(){
    console.log(this.drapeau)
  }
  onSubmit() {
    this.updateEmployee();    
  }
  
  gotoList() {
    this.router.navigate(['/listeequipe']);
  }
}