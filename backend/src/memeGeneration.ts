import * as path from 'path';

export async function generateMeme(memeParams: any): Promise<string> {
    // Simulate some asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay

    // Return the absolute path to the static image file
    return path.resolve('images/test.jpg');
}
