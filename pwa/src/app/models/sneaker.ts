export interface Sneaker {
  id?: number,
  label: string,
  image: string,
  description: string,
  price: number,
  release_date: string,
}


export interface SneakerList {
  [index: number]: {
    id?: number,
    label: string,
    image: string,
    description: string,
    price: number,
    release_date: string,
  }
}

export interface sortedSneakerList extends Sneaker {
  sortedDate: [
    { sneaker: Sneaker[] }
  ]
}