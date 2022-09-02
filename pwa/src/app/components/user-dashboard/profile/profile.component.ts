import { Component, OnInit } from '@angular/core';
import { UserInformation } from 'src/app/models/UserInformation';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfos: UserInformation = {
    "@context": '',
    "@id": '',
    "@type": '',
    email: '',
    favorites: [],
    firstname: '',
    inventories: [],
    lastname: '',
    profileName: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserInfos()
    
  }

  loadUserInfos() {
    const idUser = this.userService.decodeToken().id;
    return this.userService.getUserInfos(idUser).subscribe({
      next: (value) => {
        this.userInfos = value
        console.log(this.userInfos)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }
}
