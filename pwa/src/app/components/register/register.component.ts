import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router, 
    private user : UserService) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstname :['', Validators.required],
      lastname :['', Validators.required]
    });
    
  }

  ngOnInit(): void {
  }
  register() {
    const val = this.form.value;

    if (val.email && val.password && val.firstname && val.lastname) {
        this.user.addUser(val)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    this.router.navigateByUrl('/');
                }
            );
    }
    console.log(val)
  }

}
