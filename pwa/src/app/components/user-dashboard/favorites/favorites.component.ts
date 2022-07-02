import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserFav();
    this.test();
  }
  userInfos: {
    "@context": string;
    "@id": string;
    "@type": string;
    "email": string;
    "favorites": Array<object>;
    "firstname": string;
    "inventories": Array<object>;
    "lastname": string;
  } = {
      "@context": "",
      "@id": "",
      "@type": "",
      "email": "",
      "favorites": [{}],
      "firstname": "",
      "inventories": [{}],
      "lastname": "",
    }

  getUserFav() {
    const idUser = this.userService.decodeToken().id;
    return this.userService.getUserFavoris(idUser)
      .subscribe((property) => {
        for (const value of Object.values(property)) {
          return (this.userInfos = value);
        }
        console.log(property)
      })
  }

  test() {
    console.log(this.userInfos)


  }

}
