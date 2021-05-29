import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Color } from 'src/app/interfaces/colors';

@Component({
  selector: 'app-select-option-color',
  templateUrl: './select-option-color.component.html'
})
export class SelectOptionColorComponent implements OnInit {

  colors: Color[] = [
    {value: 'black', viewValue: 'Negro'},
    {value: 'blue', viewValue: 'Azul'},
    {value: 'red', viewValue: 'Rojo'},
    {value: 'white',viewValue:'Blanco'}
  ];

  selectedColor:string;

  @Output() newValueSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(data:string){
    this.newValueSelect.emit(this.selectedColor);
  }

}
