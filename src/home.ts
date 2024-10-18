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
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
      }

      .container {
        display: flex;
        flex-flow: column nowrap;
        padding: 1rem;
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
      <div class="container">
        <div>
          <p>
            Welcome to my home page. My name is Ecmel Ercan. I am a software
            developer. You can find my open source work on
            <a href="https://github.com/ecmel">GtiHub</a>
          </p>
          <p>
            Also you can download beta versions of <strong>Defter</strong> for
            <a
              href="itms-services://?action=download-manifest&url=https://ecmel.dev/defter/manifest.plist"
              >iOS</a
            >
            and
            <a
              href="https://github.com/ecmel/ecmel.dev/releases/download/2/app-universal-release.apk"
              >Android</a
            >
            and <strong>Verditum</strong> for
            <a
              href="itms-services://?action=download-manifest&url=https://ecmel.dev/verditum/manifest.plist"
              >iOS</a
            >,
            <a
              href="https://github.com/ecmel/ecmel.dev/releases/download/1/app-universal-release.apk"
              >Android</a
            >,
            <a
              href="https://github.com/ecmel/ecmel.dev/releases/download/1/Verditum_0.0.1_aarch64.dmg"
              >MacOS</a
            >
            and
            <a
              href="https://github.com/ecmel/ecmel.dev/releases/download/1/Verditum_0.0.1_x64-setup.exe"
              >Windows</a
            >.
          </p>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "home-view": HomeView;
  }
}
