import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, Events, Slides } from 'ionic-angular';


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
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];
  mySelectedIndex: number;
  hoteis: Array<{nome: string, telefone: string, endereco: string}>;
  restaurantes: Array<{nome: string, telefone: string, endereco: string}>;
  lojas: Array<{nome: string, telefone: string, endereco: string}>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private evts:Events) {
      this.hoteis = [];
      for (let p = 1; p < 6; p++) {
        this.hoteis.push({
          nome: 'Hotel ' + p,
          endereco: 'Endereço '+p,
          telefone: 'Telefone ' + p,
        });
      }

      this.restaurantes = [];
      for (let p = 1; p < 6; p++) {
        this.restaurantes.push({
          nome: 'Restaurante ' + p,
          endereco: 'Endereço '+p,
          telefone: 'Telefone ' + p,
        });
      }

      this.lojas = [];
      for (let p = 1; p < 6; p++) {
        this.lojas.push({
          nome: 'Loja ' + p,
          endereco: 'Endereço '+p,
          telefone: 'Telefone ' + p,
        });
      }

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

    this.tabs=["Hotéis","Restaurantes", "Lojas"];
  }

  itemTapped(event, p) {
    // That's right, we're pushing to ourselves!
  }

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}

    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CidadePage');
  }

}
