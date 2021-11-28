import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-recapitulation',
  templateUrl: './recapitulation.component.html',
  styleUrls: ['./recapitulation.component.css']
})
export class RecapitulationComponent implements OnInit {

  @Input() nom: string="";
  @Input() prenom: string ="";
  @Input() adresse: string ="";
  @Input() cp: string ="";
  @Input() ville:string="";
  @Input() pays:string="";
  @Input() tel: string="";
  @Input() mel: string="";
  @Input() civilite: string="";
  @Input() username: string="";
  @Input() password: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
