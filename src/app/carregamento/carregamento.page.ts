import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carregamento',
  templateUrl: './carregamento.page.html',
  styleUrls: ['./carregamento.page.scss'],
})
export class CarregamentoPage implements OnInit {
  public nome: String
  constructor(private navegacao: NavController, private activatedRouted: ActivatedRoute) {

  }

  ngOnInit() {
    this.nome = this.activatedRouted.snapshot.paramMap.get('entrada')
  }

  contagem() {
    var intervalo = window.setInterval(() => {
      console.log('teste')
    }, 1000);

    window.setTimeout(() => {
      clearInterval(intervalo);
      this.navegacao.navigateForward('resultado/'+ this.nome);
    }, 5000);
    console.log('aloo')
  }
}
