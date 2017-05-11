/* tslint:disable */
import {
  Employee
} from '../index';

declare var Object: any;
export interface AttendanceInterface {
  "uid": any;
  "name"?: any;
  "dateTime"?: any;
  "id"?: any;
  "createdAt"?: any;
  "updatedAt"?: any;
  "employeeId"?: any;
  employee?: Employee;
}

export class Attendance implements AttendanceInterface {
  "uid": any;
  "name": any;
  "dateTime": any;
  "id": any;
  "createdAt": any;
  "updatedAt": any;
  "employeeId": any;
  employee: Employee;
  constructor(data?: AttendanceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Attendance`.
   */
  public static getModelName() {
    return "Attendance";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Attendance for dynamic purposes.
  **/
  public static factory(data: AttendanceInterface): Attendance{
    return new Attendance(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Attendance',
      plural: 'Attendances',
      properties: {
        "uid": {
          name: 'uid',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'any'
        },
        "dateTime": {
          name: 'dateTime',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'any'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'any'
        },
        "employeeId": {
          name: 'employeeId',
          type: 'any'
        },
      },
      relations: {
        employee: {
          name: 'employee',
          type: 'Employee',
          model: 'Employee'
        },
      }
    }
  }
}
