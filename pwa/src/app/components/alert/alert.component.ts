import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-notification',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertNotificationComponent implements OnInit {

  @Input() message: string| undefined = '';
  @Output() close = new EventEmitter();
  constructor() { }


  ngOnInit(): void {

  }
  onClose() {
    this.close.emit();
  }

 




}
