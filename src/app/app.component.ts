import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <div class="album" *ngFor="let album of models | async">
      <p>{{album.title}}</p>
      <p>By {{album.artist}}</p>
      <img class="thumb" src="{{album.image}}">
    </div>
  `
})
export class AppComponent {
  models: FirebaseListObservable<any[]>;
  constructor(angularFire: AngularFire){
    this.models = angularFire.database.list('albums');
  }
  title = "Cameron's Music!";
}
