import {Component} from '@angular/core';

import '../style/app.scss';

import { PushNotificationComponent } from './components/notification.component';

/*
 * Library Demo
 */
@Component({
  selector: 'app',
  directives: [PushNotificationComponent],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})

export class AppComponent {
  title: string = 'ng2-notifications';
  description: string = 'Angular 2 Component for Native Push Notifications';

  constructor() {
  }
}
