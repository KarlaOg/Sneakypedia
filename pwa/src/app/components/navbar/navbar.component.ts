import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { NavBarService } from 'src/app/services/nav-bar-service/navbar.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  display: Observable<'open' | 'close'> = new Observable<'close'>();


  constructor(public user: UserService, private navBarService: NavBarService) {
  }

  ngOnInit(): void {
    this.display = this.navBarService.watch();

  }
  logout() {
    this.user.logout();
  }

  close() {
    this.navBarService.close();
  }


  openClose() {
    this.navBarService.openClose();
  }
}

