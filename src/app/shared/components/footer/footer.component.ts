import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/components/material/snackbar/snackbar.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  durationInSeconds:number=1;
  emailField: FormControl;

  constructor(private _snackBar: MatSnackBar) {
    this.emailField = new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]);

    this.emailField.valueChanges.subscribe(change=>{
      console.log(change);
    })
  }

  ngOnInit(): void {}


  sendEmail(){
    console.log("Email is send");
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 2000,
      data:'El email ha sido enviado'
    });
  }
}
