import { Sneaker, SneakerList } from "../models/sneaker";

export const arrayGroupBy = (key: Sneaker["release_date"], arr: SneakerList[]) =>
  arr.reduce((cache: any, product: any) => {
    const property = product[key];
    if (property in cache) {
      return { ...cache, [property]: cache[property].concat(product) };
    }
    return { ...cache, [property]: [product] };
  }, {});