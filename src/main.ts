/*
 * Copyright (c) 1986-2024 Ecmel Ercan (https://ecmel.dev/)
 * All rights reserved.
 */

import "./base";
import "./error";
import "./home";
import "./cells";

import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { Router } from "@vaadin/router";
import { MenuSelectEventDetail } from "@shoelace-style/shoelace/dist/components/menu/menu.component.js";
import bi_sun from "./assets/sun.svg";

@customElement("main-view")
export class MainView extends LitElement {
  static styles = [
    css`
      :host {
        height: 100%;
      }

      main {
        display: block;
        overflow: scroll;
        width: 100%;
        height: calc(100dvh - 40px);
      }
    `,
  ];

  private router = new Router();

  @state()
  theme: string = "sl-theme-light";

  constructor() {
    super();
    this.router.setRoutes([
      { path: "/", component: "home-view" },
      { path: "/cells", component: "cells-view" },
      { path: "(.*)", component: "error-view" },
    ]);
  }

  @query("main")
  protected readonly main?: Element;

  protected renderMenu() {
    return html`
      <sl-dropdown>
        <sl-button slot="trigger" caret>
          <sl-icon src="${bi_sun}"></sl-icon>
        </sl-button>
        <sl-menu
          @sl-select="${(e: CustomEvent<MenuSelectEventDetail>) => {
            this.theme = e.detail.item.value;
            e.detail.item.checked = true;
          }}"
        >
          <sl-menu-item
            type="checkbox"
            value="sl-theme-light"
            ?checked="${this.theme === "sl-theme-light"}"
            >Light</sl-menu-item
          >
          <sl-menu-item
            type="checkbox"
            value="sl-theme-dark"
            ?checked="${this.theme === "sl-theme-dark"}"
            >Dark</sl-menu-item
          >
        </sl-menu>
      </sl-dropdown>
    `;
  }

  protected render() {
    return html`
      <cell-section flow>
        <cell-section justify="end">${this.renderMenu()}</cell-section>
        <cell-section><main></main></cell-section>
      </cell-section>
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.router.setOutlet(this.main!);
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has("theme")) {
      document.documentElement.className = this.theme;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "main-view": MainView;
  }
}
