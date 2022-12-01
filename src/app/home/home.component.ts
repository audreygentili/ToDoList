import { Component, Input, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'; 
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations : [ trigger('animobjectifs' ,[
    transition ( '*=>*' ,[
      query(':enter', style({opacity: 0}), {optional: true}),
      query(':enter', stagger('300ms',[ animate ( '.5s ease-in' , keyframes ([
      style({opacity: 0, transform: 'translateY(-75%)', offset: 0, backgroundColor: '#E6E6FA'}), style({opacity: .5, transform: 'translateY(35px)', offset: .3, backgroundColor: '#DDA0DD'}),
      style({opacity: 1, transform: 'translateY(0)', offset: 1, backgroundColor: '#800080'}, ), ]))]),{optional: true})
    ]) ])]
})
export class HomeComponent implements OnInit {
  @Input() nbItems = 4;
  btnText = new String("Ajouter un élément");
  objectifText = new String("");

  constructor(private monRouteur: Router, public activiteService: ActiviteService) { 
  }

  ngOnInit(): void {
    this.nbItems = this.activiteService.objectifs.length;
  }

  ajoutItem() {
    this.activiteService.objectifs.push(this.objectifText);
    this.nbItems++;
  }

  effacerItem() {
    this.activiteService.objectifs = [];
    this.nbItems = 0;;
  }

  consultItem(id: number) {
    setTimeout(() => {this.monRouteur.navigateByUrl("consultAct/"+String(id))}, 500);
  }
}
