import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LojasProvider } from '../../providers/lojas/lojas';

/**
 * Generated class for the CadastrarLojasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-lojas',
  templateUrl: 'cadastrar-lojas.html',
})
export class CadastrarLojasPage {
  nome: string;
  endereco: string;
  telefone: string;
  celular: string;
  form: FormGroup;
  message_success: string;
  public loja: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: LojasProvider,
    private toast: ToastController) {
      this.loja = this.navParams.data.loja || { };
      this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.loja.key],
      nome: [this.loja.nome, Validators.required],
      endereco: [this.loja.endereco, Validators.required],
      telefone: [this.loja.telefone, Validators.required],
      celular: [this.loja.celular]
    });
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.message_success = 'Cadastro da loja realizado com sucesso';
      this.provider.save(this.form.value)
        .then(() => {
          	this.toast.create({ message: this.message_success, duration: 3000 }).present();
          	this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao cadastrar loja.', duration: 3000 }).present();
          console.error(e)
        })
  	 }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarLojasPage');
  }

}
