import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoticiasProvider } from '../../providers/noticias/noticias';

//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the CadastrarNoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-noticias',
  templateUrl: 'cadastrar-noticias.html',
})
export class CadastrarNoticiasPage {

  titulo: string;
  imagem: File;
  corpo: string;
  data: string;
  autor: string;
  form: FormGroup;
  message_success: string;
  public noticia: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: NoticiasProvider,
    private toast: ToastController) {    // private transfer: FileTransfer, private file: File) {
      this.noticia = this.navParams.data.noticia || { };
      this.createForm();
  }
  // upload

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.noticia.key],
      titulo: [this.noticia.titulo, Validators.required],
      imagem: [this.noticia.imagem],
      data: Date.now,
      autor: [this.noticia.autor, Validators.required],
      corpo: [this.noticia.corpo, Validators.required]
    });
  }
  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      this.message_success = 'Notícia cadastrada com sucesso';
      this.provider.save(this.form.value)
        .then(() => {
          	this.toast.create({ message: this.message_success, duration: 3000 }).present();
          	this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao cadastrar notícia.', duration: 3000 }).present();
          console.error(e)
        })
  	 }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarNoticiasPage');
  }

}
