import {
  it,
  describe,
  expect,
  async,
  inject,
  beforeEach,
  beforeEachProviders
} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';

import {AppComponent} from './app.component';

describe('App', () => {
  let fixture;

  //setup
  beforeEachProviders(() => [
    TestComponentBuilder
  ]);

  beforeEach(async(inject([TestComponentBuilder], tcb => {
    tcb
      .createAsync(TestComponent)
      .then(f => fixture = f);
  })));
});

@Component({
  selector: 'test',
  directives: [AppComponent],
  template: `
  <app></app>
  `
})
class TestComponent { }
