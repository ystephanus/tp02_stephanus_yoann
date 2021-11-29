import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  profileForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    cp: new FormControl(''),
    ville:new FormControl(''),
    pays:new FormControl(''),
    tel: new FormControl(''),
    mel: new FormControl(''),
    civilite: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });


  isValid:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.profileForm.valid)    
      this.isValid = true;  
  }

}
