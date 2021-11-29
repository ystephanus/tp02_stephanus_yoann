import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saisie-client',
  templateUrl: './saisie-client.component.html',
  styleUrls: ['./saisie-client.component.css']
})
export class SaisieClientComponent implements OnInit {
  name : string = 'toto';
  valid : boolean = false;
  listName : Array<String> = ['toto', 'tutu', 'tata', 'mathieu']
  constructor() { }

  ngOnInit(): void {
  }

  isValid(): boolean{
    return this.valid;
  }

  onClick(): void{
    console.log("Idiot !")
  }
}
