import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public resultado: String = ""

  constructor(private navegacao: NavController) {}

  ngOnInit() {}

  abrirCarregamento() {
    if (this.resultado && !(this.resultado.indexOf(' ') >= 0)) {
      this.navegacao.navigateForward('carregamento/' + this.resultado);
    }
    else {
      alert("o Input deve conter apenas uma palavra")
    }
  }
  abrirAjuda() {
    this.navegacao.navigateForward('ajuda');
  }
}
