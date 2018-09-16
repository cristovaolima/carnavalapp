import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the NoticiasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoticiasProvider {
  private PATH = 'noticias/';

  constructor(private db: AngularFireDatabase) {
  }

  getAll(){
    return this.db.list(this.PATH, ref => ref.orderByChild('nome'))
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
}

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  save(noticias: any) {
    return new Promise((resolve, reject) => {
      if (noticias.key) {
        this.db.list(this.PATH)
          .update(noticias.key, { titulo: noticias.titulo, imagem: noticias.imagem,
            corpo: noticias.corpo, data: noticias.data, autor: noticias.autor })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ titulo: noticias.titulo, imagem: noticias.imagem,
            corpo: noticias.corpo, data: noticias.data, autor: noticias.autor })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
