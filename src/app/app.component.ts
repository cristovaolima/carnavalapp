import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NoticiasPage } from '../pages/noticias/noticias';
import { SobrePage } from '../pages/sobre/sobre';
import { CidadePage } from '../pages/cidade/cidade';
import { TelefonesPage } from '../pages/telefones/telefones';
import { EventosPage } from '../pages/eventos/eventos';
import { HistoriaPage } from '../pages/historia/historia';
import { MapaPage } from '../pages/mapa/mapa';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Início', component: HomePage },
      { icon: 'refresh', title: 'Notícias', component: NoticiasPage },
      { icon: 'book', title: 'História', component: HistoriaPage },
      { icon: 'calendar', title: 'Eventos', component: EventosPage },
      { icon: 'call', title: 'Telefones', component: TelefonesPage },
      { icon: 'map', title: 'Mapas', component: MapaPage },
      { icon: 'pin', title: 'Cidade', component: CidadePage },
      { icon: 'information-circle', title: 'Sobre', component: SobrePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
