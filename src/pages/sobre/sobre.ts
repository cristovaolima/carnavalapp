import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarNoticiasPage } from '../cadastrar-noticias/cadastrar-noticias';
import { CadastrarHotelPage } from '../cadastrar-hotel/cadastrar-hotel';
import { CadastrarRestaurantesPage } from '../cadastrar-restaurantes/cadastrar-restaurantes';
import { CadastrarLojasPage } from '../cadastrar-lojas/cadastrar-lojas';
import { CadastrarEventosPage } from '../cadastrar-eventos/cadastrar-eventos';

/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  igA() {
    window.open("https://instagram.com/acarolsf",'_system', 'location=yes');
  }
  ttA() {
    window.open("https://twitter.com/acarolsf_",'_system', 'location=yes');
  }

  igB() {
    window.open("https://instagram.com/bismarkvictor",'_system', 'location=yes');
  }
  ttB() {
    window.open("https://twitter.com/bismarkvictor",'_system', 'location=yes');
  }

  hotel() {
    this.navCtrl.push(CadastrarHotelPage);
  }

  restaurante() {
    this.navCtrl.push(CadastrarRestaurantesPage);
  }

  loja() {
    this.navCtrl.push(CadastrarLojasPage);
  }

  noticia() {
    this.navCtrl.push(CadastrarNoticiasPage);
  }
  evento() {
    this.navCtrl.push(CadastrarEventosPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }


}
