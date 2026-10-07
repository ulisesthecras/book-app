import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ProgressBar from './components/ProgressBar';
import AddBookForm from './components/AddBookForm';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  const handleAddBook = (newBookData) => {
    fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBookData)
    })
      .then(response => response.json())
      .then(addedBook => {
        setBooks([...books, addedBook]);
      })
      .catch(error => console.error("Error adding book:", error));
  };

  const filteredBooks = books.filter(book => {
    const term = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  return (
    <div className="App">
      <Header onAddNewBookClick={() => setIsFormVisible(true)} />
      <main>
        <ProgressBar books={books} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {isFormVisible && (
          <AddBookForm
            onAddBook={handleAddBook}
            onCloseForm={() => setIsFormVisible(false)}
          />
        )}

        <BookList books={filteredBooks} />
      </main>
    </div>
  );
}

export default App;
