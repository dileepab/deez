import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeApi} from '../../../shared/sdk/services/custom/Employee';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../../../shared/sdk/models/Employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit, OnDestroy {

  id: any;

  public sub: any;
  public employee: Employee = new Employee();
  public loading = false;

  constructor(private employeeApi: EmployeeApi, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });

    this.employeeApi.findById(this.id).subscribe(
      (res: Employee) => {
        this.employee = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  updateEmployee(): void {
    this.loading = true;
    this.employeeApi.patchOrCreate(this.employee).subscribe(
      (res: Employee) => {
        this.employee = res;
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
