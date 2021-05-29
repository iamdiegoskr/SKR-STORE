import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  power:number=0;
  expo:number=2;

  constructor() { }

  ngOnInit(): void {
  }

}
