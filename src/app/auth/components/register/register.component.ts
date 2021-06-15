import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  hideR: boolean = true;
  formRegister: FormGroup;
  // patternPass: string = '(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';

  constructor(
    private fb: FormBuilder,
    private serviceAuth: AuthService,
    private router: Router
  ) {
    this.formRegister = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        passwordRepeat: ['', [Validators.required]],
      },
      { validator: this.checkPasswords('password', 'passwordRepeat') }
    );
  }

  ngOnInit(): void {}

  get f() {
    return this.formRegister.controls;
  }

  get getEmailForm() {
    return this.formRegister.get('email');
  }

  get getPasswordForm() {
    return this.formRegister.get('password');
  }

  get getPasswordConfirm() {
    return this.formRegister.get('passwordRepeat');
  }

  getErrorMessageEmail() {
    if (this.getEmailForm.hasError('required')) {
      return 'Debes ingresar un correo';
    }

    return this.getEmailForm.hasError('email') ? 'El correo no es valido' : '';
  }

  getErrorMessagePassword() {
    if (this.getPasswordForm.hasError('required')) {
      return 'Debe digitar una contraseña';
    }

    return this.getPasswordForm.hasError ? 'Contraseña no valida' : '';
  }

  getErrorMessagePasswordConfirm() {
    if (this.getPasswordConfirm.hasError('required')) {
      return 'Complete el campo';
    }

    return this.getPasswordConfirm.hasError('mustMatch')
      ? 'Las contraseñas no coinciden'
      : '';
  }

  checkPasswords(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  registerAccount(e: Event) {
    e.preventDefault();
    if (this.formRegister.valid) {
      const valuesForm = this.formRegister.value;
      this.serviceAuth.createUser(valuesForm.email, valuesForm.password)
      .then(()=>{
        this.router.navigate(['/auth'])
      })
    }
  }
}
