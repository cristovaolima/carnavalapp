import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CallNumber } from '@ionic-native/call-number';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private callNumber: CallNumber) {
      this.item = [];
      this.item.push({
        lugar: 'Polícia',
        telefone: '190',
      });
      this.item.push({
        lugar: 'Bombeiros/SAMU',
        telefone: '84 3421-6093',
      });
      this.item.push({
        lugar: 'Prefeitura Municipal de Caicó',
        telefone: '84 3421-2280',
      });
      this.item.push({
        lugar: 'Hospital do Seridó',
        telefone: '84 3421-2018',
      });
      this.item.push({
        lugar: 'Hospital Regional do Seridó',
        telefone: '84 3421-9628',
      });
      this.item.push({
        lugar: 'Delegacia da Mulher',
        telefone: '84 3421-6040',
      });
      this.item.push({
        lugar: 'Hospital Tiago Dias',
        telefone: '84 3417-1252',
      });

    // for (let p = 1; p < 6; p++) {
    //   this.item.push({
    //   	lugar: 'Lugar ' + p,
    //     telefone: 'Telefone ' + p,
    //   });
    // }
  }


callEvent(phone: string) {
  this.callNumber.callNumber(phone, true)
  .then(res => console.log('Discando...', res))
  .catch(err => console.log('Erro ao discar', err));
}

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
