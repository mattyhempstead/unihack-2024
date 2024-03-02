/*
    Just a store for a single JSON.
    Kinda misusing redis but whatever.

    Turns out u can't really store arrays well :'(
*/

import client from "./client";

export type Store = {
  meme_id: string;
  name: string;
  props: {
    [fieldName: string]: string;
  };
};

export async function readStore(): Promise<Store> {
  let result = await client.get("store");

  if (result) {
    return JSON.parse(result) as Store;
  } else {
    return {
      meme_id: "0",
      name: "no_name",
      props: {},
    };
  }

  //   let result = await client.hGetAll("memes");
  //   if (result) {
  //     return JSON.parse(result) as Store;
  //   } else {
  //     return {
  //       meme_id: "0",
  //       name: "no_name",
  //       props: {},
  //     };
  //   }
  //   if (result) {
  //     return result as Store;
  //   } else {
  //     return {
  //       meme_id: "0",
  //       name: "no_name",
  //       props: {},
  //     };
  //   }
}

export async function writeStore(data: Store) {
  await client.set("store", JSON.stringify(data));

  //   await client.hSet("memes", data.meme_id, JSON.stringify(data));

  //   await client.hSet(`memes:${data.meme_id}`, [
  //     "meme_id",
  //     data.meme_id,
  //     "name",
  //     data.name,
  //     "props",
  //     JSON.stringify(data.props),
  //   ]);

  //   await client.hSet(`memes:${data.meme_id}`, {
  //     meme_id: data.meme_id,
  //     name: data.name,
  //     props: JSON.stringify(data.props),
  //   });
}
