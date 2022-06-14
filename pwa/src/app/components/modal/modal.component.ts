import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from '../../services/modal/modal.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-modal',
  template: `
    <ng-container *ngIf="display | async as display">
      <section [class.open]="display === 'open'" (click)="close()">
        <div (click)="$event.stopPropagation()">
          <button class="close" type="button" (click)="close()">X</button>
          <p class="font-medium text-orange-700 ">Suppression de compte</p>
          <p>Confirmation de suppression de votre compte</p>
          <div class="flex  justify-evenly items-center ">
            <button
              class="text-xs font-medium text-orange-600 hover:text-orange-400  underline underline-offset-4"
              (click)="deleteAccount()"
            >
              Supprimer
            </button>
            <button
              class=" text-xs font-medium text-orange-600 hover:text-orange-400  underline underline-offset-4 "
              type="button"
              (click)="close()"
            >
              Annuler
            </button>
          </div>
        </div>
      </section>
    </ng-container>
  `,
  styleUrls: ['./modal.component.css'],
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
  deleteAccount(){
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
