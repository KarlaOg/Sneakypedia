import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-nav-user-dashboard',
  templateUrl: './nav-user-dashboard.component.html',
  styleUrls: ['./nav-user-dashboard.component.css']
})
export class NavUserDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
}
