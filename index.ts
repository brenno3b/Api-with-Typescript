import express, { json } from 'express';
import books from './books.json';

const app = express();
app.use(json());

app.get('/', (req, res) => {
    return res.json({ message: 'Hello, Typescript!' });
});

app.get('/book', (req, res) => {
    return res.json(books);
});

app.get('/book/:id', (req, res) => {
    let id = parseInt(req.params.id);

    return res.json(books[id]);
});

app.post('/book', (req, res) => {
    let id: number = books.length;
    let author = req.query.author as string;
    let name = req.query.name as string;

    books.push({ id, author, name });

    return res.sendStatus(204);
});

app.put('/book/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let author = req.query.author as string;
    let name = req.query.name as string;

    books[id] = { id, author, name };

    return res.sendStatus(204);
});

app.delete('/book/:id', (req, res) => {
    let id = parseInt(req.params.id);

    books.splice(id, 1);

    return res.sendStatus(204);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000 !');
});