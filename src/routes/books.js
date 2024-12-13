const express = require('express');
const fs = require('fs');
const router = express.Router();

const DATA_FILE = './src/data/books.json';

// Helper to load books
const loadBooks = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

// Helper to save books
const saveBooks = (books) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 4));
};

// Add a new book
router.post('/', (req, res) => {
    const { title, author, publishedYear, isbn, genre } = req.body;
    if (!title || !author || !publishedYear || !isbn) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    const books = loadBooks();
    books.push({ title, author, publishedYear, isbn, genre });
    saveBooks(books);
    res.status(201).json({ message: 'Book added successfully.' });
});

// List all books
router.get('/', (req, res) => {
    const books = loadBooks();
    res.json(books);
});

// Search for books
router.get('/search', (req, res) => {
    const { author, publishedYear, genre } = req.query;
    const books = loadBooks();
    const filteredBooks = books.filter((book) => {
        return (
            (!author || book.author === author) &&
            (!publishedYear || book.publishedYear === parseInt(publishedYear)) &&
            (!genre || book.genre === genre)
        );
    });
    res.json(filteredBooks);
});

// Delete a book by ISBN
router.delete('/:isbn', (req, res) => {
    const { isbn } = req.params;
    const books = loadBooks();
    const filteredBooks = books.filter((book) => book.isbn !== isbn);

    if (books.length === filteredBooks.length) {
        return res.status(404).json({ error: 'Book not found.' });
    }

    saveBooks(filteredBooks);
    res.json({ message: 'Book deleted successfully.' });
});

// Update book details by ISBN
router.put('/:isbn', (req, res) => {
    const { isbn } = req.params;
    const updates = req.body;
    const books = loadBooks();
    let bookFound = false;

    const updatedBooks = books.map((book) => {
        if (book.isbn === isbn) {
            bookFound = true;
            return { ...book, ...updates };
        }
        return book;
    });

    if (!bookFound) {
        return res.status(404).json({ error: 'Book not found.' });
    }

    saveBooks(updatedBooks);
    res.json({ message: 'Book updated successfully.' });
});

module.exports = router;
