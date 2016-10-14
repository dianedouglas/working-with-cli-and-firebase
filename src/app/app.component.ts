import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  template: `
    {{title}}
  `
})
export class AppComponent {
  constructor(angularFire: AngularFire){
    
  }
  title = "Cameron's Music!";
}
