import { StaffServiceService } from './../staff-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from '../staff';
import { Employee } from "../employee";
import { Observable } from "rxjs";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {
  employees: Observable<Employee[]>;
  id: number;
  staff: Staff;
  equipe_id: number ; 
  nom :string ;
  constructor(private route: ActivatedRoute,private router: Router,private userservice: EmployeeService,
    private staffService: StaffServiceService) { }

  ngOnInit() {
    this.employees = this.userservice.getEmployeesList();
    this.staff = new Staff();

    this.id = this.route.snapshot.params['id'];
    
    this.staffService.getStaff(this.id)
      .subscribe(data => {
        console.log(data)
        this.staff = data;
      }, error => console.log(error));
  }

  updateStaff() {
    this.staff.equipe={id:this.equipe_id}
    this.staffService.updateStaff(this.id, this.staff)
      .subscribe(data => console.log(data), error => console.log(error));
    this.staff = new Staff();
    this.gotoList();
  }
  /*
  this.employeeService.updateEmployee(this.id, this.employee)
  .subscribe(data => console.log(data), error => console.log(error));
this.employee = new Employee();
this.gotoList();
*/
  onSubmit() {
    this.updateStaff();    
  }
  
  gotoList() {
    this.router.navigate(['/liststaff']);
  }
}