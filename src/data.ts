/*
 * Copyright (c) 1986-2024 Ecmel Ercan (https://ecmel.dev/)
 * All rights reserved.
 */

import { loremIpsum } from "lorem-ipsum";

export interface Account {
  id: string;
  code: string;
  name: string;
}

export interface Entry {
  checked: boolean;
  id: string;
  code: string;
  account: string;
  debit: bigint;
  credit: bigint;
}

export interface Transfer {
  date: string;
  description: string;
  options: number[];
  option_names: string[];
  entries: Entry[];
}

export function createTransfer(): Transfer {
  return {
    date: "",
    description: "",
    options: [2],
    option_names: ["Option-2"],
    entries: [createEntry()],
  };
}

export function createEntry(): Entry {
  return {
    checked: false,
    id: "",
    code: "",
    account: "",
    debit: 0n,
    credit: 0n,
  };
}

const accounts: Account[] = [];

for (let i = 0; i < 100; i++) {
  accounts.push({
    id: `${i}`,
    code: `${i % 10}00.${i < 10 ? "0" : ""}${i}`,
    name: loremIpsum(),
  });
}

export function getAccounts(
  text: string,
  signal?: AbortSignal
): Promise<Account[]> {
  return new Promise((resolve, reject) => {
    const result = accounts
      .filter((account) => {
        const code = account.code.replace(/s+/g, "").toLocaleLowerCase();
        const name = account.name.replace(/s+/g, "").toLocaleLowerCase();
        const search = text.replace(/s+/g, "").toLocaleLowerCase();
        return code.includes(search) || name.includes(search);
      })
      .sort((a, b) => a.code.localeCompare(b.code));

    const timeout = setTimeout(() => resolve(result), 250);

    signal?.addEventListener(
      "abort",
      (e) => {
        clearTimeout(timeout);
        reject(new Error(e.type));
      },
      { once: true }
    );
  });
}

export function getOptions() {
  return [
    { id: 1, name: "Option-1" },
    { id: 2, name: "Option-2" },
    { id: 3, name: "Option-3" },
    { id: 4, name: "Option-4" },
    { id: 5, name: "Option-5" },
    { id: 6, name: "Option-6" },
    { id: 7, name: "Option-7" },
    { id: 8, name: "Option-8" },
  ];
}
