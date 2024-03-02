'use server';

import { Store, readStore, writeStore } from './store';


export async function getStore() {
    return await readStore();
}

export async function reset() {
    await writeStore({
        foo: 0,
    });
}

export async function increment() {
    let store = await readStore();
    store["foo"] += 1;
    await writeStore(store);
}
