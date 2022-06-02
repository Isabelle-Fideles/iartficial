import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-boasvindas',
  templateUrl: './boasvindas.page.html',
  styleUrls: ['./boasvindas.page.scss'],
})
export class BoasvindasPage implements OnInit {



  constructor(private navegacao: NavController) { }

  ngOnInit() {
  }
  abrirHome() {
    this.navegacao.navigateForward('home');
  }
}
