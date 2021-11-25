import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  nom: string="";
  prenom: string ="";
  adresse: string ="";
  cp: string ="";
  ville:string="";
  pays:string="";
  tel: string="";
  mel: string="";
  civilite: string="";
  username: string="";
  password: string="";

  isValid:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    this.isValid = true;  
  }

}
