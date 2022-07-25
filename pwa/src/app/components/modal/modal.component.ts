import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from '../../services/modal/modal.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})

export class ModalComponent implements OnInit {
  display!: Observable<'open' | 'close'>;
  error: string = "";
  constructor(private modalService: ModalService, private router: Router,private user : UserService) {}

  ngOnInit() {
    this.display = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }
  deleteAccount() {
    this.user.deleteUserAccount()
      .subscribe({
        next: () => {
          this.modalService.close();
          this.router.navigateByUrl("/");
        },
        error: (e) => this.error = e.error.message,
      })
  }
}
