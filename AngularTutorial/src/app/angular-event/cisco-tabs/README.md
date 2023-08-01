# msx-tabs

This module contains two directives, `msx-tabs` and `msx-tab`, which are
intended to be used together to create a tab list. The tab list is able to be horizontally carouseled.

## Example

```html
<msx-tabs selected="tab2">
  <msx-tab value="tab1">
    Tab 1
  </msx-tab>
  <msx-tab value="tab2">
    Tab 2
  </msx-tab>
  <msx-tab value="tab3">
    Tab 3
  </msx-tab>
</msx-tabs>
```

## Example with `ngFor`

```html
<msx-tabs selected="selectedItem"
          direction="vertical">
  <msx-tab *ngFor="let item of tabbedItems"
           value="item.value">
    {{item.label}}
  </msx-tab>
</msx-tabs>
```

## `msx-tabs` Parameters

### selected

The value bound in the currently selected tab's `value` parameter.

### direction

Either `'horizontal'` or `'vertical'`. Defaults to `'horizontal'`.

Primarily used to control the default styling of the tabs, i.e. which side
(right or bottom) the border separating tabs stacked next to each other will
appear on, and which side (top or left) the blue border for the selected tab
will appear on.

## `msx-tab` Parameters

### value

The value that will be bound in `msx-tabs`'s `selected` parameter when the tab is
selected.

## test code

 see tabs-test.component.ts
 