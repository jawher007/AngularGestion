import { Staff } from './../staff';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffServiceService } from '../staff-service.service';
import { Employee } from "../employee";
import { Observable } from "rxjs";
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {

  employees: Observable<Employee[]>;
  staff: Staff = new Staff();
  submitted = false;
  equipe_id; 

  constructor(private staffService: StaffServiceService,private userservice: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.employees = this.userservice.getEmployeesList();
    
    
  }
  save() {
    this.staff.equipe={id:this.equipe_id}
    console.log(this.staff);
    console.log(this.equipe_id);
    this.staffService.createStaff(this.staff)
      .subscribe(data => console.log(data), error => console.log(error));
      console.log(this.equipe_id);
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  selected(){
    console.log(this.equipe_id)
  }
  gotoList() {
    this.router.navigate(['/liststaff']);
  }
}
