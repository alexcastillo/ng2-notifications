// for standard export at bottom
import { PushNotificationComponent } from './src/app/components/notification.component';

// for manual imports
export * from './src/app/components/notification.component';

// provides standard for consumption via things like angular-cli
export default {
  directives: [PushNotificationComponent]
}
