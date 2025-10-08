import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../src/click-outside.directive';

@Component({
  selector: 'demo',
  standalone: true,
  imports: [ClickOutsideDirective],
  template: `
    <div
      (click)="onClick($event)"
      (clickOutside)="onClickedOutside($event)"
      [attachOutsideOnClick]="attachOutsideOnClick"
      [clickOutsideEnabled]="enabled"
      [emitOnBlur]="true">
      <p>Clicked inside: {{countInside}}</p>
      <p>Clicked outside: {{countOutside}}</p>

      <label>
        <input type="checkbox" [checked]="attachOutsideOnClick" (click)="_toggleAttachOutsideOnClick()" />
        <span>Attach on click</span>
      </label>

      <label>
        <input type="checkbox" [checked]="enabled" (click)="_toggleEnabled()" />
        <span>Enabled</span>
      </label>
    </div>
  `
})
export class DemoComponent {
  countInside: number = 0;
  countOutside: number = 0;

  attachOutsideOnClick = false;
  enabled = true;

  _toggleAttachOutsideOnClick() {
    this.attachOutsideOnClick = !this.attachOutsideOnClick;
  }

  _toggleEnabled() {
    this.enabled = !this.enabled;
  }

  onClick(e: Event) {
    console.info('Clicked inside:', e);
    this.countInside++;
  }

  onClickedOutside(e: Event) {
    console.info('Clicked outside:', e);
    this.countOutside++;
  }
}
