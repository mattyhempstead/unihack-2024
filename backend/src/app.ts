import express, { Request, Response } from 'express';
import { selectMeme } from './memeSelection'; // Import selectMeme function
import { generateMeme } from './memeGeneration'; // Import generateMeme function

const app = express();
const port = 3001; // You can choose any port

app.use(express.json()); // Middleware to parse JSON bodies

// Route for "foo"
app.get('/foo', (req: Request, res: Response) => {
    res.send('This is the response for foo');
});

// Route for "meme" with a string parameter "rant"
app.post('/meme', async (req: Request, res: Response) => {
    const { rant } = req.body;

    const selectedMeme = selectMeme(rant);
    console.log(selectedMeme);

    try {
        const memeFilePath = await generateMeme(selectedMeme); // Assuming generateMeme returns a Promise
        res.sendFile(memeFilePath); // Send the generated meme file back to the client
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating meme');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
