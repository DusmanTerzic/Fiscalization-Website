import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preduzece',
  templateUrl: './preduzece.component.html',
  styleUrls: ['./preduzece.component.css']
})
export class PreduzeceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  componentSelected: string="info";

  onComponentSelected(data: string){
    this.componentSelected = data;
  }
}
