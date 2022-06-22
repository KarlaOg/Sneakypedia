
export const arrayGroupBy = (key: any, arr: any) =>
  arr.reduce((cache: any, product: any) => {
    const property = product[key];
    if (property in cache) {
      return { ...cache, [property]: cache[property].concat(product) };
    }
    return { ...cache, [property]: [product] };
  }, {});