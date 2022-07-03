import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { userInformation } from '../../../models/userInfos'


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})


export class FavoritesComponent implements OnInit {


  test: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserInfosFav();
    console.log(this.test);
    this.loadFavoris();
  }



  getUserInfosFav() {
    const idUser = this.userService.decodeToken().id;
    return this.userService.getUserInformations(idUser)
      .subscribe({
        next: (v) => this.test.push(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
  }


  loadFavoris() {
    console.log(this.test.length)
    
    this.test.forEach(val => console.log(val))
  
  }



}
