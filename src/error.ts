/*
 * Copyright (c) 1986-2024 Ecmel Ercan (https://ecmel.dev/)
 * All rights reserved.
 */

import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("error-view")
export class ErrorView extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        margin: 1rem;
      }
    `,
  ];

  protected render() {
    return html`<p>Not found!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "error-view": ErrorView;
  }
}
