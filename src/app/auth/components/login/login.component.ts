import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide=true;
  formLogin: FormGroup;

  constructor(private fb: FormBuilder,
              private serviceAuth:AuthService,
              private router:Router) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get emailForm() {
    return this.formLogin.get('email');
  }

  get passForm(){
    return this.formLogin.get('password');
  }

  ngOnInit(): void {}

  login(e:Event){
    e.preventDefault()
    if(this.formLogin.valid){
      const values = this.formLogin.value;
      this.serviceAuth.login(values.email,values.password)
        .then(()=>{
          this.router.navigate(['../admin'])
        })
        .catch(()=>{
          this.showDialogError()
        })
    }
  }

  getEmailMessage() {
    if (this.emailForm.hasError('required')) {
      return 'Debe proporcionar un email';
    }
    return this.emailForm.hasError('email') ? 'Correo no valido' : '';
  }

  getPasswordMessage(){
    if(this.passForm.hasError('required')){
      return 'Debe proporcionar una contraseña'
    }
    return this.passForm.hasError('minlength') ? 'La contraseña no es valida':''
  }

  showDialogError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Contraseña o correo invalido',
    })
  }

}
