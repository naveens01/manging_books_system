const Book = require('../models/bookModel');
const authMiddleware = require('../middleware/authMiddleware');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  },

  updateBook: async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(updatedBook);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(deletedBook);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  
  getProtectedData: (req, res) => {
    res.json({ message: 'This is protected data!' });
  },
};

module.exports = bookController;
