import {Component} from '@angular/core';

import '../style/app.scss';

import { PushNotificationDirective } from './directives/notification.directive';

/*
 * Library Demo
 */
@Component({
  selector: 'app',
  directives: [PushNotificationDirective],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})

export class AppComponent {
  title: string = 'ng2-notifications';
  description: string = 'Angular 2 Directive for Native Push Notifications';

  constructor() {
  }
}
