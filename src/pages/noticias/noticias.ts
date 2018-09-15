import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  // noticias: Array<{ titulo: string, imagem: string, corpo: string, data: string, autor: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped(event, p) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push('DetalhesPage', {
      push_item: p
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

}
