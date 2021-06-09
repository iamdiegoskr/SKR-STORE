import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/components/material/snackbar/snackbar.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  messageSendEmail: string = 'El correo electronico ha sido enviado';
  durationInSeconds: number = 1;
  emailField: FormControl;

  constructor(private _snackBar: MatSnackBar) {

    this.emailField = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ]);

    /*ESCUCHAR LOS CAMBIOS EN EL INPUT
    this.emailField.valueChanges.subscribe(change=>{
      console.log(change);
    })*/
  }

  ngOnInit(): void {}

  sendEmail() {
    console.log(this.emailField.value);

    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 2000,
      data: this.messageSendEmail,
    });
  }
}
