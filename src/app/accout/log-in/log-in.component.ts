import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.createLogInForm();
  }

  createLogInForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.loginForm.get('email')?.errors);

    this.authService.login(this.loginForm.value).subscribe((e) => {
      console.log(e);
    });
  }
}
