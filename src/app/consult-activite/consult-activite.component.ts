import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {
  param1= 0;
  constructor(private monActRouteur: ActivatedRoute, private monRouteur: Router, public activiteService: ActiviteService) { }

  ngOnInit(): void {
    this.param1 = parseInt(this.monActRouteur.snapshot.params['id']);
  }

  removeElt(id: number) {
    this.activiteService.objectifs.splice(id, 1);
    this.monRouteur.navigateByUrl("");
  }

  updateElt(elt: any, id: number) {
    this.activiteService.objectifs[id] = elt;
  }
}
