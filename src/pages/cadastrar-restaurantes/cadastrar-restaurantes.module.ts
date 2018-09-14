import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarRestaurantesPage } from './cadastrar-restaurantes';

@NgModule({
  declarations: [
    CadastrarRestaurantesPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarRestaurantesPage),
  ],
})
export class CadastrarRestaurantesPageModule {}
