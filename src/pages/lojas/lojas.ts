import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LojasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lojas',
  templateUrl: 'lojas.html',
})
export class LojasPage {
  lojas: Array<{nome: string, telefone: string, endereco: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lojas = [];
    for (let p = 1; p < 6; p++) {
      this.lojas.push({
        nome: 'Loja ' + p,
        endereco: 'Endereço '+p,
        telefone: 'Telefone ' + p,
      });
    }
  }

  itemTapped(event, p) {
    // That's right, we're pushing to ourselves!
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LojasPage');
  }

}
