import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  public nome: String;
  public path: String = ""
  constructor(private navegacao: NavController, private activatedRouted: ActivatedRoute) {

  }

  ngOnInit() {
    this.nome = this.activatedRouted.snapshot.paramMap.get('entrada')
    if (this.nome.includes('flor')) {
      this.path = "./assets/images/florDesenho.jpg"
    }
    else if (this.nome.includes('yoda')) {
      this.path = "./assets/images/babyoda.png"
    }
    else if (this.nome.includes('estrela')) {
      this.path = "./assets/images/estrelaDesenho.png"
    }
    else if (this.nome.includes('sorvete')) {
      this.path = "./assets/images/sorveteDesenho.png"
    }
    else {
      this.path = "./assets/images/else.png"
    }
  }
  abrirHome() {
    this.navegacao.navigateBack('home');
  }
}


