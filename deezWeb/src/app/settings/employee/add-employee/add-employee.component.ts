import { Component, OnInit } from '@angular/core';
import {EmployeeApi} from '../../../shared/sdk/services/custom/Employee';
import {Employee} from '../../../shared/sdk/models/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public employee: Employee = new Employee();
  public loading = false;

  constructor(private employeeApi: EmployeeApi) { }

  ngOnInit() {
  }

  addEmployee(): void {
    this.loading = true;
    this.employeeApi.create(this.employee).subscribe(
      (res: any) => {
        this.employee = new Employee();
        this.loading = false
      },
      err => {
        console.log(err);
        this.loading = false
      }
    );
  }

}
