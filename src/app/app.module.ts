import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
import { MapaPage } from '../pages/mapa/mapa';
import { RestaurantesProvider } from '../providers/restaurantes/restaurantes';
import { LojasProvider } from '../providers/lojas/lojas';
import { HoteisProvider } from '../providers/hoteis/hoteis';
import { CadastrarLojasPage } from '../pages/cadastrar-lojas/cadastrar-lojas';
import { CadastrarRestaurantesPage } from '../pages/cadastrar-restaurantes/cadastrar-restaurantes';
import { CadastrarHotelPage } from '../pages/cadastrar-hotel/cadastrar-hotel';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { DetalhesPageModule } from '../pages/detalhes/detalhes.module';
import { CallNumber } from '@ionic-native/call-number';
import { NoticiasProvider } from '../providers/noticias/noticias';
import { CadastrarNoticiasPage } from '../pages/cadastrar-noticias/cadastrar-noticias';
import { CadastrarEventosPage } from '../pages/cadastrar-eventos/cadastrar-eventos';
import { EventosProvider } from '../providers/eventos/eventos';

export const firebaseConfig = {

}

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
    CadastrarHotelPage,
    CadastrarLojasPage,
    CadastrarRestaurantesPage,
    CadastrarNoticiasPage,
    CadastrarEventosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBrYDHfyt1GMk2bOD1sR2vcuz9tCFKJts8",
      authDomain: "carnaval-1534535777439.firebaseapp.com",
      databaseURL: "https://carnaval-1534535777439.firebaseio.com",
      projectId: "carnaval-1534535777439",
      storageBucket: "carnaval-1534535777439.appspot.com",
      messagingSenderId: "421216346605"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DetalhesPageModule
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
    CadastrarHotelPage,
    CadastrarLojasPage,
    CadastrarRestaurantesPage,
    DetalhesPage,
    CadastrarNoticiasPage,
    CadastrarEventosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantesProvider,
    LojasProvider,
    HoteisProvider,
    CallNumber,
    NoticiasProvider,
    EventosProvider
  ]
})
export class AppModule {}
