
export interface UserInformation {
  "@context": string,
  "@id": string,
  "@type": string,
  "email": string,
  "favorites": Array<UserFavoritesSneaker>,
  "firstname": string,
  "inventories": Array<UserInventoriesSneaker>,
  "lastname": string,
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
