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
| 14.x.x          |  14.x.x    |
| 15.x.x          |  15.x.x    |
| 19.x.x          |  19.x.x    |


Like binding to a regular `click` event in a template, you can do something like this:

```HTML
<div (clickOutside)="onClickedOutside($event)">My element</div>
```


## Installation

```shell
npm install --save @solidexpert/ng-click-outside
```


## Usage

You can then use the directive in your templates:

```typescript
@Component({
  selector: 'app',
  imports: [ClickOutsideDirective],  // Import the directive directly
  template: `
    <div (clickOutside)="onClickedOutside($event)">Click outside this</div>
  `
})
export class AppComponent {
  onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
  }
}
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
