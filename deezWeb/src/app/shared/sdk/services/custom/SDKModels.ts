/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Role } from '../../models/Role';
import { Cut } from '../../models/Cut';
import { AppUser } from '../../models/AppUser';
import { Attendance } from '../../models/Attendance';
import { Employee } from '../../models/Employee';
import { Holiday } from '../../models/Holiday';
import { OverTime } from '../../models/OverTime';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Role: Role,
    Cut: Cut,
    AppUser: AppUser,
    Attendance: Attendance,
    Employee: Employee,
    Holiday: Holiday,
    OverTime: OverTime,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
