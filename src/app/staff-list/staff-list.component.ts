import { StaffServiceService } from './../staff-service.service';
import { Staff } from './../staff';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  staffs: Observable<Staff[]>;

  constructor(private staffService: StaffServiceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.staffs= this.staffService.getStaffsList();
  }

  deleteStaff(id: number) {
    this.staffService.deleteStaff(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  gotoListUpdate(id:number) {
    this.router.navigate(['updatestaff',id]);
  }

  staffdetails(id: number){
    this.router.navigate(['detailsstaff', id]);
  }
}