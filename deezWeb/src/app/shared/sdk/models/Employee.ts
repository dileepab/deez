/* tslint:disable */
import {
  Attendance
} from '../index';

declare var Object: any;
export interface EmployeeInterface {
  "initials"?: any;
  "firstName": any;
  "lastName"?: any;
  "nic"?: any;
  "uid"?: any;
  "joinDate"?: any;
  "email"?: any;
  "resignDate"?: any;
  "salary"?: any;
  "designation"?: any;
  "contactNo"?: any;
  "realm"?: any;
  "username"?: any;
  "password": any;
  "emailVerified"?: any;
  "verificationToken"?: any;
  "id"?: any;
  "createdAt"?: any;
  "updatedAt"?: any;
  accessTokens?: any[];
  attendances?: Attendance[];
}

export class Employee implements EmployeeInterface {
  "initials": any;
  "firstName": any;
  "lastName": any;
  "nic": any;
  "uid": any;
  "joinDate": any;
  "email": any;
  "resignDate": any;
  "salary": any;
  "designation": any;
  "contactNo": any;
  "realm": any;
  "username": any;
  "password": any;
  "emailVerified": any;
  "verificationToken": any;
  "id": any;
  "createdAt": any;
  "updatedAt": any;
  accessTokens: any[];
  attendances: Attendance[];
  constructor(data?: EmployeeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Employee`.
   */
  public static getModelName() {
    return "Employee";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Employee for dynamic purposes.
  **/
  public static factory(data: EmployeeInterface): Employee{
    return new Employee(data);
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
      name: 'Employee',
      plural: 'Employees',
      properties: {
        "initials": {
          name: 'initials',
          type: 'any'
        },
        "firstName": {
          name: 'firstName',
          type: 'any'
        },
        "lastName": {
          name: 'lastName',
          type: 'any'
        },
        "nic": {
          name: 'nic',
          type: 'any'
        },
        "uid": {
          name: 'uid',
          type: 'any'
        },
        "joinDate": {
          name: 'joinDate',
          type: 'any'
        },
        "email": {
          name: 'email',
          type: 'any'
        },
        "resignDate": {
          name: 'resignDate',
          type: 'any'
        },
        "salary": {
          name: 'salary',
          type: 'any'
        },
        "designation": {
          name: 'designation',
          type: 'any'
        },
        "contactNo": {
          name: 'contactNo',
          type: 'any'
        },
        "realm": {
          name: 'realm',
          type: 'any'
        },
        "username": {
          name: 'username',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'any'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'any'
        },
        "verificationToken": {
          name: 'verificationToken',
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
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        attendances: {
          name: 'attendances',
          type: 'Attendance[]',
          model: 'Attendance'
        },
      }
    }
  }
}
