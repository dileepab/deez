/* tslint:disable */

declare var Object: any;
export interface AppUserInterface {
  "firstName"?: any;
  "lastName"?: any;
  "gender"?: any;
  "userRole"?: any;
  "realm"?: any;
  "username"?: any;
  "password": any;
  "email": any;
  "emailVerified"?: any;
  "verificationToken"?: any;
  "id"?: any;
  "createdAt"?: any;
  "updatedAt"?: any;
  accessTokens?: any[];
}

export class AppUser implements AppUserInterface {
  "firstName": any;
  "lastName": any;
  "gender": any;
  "userRole": any;
  "realm": any;
  "username": any;
  "password": any;
  "email": any;
  "emailVerified": any;
  "verificationToken": any;
  "id": any;
  "createdAt": any;
  "updatedAt": any;
  accessTokens: any[];
  constructor(data?: AppUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AppUser`.
   */
  public static getModelName() {
    return "AppUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AppUser for dynamic purposes.
  **/
  public static factory(data: AppUserInterface): AppUser{
    return new AppUser(data);
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
      name: 'AppUser',
      plural: 'AppUsers',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'any'
        },
        "lastName": {
          name: 'lastName',
          type: 'any'
        },
        "gender": {
          name: 'gender',
          type: 'any'
        },
        "userRole": {
          name: 'userRole',
          type: 'any',
          default: 'user'
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
        "email": {
          name: 'email',
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
      }
    }
  }
}
