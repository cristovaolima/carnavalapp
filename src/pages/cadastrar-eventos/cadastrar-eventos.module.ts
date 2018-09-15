import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarEventosPage } from './cadastrar-eventos';

@NgModule({
  declarations: [
    CadastrarEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarEventosPage),
  ],
})
export class CadastrarEventosPageModule {}
