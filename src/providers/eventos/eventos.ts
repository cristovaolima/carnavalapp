import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the EventosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventosProvider {

private PATH = 'eventos/';

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

  save(eventos: any) {
    return new Promise((resolve, reject) => {
      if (eventos.key) {
        this.db.list(this.PATH)
          .update(eventos.key, { titulo: eventos.titulo, imagem: eventos.imagem,
            corpo: eventos.corpo, data: eventos.data, autor: eventos.autor,
            local: eventos.local, horario: eventos.horario })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ titulo: eventos.titulo, imagem: eventos.imagem,
            corpo: eventos.corpo, data: eventos.data, autor: eventos.autor,
            local: eventos.local, horario: eventos.horario })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
