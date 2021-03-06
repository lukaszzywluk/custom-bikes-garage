import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from '../user'
// App imports
import { AuthService } from '../_services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = new User()
  error: any
  returnUrl: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Set the return url
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  onSubmit(loginForm): void {
    this.authService.onLogin(this.user).subscribe(
      response => {
        // get return url from route parameters or default to '/'
        this.router.navigate([this.returnUrl])
      },
      error => {
        this.error = error.error
      }
    )
    // Clear form fields
    loginForm.reset()
  }
}
