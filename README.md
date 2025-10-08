# Angular Click Outside

Angular directive for handling click events outside an element. Useful for things like reacting to clicking
outside of a dropdown menu or modal dialog.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
  - [Options](#options)       


# Angular Click Outside Compatibility

| Angular Version | Compatible |
|-----------------|------------|
| 20.x.x          |  20.x.x    |
| 19.x.x          |  19.x.x    |
| 15.x.x          |  15.x.x    |
| 14.x.x          |  14.x.x    |


Like binding to a regular `click` event in a template, you can do something like this:

```HTML
<div (clickOutside)="onClickedOutside($event)">My element</div>
```


## Installation

```shell
npm install --save @solidexpert/ng-click-outside
```


## Usage

### Standalone Components (Angular 14+)

This directive is fully standalone and can be directly imported into your components:

```typescript
import { Component } from '@angular/core';
import { ClickOutsideDirective } from '@solidexpert/ng-click-outside';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClickOutsideDirective],  // Import the directive directly
  template: `
    <div (clickOutside)="onClickedOutside($event)">
      Click outside this element to trigger the event
    </div>
  `
})
export class AppComponent {
  onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
  }
}
```

### Module-based Applications (Legacy)

For older Angular applications using NgModules, you can import the directive in your module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideDirective } from '@solidexpert/ng-click-outside';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ClickOutsideDirective  // Import as standalone directive
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Options

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| `attachOutsideOnClick` | boolean | `false` | By default, the outside click event handler is automatically attached. Explicitely setting this to `true` sets the handler after the element is clicked. The outside click event handler will then be removed after a click outside has occurred. |
| `clickOutsideEnabled` | boolean | `true` | Enables directive. |
| `clickOutsideEvents` | string | `'click'` | A comma-separated list of events to cause the trigger. For example, for additional mobile support: `[clickOutsideEvents]="'click,touchstart'"`. |
| `delayClickOutsideInit` | boolean | `false` | Delays the initialization of the click outside handler. This may help for items that are conditionally shown ([see issue #13](https://github.com/arkon/ng-click-outside/issues/13)). |
| `emitOnBlur` | boolean | `false` | If enabled, emits an event when user clicks outside of applications' window while it's visible. Especially useful if page contains iframes. |
| `exclude` | string | | A comma-separated string of DOM element queries to exclude when clicking outside of the element. For example: `[exclude]="'button,.btn-primary'"`. |
| `excludeBeforeClick` | boolean | `false` | By default, `clickOutside` registers excluded DOM elements on init. This property refreshes the list before the `clickOutside` event is triggered. This is useful for ensuring that excluded elements added to the DOM after init are excluded (e.g. ng2-bootstrap popover: this allows for clicking inside the `.popover-content` area if specified in `exclude`). |
