import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  token?: string;
  type?: string;
  name?: string;

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.token = this.tokenService.getToken().token;
      this.name = this.tokenService.getToken().name;
      this.type = this.tokenService.getToken().type;
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

}
