import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { of, timer, switchMap, map } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private auth: AuthServiceService) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl(
        '',
        [Validators.required, Validators.email],
        [this.validateEmailNotTaken()]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$'),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$'),
      ]),
    });
    //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  }
  onSubmit() {
    console.log();
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe((e) => {
        console.log(e);
      });
    } else {
      console.log();
    }
  }
  validateEmailNotTaken(): AsyncValidatorFn {
    return (control) => {
      return timer(500).pipe(
        switchMap(() => {
          if (control.value === '') {
            return of(null);
          }

          return this.auth.checkIfEmailUsed(control.value).pipe(
            map((res) => {
              return res ? { emailUsed: true } : null;
            })
          );
        })
      );
    };

    /* And what we need access to is we want to return the entire observable and return it to our control,
      which is the outer observable, and as a special operator, we can use to do this in our streets.
      And it's called the switch map operator.*/
  }
}
