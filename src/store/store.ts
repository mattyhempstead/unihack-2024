/*
    Just a store for a single JSON.
    Kinda misusing redis but whatever.

    Turns out u can't really store arrays well :'(
*/

import client from './client';

export type Store = {
    foo: number;
}

export async function readStore(): Promise<Store> {
    let result = await client.get('store');
   
    if (result) {
        return JSON.parse(result) as Store;
    } else {
        return {
            "foo": 0,
        };
    }
}

export async function writeStore(data:Store) {
    await client.set(
        'store',
        JSON.stringify(data)
    );
}

