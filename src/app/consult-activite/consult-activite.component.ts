import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {

  constructor(private monActRouteur: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.monActRouteur.snapshot.params[0]);
  }

}
