import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the HoteisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hoteis',
  templateUrl: 'hoteis.html',
})
export class HoteisPage {
  hoteis: Array<{nome: string, telefone: string, endereco: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hoteis = [];
    for (let p = 1; p < 6; p++) {
      this.hoteis.push({
        nome: 'Hotel ' + p,
        endereco: 'Endereço '+p,
        telefone: 'Telefone ' + p,
      });
    }
  }

  itemTapped(event, p) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(HomePage, {
      push_item: p
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoteisPage');
  }

}
