/* tslint:disable */

declare var Object: any;
export interface CutInterface {
  "noOfYards": any;
  "yardPrice": any;
  "noOfPieces": any;
  "otherMaterials": any;
  "piecePrice": any;
  "patternNo"?: any;
  "customer"?: any;
  "deliverDate"?: any;
  "date": any;
  "note"?: any;
  "id"?: any;
  "createdAt"?: any;
  "updatedAt"?: any;
}

export class Cut implements CutInterface {
  "noOfYards": any;
  "yardPrice": any;
  "noOfPieces": any;
  "otherMaterials": any;
  "piecePrice": any;
  "patternNo": any;
  "customer": any;
  "deliverDate": any;
  "date": any;
  "note": any;
  "id": any;
  "createdAt": any;
  "updatedAt": any;
  constructor(data?: CutInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cut`.
   */
  public static getModelName() {
    return "Cut";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cut for dynamic purposes.
  **/
  public static factory(data: CutInterface): Cut{
    return new Cut(data);
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
      name: 'Cut',
      plural: 'Cuts',
      properties: {
        "noOfYards": {
          name: 'noOfYards',
          type: 'any'
        },
        "yardPrice": {
          name: 'yardPrice',
          type: 'any'
        },
        "noOfPieces": {
          name: 'noOfPieces',
          type: 'any'
        },
        "otherMaterials": {
          name: 'otherMaterials',
          type: 'any'
        },
        "piecePrice": {
          name: 'piecePrice',
          type: 'any'
        },
        "patternNo": {
          name: 'patternNo',
          type: 'any'
        },
        "customer": {
          name: 'customer',
          type: 'any'
        },
        "deliverDate": {
          name: 'deliverDate',
          type: 'any'
        },
        "date": {
          name: 'date',
          type: 'any'
        },
        "note": {
          name: 'note',
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
