import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Carga inicial de datos (GET)
  useEffect(() => {
    fetch('http://localhost:3001/books') // Asumiendo que tu json-server corre en el puerto 3001 o 3000
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  // Lógica de filtrado
  const filteredBooks = books.filter(book => {
    const term = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  return (
    <div className="App">
      <Header />
      <main>
        <ProgressBar books={books} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <AddBookForm /> {/* Plantilla para el próximo paso */}
        <BookList books={filteredBooks} />
      </main>
    </div>
  );
}

export default App;
