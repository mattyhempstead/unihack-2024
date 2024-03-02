import { readStore, writeStore } from "@/store/store";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  // get the meme_id, name and props from body
  const meme_obj = await req.json();

  await writeStore(meme_obj);

  console.log(meme_obj);

  return NextResponse.json(await readStore());
}
