import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantesProvider } from '../../providers/restaurantes/restaurantes';

/**
 * Generated class for the CadastrarRestaurantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-restaurantes',
  templateUrl: 'cadastrar-restaurantes.html',
})
export class CadastrarRestaurantesPage {
  nome: string;
  endereco: string;
  telefone: string;
  form: FormGroup;
  message_success: string;
  public restaurante: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: RestaurantesProvider,
    private toast: ToastController) {
      this.restaurante = this.navParams.data.restaurante || { };
      this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.restaurante.key],
      nome: [this.restaurante.nome, Validators.required],
      endereco: [this.restaurante.endereco, Validators.required],
      telefone: [this.restaurante.telefone, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.message_success = 'Cadastro do restaurante realizado com sucesso';
      this.provider.save(this.form.value)
        .then(() => {
          	this.toast.create({ message: this.message_success, duration: 3000 }).present();
          	this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao cadastrar restaurante.', duration: 3000 }).present();
          console.error(e)
        })
  	 }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarRestaurantesPage');
  }

}
