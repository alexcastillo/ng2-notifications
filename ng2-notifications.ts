// for standard export at bottom
import { PushNotificationDirective } from './src/app/directives/notification.directive';

// for manual imports
export * from './src/app/directives/notification.directive';

// provides standard for consumption via things like angular-cli
export default {
  directives: [PushNotificationDirective]
}
