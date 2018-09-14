import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarLojasPage } from './cadastrar-lojas';

@NgModule({
  declarations: [
    CadastrarLojasPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarLojasPage),
  ],
})
export class CadastrarLojasPageModule {}
