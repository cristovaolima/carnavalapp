import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }


}
