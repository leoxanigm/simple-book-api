import express from 'express';
import bookNames from './bookNames';

const app = express();

app.get('/all', (req, res) => {
  res.json(bookNames);
});

app.get('/search', (req: any, res) => {
  const foundBooks = bookNames.filter(book =>
    book.toLowerCase().includes(req.query?.text.toLowerCase())
  );
  res.json(foundBooks);
});

app.listen(8081, () => {
  console.log('Simple API running on port 8081...');
});
