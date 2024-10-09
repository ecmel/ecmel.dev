/*
 * Copyright (c) 1986-2024 Ecmel Ercan (https://ecmel.dev/)
 * All rights reserved.
 */

import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { PreventAndRedirectCommands, RouterLocation } from "@vaadin/router";

@customElement("home-view")
export class HomeView extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        margin: 1rem;
      }
    `,
  ];

  onBeforeEnter(
    location: RouterLocation,
    commands: PreventAndRedirectCommands
  ) {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");
    if (redirect && redirect.startsWith("/")) {
      return commands.redirect(redirect);
    }
  }

  protected render() {
    return html`
      <sl-button
        href="itms-services://?action=download-manifest&url=https://ecmel.dev/manifest.plist"
        >Defter iOS</sl-button
      >
      <sl-button
        href="https://github.com/ecmel/ecmel.dev/releases/download/0.0.1/app-universal-release.apk"
        >Android</sl-button
      >
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "home-view": HomeView;
  }
}
