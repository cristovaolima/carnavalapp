import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { NoticiasPage } from '../noticias/noticias';
import { CidadePage } from '../cidade/cidade';
import { EventosPage } from '../eventos/eventos';
import { HistoriaPage } from '../historia/historia';
import { SobrePage } from '../sobre/sobre';
import { TelefonesPage } from '../telefones/telefones';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {

  }

  noticias() {
    this.navCtrl.push(NoticiasPage);
  }
  cidade() {
    this.navCtrl.push(CidadePage);
  }
  eventos() {
    this.navCtrl.push(EventosPage);
  }
  historia() {
    this.navCtrl.push(HistoriaPage);
  }
  sobre() {
    this.navCtrl.push(SobrePage);
  }
  telefone() {
    this.navCtrl.push(TelefonesPage);
  }

  fb() {
    window.open("https://facebook.com/carnavaldecaicooficial",'_system', 'location=yes');
  }
  ig() {
    window.open("https://instagram.com/carnavaldecaicooficial",'_system', 'location=yes');
  }
  tt() {
    window.open("https://twitter.com/caicocarnaval",'_system', 'location=yes');
  }
}
