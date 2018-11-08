import { Component } from '@angular/core';
import { client } from '@xmpp/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-import-xmpp';


  constructor() {
    client({});
  }

}
