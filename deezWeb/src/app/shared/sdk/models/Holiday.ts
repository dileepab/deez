/* tslint:disable */

declare var Object: any;
export interface HolidayInterface {
  "date": any;
  "id"?: any;
  "createdAt"?: any;
  "updatedAt"?: any;
}

export class Holiday implements HolidayInterface {
  "date": any;
  "id": any;
  "createdAt": any;
  "updatedAt": any;
  constructor(data?: HolidayInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Holiday`.
   */
  public static getModelName() {
    return "Holiday";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Holiday for dynamic purposes.
  **/
  public static factory(data: HolidayInterface): Holiday{
    return new Holiday(data);
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
      name: 'Holiday',
      plural: 'Holidays',
      properties: {
        "date": {
          name: 'date',
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
      }
    }
  }
}
