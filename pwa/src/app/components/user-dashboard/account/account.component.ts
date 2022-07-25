import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  error!: [];
  updateAccountForm: FormGroup;
  constructor(private fb: FormBuilder, private user: UserService, public errorSerive: ErrorService, private router: Router, private modalService: ModalService) {


    this.updateAccountForm = this.fb.group({
      profileName: new FormControl(null, [Validators.required]),
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
    })
  }




  ngOnInit(): void {

  }

  updateProfil() {
    this.errorSerive.handleError
    const val = this.updateAccountForm.value;
    if (val.profileName && val.firstname && val.lastname) {
      console.log(val.username)
      this.user.updateUserAccount(val)
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

}
