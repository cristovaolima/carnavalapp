import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventosProvider } from '../../providers/eventos/eventos';

/**
 * Generated class for the CadastrarEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-eventos',
  templateUrl: 'cadastrar-eventos.html',
})
export class CadastrarEventosPage {

  titulo: string;
  imagem: File;
  corpo: string;
  data: string;
  autor: string;
  local: string;
  horario: string;
  form: FormGroup;
  message_success: string;
  public evento: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: EventosProvider,
    private toast: ToastController) {
      this.evento = this.navParams.data.evento || { };
      this.createForm();
  }

  // upload

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.evento.key],
      titulo: [this.evento.titulo, Validators.required],
      imagem: [this.evento.imagem],
      corpo: [this.evento.corpo, Validators.required],
      data: [this.evento.data, Validators.required],
      horario: [this.evento.horario, Validators.required],
      autor: [this.evento.autor, Validators.required],
      local: [this.evento.local, Validators.required]


    });
  }
  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.message_success = 'Evento cadastrado com sucesso';
      this.provider.save(this.form.value)
        .then(() => {
          	this.toast.create({ message: this.message_success, duration: 3000 }).present();
          	this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao cadastrar evento.', duration: 3000 }).present();
          console.error(e)
        })
  	 }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarEventosPage');
  }

}
