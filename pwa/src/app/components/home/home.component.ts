import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  showMessage: boolean = false;
  success : string = " Test"
  constructor() { }

  ngOnInit(): void {
  }

  onHandleSuccess() {
    this.success = '';
  }

} 
