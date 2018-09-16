import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HoteisProvider } from '../../providers/hoteis/hoteis';

/**
 * Generated class for the CadastrarHotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-hotel',
  templateUrl: 'cadastrar-hotel.html',
})
export class CadastrarHotelPage {
  nome: string;
  endereco: string;
  telefone: string;
  celular: string;
  form: FormGroup;
  message_success: string;
  public hotel: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: HoteisProvider,
    private toast: ToastController) {
      this.hotel = this.navParams.data.hotel || { };
      this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.hotel.key],
      nome: [this.hotel.nome, Validators.required],
      endereco: [this.hotel.endereco, Validators.required],
      telefone: [this.hotel.telefone, Validators.required],
      celular: [this.hotel.celular]
    });
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.message_success = 'Cadastro de hotel realizado com sucesso';
      this.provider.save(this.form.value)
        .then(() => {
          	this.toast.create({ message: this.message_success, duration: 3000 }).present();
          	this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao cadastrar hotel.', duration: 3000 }).present();
          console.error(e)
        })
  	 }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarHotelPage');
  }

}
