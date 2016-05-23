import {
  Directive,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  Output
} from '@angular/core';

declare var Notification;

@Directive({
  selector: 'systemNotification'
})

export class SystemNotificationDirective implements OnInit, OnChanges, OnDestroy {

  @Input() public when: boolean;
  @Input() public title: string;
  @Input() public body: string;
  @Input() public icon: string;
  @Input() public sound: string;
  @Input() public data: any;
  @Input() public tag: string;
  @Input() public dir: string = 'auto';
  @Input() public lang: string = 'en-US';
  @Input() public renotify: boolean = false;
  @Input() public sticky: boolean = false;
  @Input() public vibrate: Array<number>;
  @Input() public silent: boolean = true;
  @Input() public closeDelay: number = 0;

  @Output() public onShow: EventEmitter<any> = new EventEmitter();
  @Output() public onClose: EventEmitter<any> = new EventEmitter();
  @Output() public onError: EventEmitter<any> = new EventEmitter();
  @Output() public onClick: EventEmitter<any> = new EventEmitter();

  public checkCompatibility () {
    return !!('Notification' in window);
  }

  public isPermissionGranted (permission) {
    return permission === 'granted';
  }

  public requestPermission () {
    return Notification.requestPermission();
  }

  public notify () {
    if (!this.checkCompatibility()) {
        return console.log('Notification API not available in this browser.');
    }

    return this.requestPermission()
      .then((permission) => this.isPermissionGranted(permission))
      .then(() => this.create());
  }

  public create () {
    let notification = new Notification(this.title, {
      dir: this.dir,
      lang: this.lang,
      data: this.data,
      tag: this.tag,
      body: this.body,
      icon: this.icon,
      silent: this.silent,
      sound: this.sound,
      renotify: this.renotify,
      sticky: this.sticky,
      vibrate: this.vibrate
    });

    this.attachEventHandlers(notification);
    this.close(notification);

    return notification;
  }

  public close (notification): void {
    if (this.closeDelay) {
      setTimeout(() => {
        notification.close();
      }, this.closeDelay);
    }
  }

  public closeAll (): void {
    Notification.close();
  }

  attachEventHandlers (notification): void {
    notification.onshow = () => {
      this.onShow.emit({ notification });
    };

    notification.onclick = (event) => {
      this.onClick.emit({ event, notification });
    };

    notification.onerror = () => {
      this.onError.emit({ notification });
    };

    notification.onclose = () => {
      this.onClose.emit({ notification });
    };
  }

  public ngOnInit (): void {
    if (this.when === undefined) {
      this.notify();
    }
  }

  public ngOnDestroy (): void {
    this.closeAll();
  }

  public ngOnChanges(): void {
    if (this.when) {
      this.notify();
    }
  }

}
