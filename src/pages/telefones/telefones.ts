import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the TelefonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-telefones',
  templateUrl: 'telefones.html',
})
export class TelefonesPage {
  item: Array<{ lugar: string, telefone: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item = [];
    for (let p = 1; p < 6; p++) {
      this.item.push({
      	lugar: 'Lugar ' + p,
        telefone: 'Telefone ' + p,
      });
    }
  }

  // callEvent(phone: string) {
  //   this.callNumber.callNumber(phone, true)
  //   .then(res => console.log('Launched dialer!', res))
  //   .catch(err => console.log('Error launching dialer', err));

  // }

  itemTapped(event, p) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(HomePage, {
      push_item: p
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TelefonesPage');
  }

}
