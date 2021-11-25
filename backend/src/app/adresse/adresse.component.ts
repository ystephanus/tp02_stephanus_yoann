import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  @Input() nom : String = 'default'; 
  constructor() { }

  ngOnInit(): void {
  }

}
