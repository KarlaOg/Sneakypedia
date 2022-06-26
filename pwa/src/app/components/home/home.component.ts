import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import {Sneaker} from 'src/app/models/sneaker'
import { SneakerService } from 'src/app/services/sneaker/sneaker.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  showMessage: boolean = false;
  currentItem: any;
  constructor(private sneakerService: SneakerService) { }

  ngOnInit(): void {
    this.getAllSneakerList();

  }

  sneakers: Sneaker[] = [];
  allSneakers: Sneaker[] = [];
  sneakerName! : string;

  getAllSneakerList() {
    return this.sneakerService.getAll()
      .subscribe(objectOfSneakers => {
        for (const value of Object.values(objectOfSneakers)) {
          return this.allSneakers = value
        } 
        console.info(this.allSneakers)
        return objectOfSneakers
      
      });
  }

  public sendData(label: string){
     return this.sneakerName = label ;
  }


  onSearchSneaker(event: any) {
    this.currentItem = event.target.value
 }

}
