import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NoticiasPage } from '../pages/noticias/noticias';
import { HistoriaPage } from '../pages/historia/historia';
import { CidadePage } from '../pages/cidade/cidade';
import { EventosPage } from '../pages/eventos/eventos';
import { SobrePage } from '../pages/sobre/sobre';
import { TelefonesPage } from '../pages/telefones/telefones';
import { ListPage } from '../pages/list/list';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { HoteisPage } from '../pages/hoteis/hoteis';
import { MapaPage } from '../pages/mapa/mapa';
import { LojasPage } from '../pages/lojas/lojas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NoticiasPage,
    HistoriaPage,
    CidadePage,
    EventosPage,
    SobrePage,
    TelefonesPage,
    MapaPage,
    HoteisPage,
    RestaurantesPage,
    LojasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NoticiasPage,
    HistoriaPage,
    CidadePage,
    EventosPage,
    SobrePage,
    TelefonesPage,
    MapaPage,
    HoteisPage,
    RestaurantesPage,
    LojasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
