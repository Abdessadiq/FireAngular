import { Component } from '@angular/core';

import { AngularFirestore, DocumentSnapshot } from '@angular/fire/compat/firestore';

import { Observable} from 'rxjs';

import { map, first } from 'rxjs';

interface Item {
  text: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']

})

export class Tab1Page {
  itemDoc: Observable<DocumentSnapshot<Item>>;
  items: Observable<Item[]>;
  constructor(private firestore: AngularFirestore) {
    this.itemDoc = this.firestore.doc<Item>('collectionName/documentId').snapshotChanges()
      .pipe(map(snapshot => snapshot.payload),first()
      );

    this.items = this.itemDoc.pipe(map(snapshot => [snapshot.data() as Item]));
  }

}
