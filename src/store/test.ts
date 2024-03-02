'use server';

import { Store, readStore, writeStore, resetStore } from './store';


export async function getStore() {
    return await readStore();
}

export async function reset() {
    await resetStore();
}

