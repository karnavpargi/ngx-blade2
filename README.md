# NgxBlade2

[![Travis](https://travis-ci.com/karnavpargi/ngx-bladex.svg?branch=master)](https://travis-ci.com/karnavpargi/ngx-bladex)
[![npm](https://img.shields.io/npm/v/ngx-bladex.svg)](https://www.npmjs.com/package/ngx-bladex)
[![npm](https://img.shields.io/npm/dt/ngx-bladex.svg)](https://www.npmjs.com/package/ngx-bladex)

A simplistic blade component for Angular with minimize/maximize and a close button.

## [Forked from ngx-blade](https://www.npmjs.com/package/ngx-blade)

## [Stackblitz Demo](https://stackblitz.com/edit/angular-ngx-blade)

## Compatibility

| ngx-bladex | Angular |
| ---------- | ------- |
| 18.0.0     | 18.x.x  |
| 17.1.0     | 17.x.x Standalone |
| 17.0.0     | 17.x.x  |
| 16.1.0     | 16.x.x Standalone |
| 16.0.0     | 16.x.x  |
| 15.0.0     | 15.x.x  |
| 14.0.0     | 14.x.x  |
| 13.0.0     | 13.x.x  |
| 12.0.0     | 12.x.x  |
| 11.0.0     | 11.x.x  |
| 10.0.0     | 10.x.x  |
| 9.0.0      | 9.x.x   |

## Installation

**Step 1**: Install NPM package

```bash

npm i ngx-bladex --save

```

**Step 2**: Import `NgxBladeModule` into in your module

##### Skip this if you are using standalone components

```typescript
import { NgxBladeModule } from 'ngx-blade';

@NgModule({
    //..
    imports:      [ NgxBladeModule, .. ]
})

```
**Step 2.1**: To use standalone component Import `NgxBladeComponent` into in your component
##### Skip this if you are using Module approach
```typescript

import { NgxBladeComponent } from 'ngx-blade';

@Component({
    //..
    imports:      [ NgxBladeComponent, .. ]
})

```

---

### `NgxBladeComponent`

#### Selector

```html
<ngx-blade></ngx-blade>
```

#### Inputs

- `width: number` - Width of the blade in percentage relative to the browser window.
- `config: BladeConfig` - Blade configuration properties. See [BladeConfig](#BladeConfig)

#### Outputs

- `onClose` - Emitted when close button is clicked. if `closeButton` is set as `false`, this event will never be emitted.

### `BladeConfig`

contains the following properties

```typescript
export interface BladeConfig {
  closeButton: boolean; // default: true
  maximizeButton: boolean; // default: true
  isModal: boolean; // default: false
}
```

- `closeButton: boolean` - specify whether blade should contain a close button.
- `maximizeButton: boolean` - specify whether blade should contain the minimize/maxime button.
- `isModal: boolean` - specify if the blade should behave similar a modal dialog.

If a config is not provided as input, the default values will be used.

### Directives

The following directives should be used within the `<ngx-blade>` element.

- `ngxBladeHeader` - Blade Header element
- `ngxBladeBody` - Blade body element
- `ngxBladeFooter` - Blade footer element

## Sample Usage

```html
<ngx-blade width="50" (onClose)="onBladeClose()" *ngIf="showBlade" #blade>
  <div ngxBladeHeader>Blade title</div>
  <div ngxBladeBody>
    <div class="custom">
      <h4>Lorem Ipsum</h4>
      <button type="button" (click)="blade.close()">Close blade</button>
    </div>
    <!-- Not only normal html entities, but components can also be used -->
    <my-component></my-component>
  </div>
  <div ngxBladeFooter>Blade Footer</div>
</ngx-blade>
```

---

## Theme customisation

Since v0.3.0, ngx-blade supports theme customisation using SCSS variables.
The following SCSS variables can be customised

```SCSS

// blade border
$ngxBladeBorderColor

// blade header
$ngxBladeHeaderBackground
$ngxBladeHeaderTextColor

// blade body
$ngxBladeBodyBackground
$ngxBladeBodyTextColor

// blade header action buttons (Minimize/Maximize, Close)
$ngxBladeActionButtonBackground
$ngxBladeCloseButtonHoverBackground

// blade footer
$ngxBladeFooterBackground
$ngxBladeFooterTextColor

```


## [Theme Customisation Demo](https://stackblitz.com/edit/angular-ngx-blade-theme-customization?file=src/styles.scss)
