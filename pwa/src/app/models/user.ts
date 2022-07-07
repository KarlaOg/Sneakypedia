export interface User {
  firstname?: string,
  lastname?: string,
  email: string,
  password: string,
  inventories?: Array<UserInventoriesSneaker>,
  favorites?: Array<UserFavoritesSneaker>,
}


export interface UserFavoritesSneaker {
  "@id": string,
  "@type": string,
  "idSneaker": string
}


export interface UserInventoriesSneaker {
  "@id": string,
  "@type": string,
  "idSneaker": string
}