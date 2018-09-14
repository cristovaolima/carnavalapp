import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarHotelPage } from './cadastrar-hotel';

@NgModule({
  declarations: [
    CadastrarHotelPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarHotelPage),
  ],
})
export class CadastrarHotelPageModule {}
