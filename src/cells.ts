/*
 * Copyright (c) 1986-2024 Ecmel Ercan (https://ecmel.dev/)
 * All rights reserved.
 */

import SlCheckbox from "@shoelace-style/shoelace/dist/components/checkbox/checkbox.component.js";

import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { Task } from "@lit/task";
import { scrollIntoView } from "seamless-scroll-polyfill";
import {
  Account,
  createEntry,
  createTransfer,
  getAccounts,
  getOptions,
} from "./data";
import {
  CellInput,
  CellSelect,
  currentTarget,
  focusOptions,
  indexOf,
  nextX,
  nextY,
  scrollOptions,
} from "@ecmel/cells";
import { calc, descale, Numeric } from "@ecmel/cells/dist/decimal";

@customElement("cells-view")
export class CellsView extends LitElement {
  static styles = [
    css`
      .entry cell-input,
      .entry cell-select {
        scroll-margin-top: var(--cell-header-height);
        scroll-margin-bottom: var(--cell-footer-height);
      }

      .entry {
        grid-template-columns: auto auto 3fr repeat(2, minmax(max-content, 1fr));
      }

      @media screen and (max-width: 768px) {
        .entry {
          grid-template-columns: auto 3fr repeat(2, minmax(max-content, 1fr));
        }

        .entry cell-group > *:nth-child(2) {
          display: none;
        }
      }
    `,
  ];

  @state()
  transfer = createTransfer();
  @state()
  selected = 0;
  @state()
  accountCode: string = "";
  @state()
  accountList: Account[] = [];
  @state()
  notation: "standard" | "compact" = "standard";

  get disabled() {
    return this.transfer.entries.length < 2;
  }

  get checked() {
    return (
      this.selected > 0 && this.selected === this.transfer.entries.length - 1
    );
  }

  get indeterminate() {
    return (
      this.selected > 0 && this.selected < this.transfer.entries.length - 1
    );
  }

  get debit() {
    return this.transfer.entries.reduce((sum, { debit }) => sum + debit, 0n);
  }

  get credit() {
    return this.transfer.entries.reduce((sum, { credit }) => sum + credit, 0n);
  }

  protected readonly fetchTask = new Task(this, {
    task: async (_args, { signal }) => {
      this.accountList = this.accountCode
        ? await getAccounts(this.accountCode, signal)
        : [];
    },
    args: () => [this.accountCode],
  });

  protected media: MediaQueryList | null = null;

  protected readonly handleMatchMedia = () =>
    (this.notation = this.media!.matches ? "compact" : "standard");

  constructor() {
    super();
    this.addEventListener("keydown", (e: KeyboardEvent) => {
      if (["b", "B"].includes(e.key) && e.metaKey) {
        this.balance();
        this.requestUpdate();
        e.preventDefault();
      }
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.media = window.matchMedia("screen and (max-width: 576px)");
    this.media.addEventListener("change", this.handleMatchMedia);
    this.handleMatchMedia();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.media!.removeEventListener("change", this.handleMatchMedia);
    this.media = null;
  }

  balance() {
    const index = this.transfer.entries.length - 1;
    const entry = this.transfer.entries[index];
    entry.debit = 0n;
    entry.credit = 0n;
    const debit = this.debit;
    const credit = this.credit;
    if (debit > credit) {
      entry.credit = debit - credit;
    } else if (credit > debit) {
      entry.debit = credit - debit;
    }
  }

  addEntry() {
    this.transfer.entries.push(createEntry());
  }

  isLastEntry(index: number) {
    return index === this.transfer.entries.length - 1;
  }

  jump(target?: Element | null) {
    if (target) {
      scrollIntoView(target, scrollOptions);
      (target as HTMLElement).focus(focusOptions);
    }
  }

  handleKeyDown(e: KeyboardEvent) {
    if (["Enter"].includes(e.key)) {
      const target = currentTarget<CellInput>(e);
      this.jump(nextX(target) || nextY(target));
      e.preventDefault();
    } else if (["ArrowDown", "ArrowUp"].includes(e.key)) {
      const target = currentTarget<CellInput>(e);
      this.jump(nextY(target, e.key === "ArrowUp", indexOf(target)));
      e.preventDefault();
    } else if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
      const target = currentTarget<CellInput>(e);
      if (target.canLeave(e.key === "ArrowLeft")) {
        this.jump(nextX(target, e.key === "ArrowLeft"));
        e.preventDefault();
      }
    }
  }

  protected render() {
    return html`
      <cell-grid columns="auto 1fr">
        <cell-group>
          <cell-item span="2"></cell-item>
        </cell-group>
        <cell-group>
          <cell-item>Date</cell-item>
          <cell-input
            type="date"
            value="${this.transfer.date}"
            @input="${(e: Event) => {
              const target = currentTarget<CellInput>(e);
              this.transfer.date = target.value;
              this.requestUpdate();
            }}"
            @keydown="${(e: KeyboardEvent) => {
              this.handleKeyDown(e);
            }}"
            ><sl-format-date
              day="2-digit"
              month="2-digit"
              year="numeric"
              date="${this.transfer.date}"
            ></sl-format-date
          ></cell-input>
        </cell-group>
        <cell-group>
          <cell-item>Description</cell-item>
          <cell-input
            value="${this.transfer.description}"
            @input="${(e: Event) => {
              const target = currentTarget<CellInput>(e);
              this.transfer.description = target.value;
              this.requestUpdate();
            }}"
            @keydown="${(e: KeyboardEvent) => {
              this.handleKeyDown(e);
            }}"
          ></cell-input>
        </cell-group>
        <cell-group>
          <cell-item>Options</cell-item>
          <cell-select
            readonly
            list="options"
            @focus="${(e: Event) => {
              const target = currentTarget<CellSelect>(e);
              target.show();
            }}"
            @selection="${(e: Event) => {
              const target = currentTarget<CellSelect>(e);
              const selected = target.selected;
              this.transfer.options = selected.map((item) =>
                parseInt(item.value)
              );
              this.transfer.option_names = selected.map(
                (item) => item.textContent || ""
              );
              this.requestUpdate();
            }}"
            @keydown="${(e: KeyboardEvent) => {
              this.handleKeyDown(e);
            }}"
            ><cell-section gap wrap
              >${map(
                this.transfer.option_names,
                (name) => html`<sl-tag>${name}</sl-tag>`
              )}</cell-section
            ></cell-select
          >
          <cell-datalist id="options" columns="auto auto">
            ${map(
              getOptions(),
              (option) => html`<cell-option
                value="${option.id}"
                ?selected="${this.transfer.options.indexOf(option.id) >= 0}"
                ><cell-item>${option.name}</cell-item></cell-option
              >`
            )}
          </cell-datalist>
        </cell-group>
      </cell-grid>
      <br />
      <cell-grid class="entry">
        <cell-group>
          <cell-header
            ><sl-checkbox
              ?checked="${this.checked}"
              ?indeterminate="${this.indeterminate}"
              ?disabled="${this.disabled}"
              @sl-change="${(e: Event) => {
                const target = currentTarget<SlCheckbox>(e);
                for (let i = 0; i < this.transfer.entries.length - 1; i++) {
                  this.transfer.entries[i].checked = target.checked;
                }
                this.selected = target.checked
                  ? this.transfer.entries.length - 1
                  : 0;
              }}"
            ></sl-checkbox
          ></cell-header>
          <cell-header>Code</cell-header>
          <cell-header>Account</cell-header>
          <cell-header justify="end">Debit</cell-header>
          <cell-header justify="end">Credit</cell-header>
        </cell-group>
        ${map(
          this.transfer.entries,
          (value, index) => html`
            <cell-group>
              <cell-item
                ><sl-checkbox
                  ?checked="${value.checked}"
                  ?disabled="${this.isLastEntry(index)}"
                  @sl-change="${(e: Event) => {
                    const target = currentTarget<SlCheckbox>(e);
                    value.checked = target.checked;
                    if (value.checked) {
                      this.selected++;
                    } else {
                      this.selected--;
                    }
                  }}"
                ></sl-checkbox
              ></cell-item>
              <cell-item>${value.code}</cell-item>
              <cell-select
                stretch
                truncate
                list="accounts"
                value="${value.account}"
                @selection="${(e: Event) => {
                  const target = currentTarget<CellSelect>(e);
                  const selected = target.selected[0];
                  if (selected) {
                    if (selected.value) {
                      if (this.isLastEntry(index)) {
                        this.addEntry();
                      }
                      const labels = selected.labels;
                      value.id = selected.value;
                      value.code = labels[0];
                      value.account = labels[1];
                    } else {
                      value.id = value.code = value.account = "";
                    }
                    this.jump(nextX(target));
                  }
                  target.hide();
                }}"
                @input="${(e: Event) => {
                  const target = currentTarget<CellSelect>(e);
                  this.accountCode = target.value.trim();
                  target.show();
                }}"
                @hide="${(e: Event) => {
                  const target = currentTarget<CellSelect>(e);
                  target.value = value.account;
                  target.reset();
                  this.accountCode = "";
                  this.requestUpdate();
                }}"
                @keydown="${(e: KeyboardEvent) => {
                  if (e.key !== "Enter" || value.id) {
                    this.handleKeyDown(e);
                  }
                }}"
              ></cell-select>
              <cell-input
                auto
                justify="end"
                value="${Numeric(value.debit)}"
                @change="${(e: Event) => {
                  const target = currentTarget<CellInput>(e);
                  value.debit = descale(calc(target.value, 16), 14);
                  if (value.debit) {
                    value.credit = 0n;
                  }
                  this.requestUpdate();
                  target.value = Numeric(value.debit);
                }}"
                @keydown="${(e: KeyboardEvent) => {
                  this.handleKeyDown(e);
                }}"
                ><cell-format
                  value="${Numeric(value.debit)}"
                  notation="${this.notation}"
                ></cell-format
              ></cell-input>
              <cell-input
                auto
                justify="end"
                value="${Numeric(value.credit)}"
                @change="${(e: Event) => {
                  const target = currentTarget<CellInput>(e);
                  value.credit = descale(calc(target.value, 16), 14);
                  if (value.credit) {
                    value.debit = 0n;
                  }
                  this.requestUpdate();
                  target.value = Numeric(value.credit);
                }}"
                @keydown="${(e: KeyboardEvent) => {
                  this.handleKeyDown(e);
                }}"
                ><cell-format
                  value="${Numeric(value.credit)}"
                  notation="${this.notation}"
                ></cell-format
              ></cell-input>
            </cell-group>
          `
        )}
        <cell-group>
          <cell-footer></cell-footer>
          <cell-footer></cell-footer>
          <cell-footer justify="end">TOTAL</cell-footer>
          <cell-footer justify="end"
            ><cell-format
              value="${Numeric(this.debit)}"
              notation="${this.notation}"
            ></cell-format
          ></cell-footer>
          <cell-footer justify="end"
            ><cell-format
              value="${Numeric(this.credit)}"
              notation="${this.notation}"
            ></cell-format
          ></cell-footer>
        </cell-group>
      </cell-grid>
      <cell-datalist
        id="accounts"
        columns="max-content minmax(min-content, 1fr)"
      >
        ${this.fetchTask.render({
          complete: () =>
            html`
              <cell-option>
                <cell-item span="2">(none)</cell-item>
              </cell-option>
              ${map(
                this.accountList,
                (account) => html`
                  <cell-option value="${account.id}">
                    <cell-item>${account.code}</cell-item>
                    <cell-item>${account.name}</cell-item>
                  </cell-option>
                `
              )}
            `,
          pending: () => html`
            <cell-option>
              <cell-item><sl-spinner></sl-spinner></cell-item>
            </cell-option>
          `,
        })}
      </cell-datalist>
      <br />
      <cell-section justify="center">
        <sl-button-group>
          <sl-button
            @click="${() => {
              this.addEntry();
              this.requestUpdate();
            }}"
            >Add</sl-button
          ><sl-button
            ?disabled="${this.selected === 0}"
            @click="${() => {
              this.transfer.entries = this.transfer.entries.filter(
                (entry) => !entry.checked
              );
              this.selected = 0;
              this.requestUpdate();
            }}"
            >Delete</sl-button
          ><sl-button
            @click="${() => {
              this.transfer = createTransfer();
              this.selected = 0;
            }}"
            >Clear</sl-button
          ><sl-button
            @click="${() => {
              this.balance();
              this.requestUpdate();
            }}"
            >Balance</sl-button
          >
        </sl-button-group>
      </cell-section>
      <br />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cells-view": CellsView;
  }
}
