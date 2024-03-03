import { readStore } from '@/store/store';

export async function GET() {
  const allMemes = await readStore();
  return Response.json(allMemes);
}
