/**
@license
Copyright 2017 Mulesoft.

All rights reserved.
*/
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {IronCheckedElementBehavior} from '@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js';
import {IronButtonState} from '@polymer/iron-behaviors/iron-button-state.js';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';
import {AnypointHoverableMixin} from '@anypoint-components/anypoint-behaviors/anypoint-hoverable-mixin.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import '@advanced-rest-client/anypoint-styles/typography.js';
import '@advanced-rest-client/anypoint-styles/colors.js';
/**
 * ** Anypoint version of the component **
 *
 * This element is to be private and used as a replacemenet to any PolymerElements
 *
 * `<paper-checkbox>` is a button that can be either checked or unchecked.
 * User can tap the checkbox to check or uncheck it.  Usually you use checkboxes
 * to allow user to select multiple options from a set.
 * Avoid using a single checkbox as an option selector and use toggle button intead.
 *
 * ### Example
 *
 * ```html
 * <paper-checkbox>label</paper-checkbox>
 * <paper-checkbox checked>label</paper-checkbox>
 * ```
 *
 * ### Styling
 *
 * `<anypoint-checkbox>` provides the following custom properties and mixins for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--paper-checkbox` | Mixin applied to the element | `{}`
 * `--paper-checkbox-input-border-bolor` | Border color of the checkbox input square | `--anypoint-color-aluminum4`
 * `--paper-checkbox-label-color` | A color of the label. | ` --anypoint-color-steel1`
 * `--paper-checkbox-label` | Mixin applied to the label | ``
 * `--paper-checkbox-label-checked-color` | Color of checked label | `--anypoint-checkbox-label-color` or `--anypoint-color-steel1`
 * `--paper-checkbox-label-checked` | Mixin applie dto checked label | ``
 * `--paper-checkbox-unchecked-color` | Color of a label of unchecked checkbox | `--anypoint-checkbox-label-color` or `--anypoint-color-steel1`
 * `--paper-checkbox-error-color` | Color of error state | `--anypoint-color-danger`
 * `--paper-checkbox-label-spacing` | Spacing between the label and the checkbox | `0`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @appliesMixin AnypointHoverableMixin
 * @polymerBehavior IronButtonState
 * @polymerBehavior IronControlState
 * @polymerBehavior IronCheckedElementBehavior
 * @memberof AnypointElements
 */
export class PaperCheckbox extends mixinBehaviors([
  IronButtonState,
  IronControlState,
  IronCheckedElementBehavior
], AnypointHoverableMixin(PolymerElement)) {
  static get template() {
    return html`<style>
     :host {
      display: inline-block;
      white-space: nowrap;
      cursor: pointer;
      @apply --anypoint-font-common-base;
      line-height: 0;
      -webkit-tap-highlight-color: transparent;
      @apply --paper-checkbox;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host(:focus) {
      outline: none;
    }

    .hidden {
      display: none;
    }

    .checkboxContainer {
      display: inline-block;
      position: relative;
      margin-right: 10px;
      vertical-align: middle;
    }

    .checkbox {
      position: relative;
      box-sizing: border-box;
      pointer-events: none;
      border: 1px var(--paper-checkbox-input-border-bolor, var(--anypoint-color-aluminum4)) solid;
      -webkit-transition: box-shadow .3s linear;
      transition: box-shadow .3s linear;
      display: inline-block;
      vertical-align: text-top;
      width: 20px;
      height: 20px;
    }

    .checkmark {
      -webkit-transition: box-shadow .3s linear;
      transition: box-shadow .3s linear;
      box-sizing: content-box;
      box-sizing: initial;
      position: absolute;
      left: 4px;
      top: calc(50% - 2px);
      width: 3px;
      height: 2px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .checkboxLabel {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      white-space: normal;
      line-height: normal;
      padding-left: var(--paper-checkbox-label-spacing, 0);
      color: var(--paper-checkbox-label-color, var(--anypoint-color-steel1));
      @apply --paper-checkbox-label;
    }

    :host-context([dir="rtl"]) .checkboxLabel {
      padding-right: var(--paper-checkbox-label-spacing, 8px);
      padding-left: 0;
    }

    :host([checked]) .checkbox {
      background: var(--anypoint-color-primary);
      border: 1px var(--anypoint-color-primary) solid;
    }

    :host([checked]) .checkmark {
      background: var(--anypoint-color-tertiary);
      box-shadow: 2px 0 0 var(--anypoint-color-tertiary),
        4px 0 0 var(--anypoint-color-tertiary),
        4px -2px 0 var(--anypoint-color-tertiary),
        4px -4px 0 var(--anypoint-color-tertiary),
        4px -6px 0 var(--anypoint-color-tertiary);
    }

    :host([checked]) .checkboxLabel {
      color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--anypoint-color-steel1)));
      @apply --paper-checkbox-label-checked;
    }

    .checkboxLabel[hidden] {
      display: none;
    }

    :host([disabled]) .checkbox {
      opacity: 0.5;
      border-color: var(--paper-checkbox-unchecked-color,
        var(--paper-checkbox-label-color, var(--anypoint-color-steel1)));
    }

    :host([disabled][checked]) .checkbox {
      background-color: var(--paper-checkbox-unchecked-color,
        var(--paper-checkbox-label-color, var(--anypoint-color-steel1)));
      opacity: 0.5;
    }

    :host([disabled]) .checkboxLabel {
      opacity: 0.65;
    }

    /* invalid state */
    .checkbox.invalid:not(.checked) {
      border-color: var(--paper-checkbox-error-color, var(--anypoint-color-danger));
    }

    /* Hovered */
    :host([hovered]) .checkbox {
      box-shadow: 0 0 0 0.25em rgba(0,0,0,.12);
    }

    :host(:not([checked])[hovered]) .checkmark {
      background: var(--anypoint-color-aluminum5);
      box-shadow: 2px 0 0 var(--anypoint-color-aluminum5),
        4px 0 0 var(--anypoint-color-aluminum5),
        4px -2px 0 var(--anypoint-color-aluminum5),
        4px -4px 0 var(--anypoint-color-aluminum5),
        4px -6px 0 var(--anypoint-color-aluminum5);
      display: block;
    }
    </style>
    <div class="checkboxContainer">
      <div class\$="checkbox [[_computeCheckboxClass(checked, invalid)]]">
        <div class\$="checkmark [[_computeCheckmarkClass(checked)]]"></div>
      </div>
    </div>
    <div class="checkboxLabel"><slot></slot></div>`;
  }

  static get is() {
    return 'paper-checkbox';
  }

  static get properties() {
    return {
      ariaActiveAttribute: {
        type: String,
        value: 'aria-checked'
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'checkbox');
    }
    if (!this.hasAttribute('aria-checked')) {
      this.setAttribute('aria-checked', 'false');
    }
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }
  }

  _computeCheckboxClass(checked, invalid) {
    let className = '';
    if (checked) {
      className += 'checked ';
    }
    if (invalid) {
      className += 'invalid';
    }
    return className;
  }

  _computeCheckmarkClass(checked) {
    return checked ? '' : 'hidden';
  }

  /**
   * Synchronizes the element's `active` and `checked` state.
   */
  _buttonStateChanged() {
    if (this.disabled) {
      return;
    }
    if (this.isAttached) {
      this.checked = this.active;
    }
  }
  /**
   * Fired when the checked state changes due to user interaction.
   *
   * @event change
   */
  /**
   * Fired when the checked state changes.
   *
   * @event iron-change
   */
}
window.customElements.define(PaperCheckbox.is, PaperCheckbox);
