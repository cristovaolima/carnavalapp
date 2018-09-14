import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Slides, ToastController } from 'ionic-angular';
import { HoteisProvider } from '../../providers/hoteis/hoteis';
import { RestaurantesProvider } from '../../providers/restaurantes/restaurantes';
import { LojasProvider } from '../../providers/lojas/lojas';
import { CadastrarHotelPage } from '../cadastrar-hotel/cadastrar-hotel';
import { CadastrarRestaurantesPage } from '../cadastrar-restaurantes/cadastrar-restaurantes';
import { CadastrarLojasPage } from '../cadastrar-lojas/cadastrar-lojas';
import firebase from 'firebase';
import { DetalhesPage } from '../detalhes/detalhes';


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
  hoteis: any;
  restaurantes: any;
  lojas: any;
  public hoteisList: Array<any>;
	public loadedHoteisList:Array<any>;
  public hoteisRef:firebase.database.Reference;
  public restaurantesList: Array<any>;
	public loadedRestaurantesList:Array<any>;
  public restaurantesRef:firebase.database.Reference;
  public lojasList: Array<any>;
	public loadedLojasList:Array<any>;
	public lojasRef:firebase.database.Reference;
  // hoteis: Array<{nome: string, telefone: string, endereco: string}>;
  // restaurantes: Array<{nome: string, telefone: string, endereco: string}>;
  // lojas: Array<{nome: string, telefone: string, endereco: string}>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private evts:Events, private providerH: HoteisProvider,
    private toast: ToastController, private providerR: RestaurantesProvider,
    private providerL: LojasProvider) {
      this.hoteis = this.providerH.getAll();
      this.restaurantes = this.providerR.getAll();
      this.lojas = this.providerL.getAll();

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

    this.hoteisRef = firebase.database().ref('/hoteis');
	  	this.hoteisRef.orderByChild("nome").on('value', hoteisList => {
			let hotel = [];
			hoteisList.forEach( hoteis => {
		    hotel.push(hoteis.val());
			return false;
      });

		  this.hoteisList = hotel;
		  this.loadedHoteisList = hotel;
    });

    this.restaurantesRef = firebase.database().ref('/restaurantes');
	  	this.restaurantesRef.orderByChild("nome").on('value', restaurantesList => {
			let restaurante = [];
			restaurantesList.forEach( restaurantes => {
		    restaurante.push(restaurantes.val());
			return false;
      });

		  this.restaurantesList = restaurante;
		  this.loadedRestaurantesList = restaurante;
    });

    this.lojasRef = firebase.database().ref('/lojas');
	  	this.lojasRef.orderByChild("nome").on('value', lojasList => {
			let loja = [];
			lojasList.forEach( lojas => {
		    loja.push(lojas.val());
			return false;
      });

		  this.lojasList = loja;
		  this.loadedLojasList = loja;
		});

    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.tabs=["Hotéis","Restaurantes", "Lojas"];
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


  removeRestaurante(key: string) {
    if(key) {
      this.providerR.remove(key)
        .then (() => {
          this.toast.create({ message: 'Restaurante removido com sucesso!', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover Restaurante!', duration: 3000}).present();
        });
    }
  }

  removeLoja(key: string) {
    if(key) {
      this.providerL.remove(key)
        .then (() => {
          this.toast.create({ message: 'Loja removida com sucesso!', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover Loja!', duration: 3000}).present();
        });
    }
  }

  removeHotel(key: string) {
    if(key) {
      this.providerH.remove(key)
        .then (() => {
          this.toast.create({ message: 'Hotel removido com sucesso!', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover Hotel!', duration: 3000}).present();
        });
    }
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

  itemTapped(event, p) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push('DetalhesPage', {
      push_item: p
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CidadePage');
  }

}
