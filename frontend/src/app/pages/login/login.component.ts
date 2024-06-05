import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    credentials: any = { email: '', password: ''};

    constructor(
        private authService: AuthService,
        private router: Router
    ) { 
    }

    login() {
		console.log(this.credentials);
        this.authService.login(this.credentials).subscribe(
            () => {
                this.router.navigate(['admin/dashboard']);
            },
            error => {
                alert("Invalid Credentials");
            }
        );
    }
}
