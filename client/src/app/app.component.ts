import { Component, OnInit } from '@angular/core';
import { AccountService } from './Services/account.service';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Dating App';

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user: User = JSON.parse(userString);
      this.accountService.setCurrentUser(user);
    }
  }
}
