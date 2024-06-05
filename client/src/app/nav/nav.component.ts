import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../Models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }


  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);

      }, error: error => {
        console.log(error);
      }
    });
  }

  logout() {
    this.accountService.logout();
  }
}
