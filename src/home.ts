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
        padding: 2rem;
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
      <p>
        Welcome to my home page. My name is Ecmel Ercan. I am a software
        developer. You can find my open source software on
        <a href="https://github.com/ecmel">GtiHub</a>
      </p>
      <!-- 
      <sl-button
        href="itms-services://?action=download-manifest&url=https://ecmel.dev/defter/manifest.plist"
        >Defter iOS</sl-button
      >
      -->
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "home-view": HomeView;
  }
}
