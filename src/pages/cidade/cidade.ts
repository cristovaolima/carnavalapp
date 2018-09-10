import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, Events } from 'ionic-angular';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { HoteisPage } from '../hoteis/hoteis';
import { LojasPage } from '../lojas/lojas';


/**
 * Generated class for the CidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cidade',
  templateUrl: 'cidade.html',
})
export class CidadePage {
  @ViewChild('myTabs') tabs: Tabs;

  hoteis: any = HoteisPage;
  restaurantes: any = RestaurantesPage;
  lojas: any = LojasPage;
  mySelectedIndex: number;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private evts:Events) {

      this.evts.subscribe('tabs:changetab',(data)=>{

        try{
          this.tabs.select(data.tabIndex);
        }
        catch(ex){
          //HACK: this sucks a lot. For some reason on first load of the app,
          //the views are not loaded into the ViewControllerBase. It's a bug in ionic.
          //This causes tabs.select to fail.
          //as a recourse, I am calling the click method on the actual tab element
          //this is totally brittle and likely to break in a subsequent release of ionic.
          //sorry.
          let tabid = 'tab-t1-'+data.tabIndex;
          document.getElementById(tabid).click();
        }
      this.mySelectedIndex = data.tabIndex;
    });
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CidadePage');
  }

}
