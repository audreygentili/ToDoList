import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nbItems = 4;
  btnText = new String("Ajouter un élément");
  objectifText = new String("");
  objectifs = new Array();

  constructor(private route: ActivatedRoute) { 
    //this.monParam = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.nbItems = this.objectifs.length;
  }

  ajoutItem(elt: String) {
    this.objectifs.push(elt);
    console.log(this.objectifs);
    this.nbItems++;
  }

}
