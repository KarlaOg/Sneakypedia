import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInformation } from 'src/app/models/UserInformation';
import { ErrorService } from 'src/app/services/error.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  error: Array<String> = [];
  updateAccountForm: FormGroup;

  userInfos: UserInformation = {
    '@context': '',
    '@id': '',
    '@type': '',
    email: '',
    favorites: [],
    firstname: '',
    inventories: [],
    lastname: '',
    profileName: ''
  }

  constructor(private fb: FormBuilder, private userService: UserService, public errorSerive: ErrorService, private router: Router, private modalService: ModalService) {


    this.updateAccountForm = this.fb.group({
      profileName: new FormControl(null, [Validators.required]),
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
    })
  }




  ngOnInit(): void {
    this.loadInfos();

  }

  updateProfil() {
    this.errorSerive.handleError
    const val = this.updateAccountForm.value;
    if (val.profileName && val.firstname && val.lastname) {
      console.log(val.username)
      this.userService.updateUserAccount(val)
        .subscribe(
          {
            error: (e) => this.error = e,
            complete: () => this.router.navigateByUrl('compte/profil')
          }
        )
    }
  }

  open() {
    this.modalService.open();
  }


  loadInfos() {
    const idUser = this.userService.decodeToken().id;
    this.userService.getUserInfos(idUser)
      .subscribe({
        next: v => {
          this.userInfos = v
        },
        error: (e) => this.error.push = e,
        complete: () => console.info('complete')


      })
  }

}
