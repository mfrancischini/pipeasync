import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoguinService } from './loguin.service';
import { Imaestros } from '../common/interfaces';
@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.scss']
})
export class LoguinComponent implements OnInit {
  authUserChangeSubscription?: Subscription;
  userOberser: Imaestros | null | undefined = null;
  authUserSubscription?: Subscription;

  constructor(private authService: LoguinService, private router: Router) {}


  ngOnInit(): void {
    this.subscribeToAuthUserChange();
    this.authUserSubscription = this.authService.authUser$.subscribe({
      next: (user) => {
        this.userOberser = user;
      },
    });
  }
  subscribeToAuthUserChange(): void {
    this.authUserChangeSubscription = this.authService.authUser$.subscribe({
      next: (authUser) => {
        if (authUser != null) {
          this.router.navigate(['loguin']);
        }
      },
    });
  }

  login() {
    this.authService.login();
  }

}
