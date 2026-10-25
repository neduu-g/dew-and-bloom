"use client";

// A tiny cart store saved in the browser's localStorage, read through
// React's useSyncExternalStore so the server always renders an empty cart.

import { useSyncExternalStore } from "react";

export type CartItem = { slug: string; qty: number };

const STORAGE_KEY = "dew-and-bloom-cart";
export const MAX_QTY = 10;
const EMPTY: CartItem[] = [];

let items: CartItem[] | null = null;
const listeners = new Set<() => void>();

function read(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((i): i is CartItem => typeof i?.slug === "string" && Number.isInteger(i?.qty))
      .map((i) => ({ slug: i.slug, qty: Math.min(Math.max(i.qty, 1), MAX_QTY) }));
  } catch {
    return [];
  }
}

function write(next: CartItem[]) {
  items = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage may be unavailable (private mode). The cart still works for this visit.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  function onStorage(e: StorageEvent) {
    if (e.key === STORAGE_KEY) {
      items = read();
      listener();
    }
  }
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  if (items === null) items = read();
  return items;
}

function getServerSnapshot() {
  return EMPTY;
}

export function useCart() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

const noopSubscribe = () => () => {};

// False during the server render and hydration, true once running in the browser.
export function useHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

export function addToCart(slug: string, qty = 1) {
  const current = getSnapshot();
  const existing = current.find((i) => i.slug === slug);
  if (existing) {
    write(current.map((i) => (i.slug === slug ? { ...i, qty: Math.min(i.qty + qty, MAX_QTY) } : i)));
  } else {
    write([...current, { slug, qty: Math.min(qty, MAX_QTY) }]);
  }
}

export function setQuantity(slug: string, qty: number) {
  if (qty <= 0) {
    removeFromCart(slug);
    return;
  }
  write(getSnapshot().map((i) => (i.slug === slug ? { ...i, qty: Math.min(qty, MAX_QTY) } : i)));
}

export function removeFromCart(slug: string) {
  write(getSnapshot().filter((i) => i.slug !== slug));
}
