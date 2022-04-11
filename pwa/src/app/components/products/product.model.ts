export class Product {
    constructor(
      public label: string,
      public image: string,
      public description: string,
      public price: number,
      public _id?: number,
      public updatedAt?: Date,
      public createdAt?: Date,
      public lastUpdatedBy?: string,
    ) { }
  }