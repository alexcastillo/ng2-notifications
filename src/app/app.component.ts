import {Component} from '@angular/core';

import '../style/app.scss';

import { SystemNotificationDirective } from './directives/notification.directive';

/*
 * Library Demo
 */
@Component({
  selector: 'app',
  directives: [SystemNotificationDirective],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})

export class AppComponent {
  title: string = 'ng2-notifications';
  description: string = 'Angular 2 Directive for Native System Notifications';

  constructor() {
  }
}
