import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelefonesPage } from './telefones';

@NgModule({
  declarations: [
    TelefonesPage,
  ],
  imports: [
    IonicPageModule.forChild(TelefonesPage),
  ],
})
export class TelefonesPageModule {}
