import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = 'mail@marius-junak.de';
  password = 'meinpw12345!';
  linkSuccess = false;

  constructor(
    private auth: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {

  }

  ngOnInit(): void { }

  async signIn() {
    this.spinner.show();
    const { data: { user }, error } = await this.auth.signInWithEmail(this.email, this.password);

    if (user) {
      this.router.navigateByUrl('/workspace', { replaceUrl: true });
    }

    this.spinner.hide();

    if (!error) {
      this.linkSuccess = true;
    } else {
      alert(error.message);
    }
  }
}
