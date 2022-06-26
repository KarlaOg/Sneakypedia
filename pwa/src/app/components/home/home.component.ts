import { Component, Input, OnInit, EventEmitter, Output, } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showMessage: boolean = false;
  success: string = " Test"
  currentItem = '';


  constructor() { }

  ngOnInit(): void {
    console.log()
  }


  onSearchSneaker(event: any) {
    this.currentItem = event.target.value
 }

}
