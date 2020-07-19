import { Staff } from './../staff';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffServiceService } from '../staff-service.service';


@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  id: number;
  staff: Staff;

  constructor(private route: ActivatedRoute,private router: Router,
    private staffservice: StaffServiceService) { }

  ngOnInit() {
    this.staff = new Staff();

    this.id = this.route.snapshot.params['id'];
    
    this.staffservice.getStaff(this.id)
      .subscribe(data => {
        console.log(data)
        this.staff = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['liststaff']);
  }
}
