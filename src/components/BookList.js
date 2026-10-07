import React from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';

const BookList = ({ books, onStatusUpdate }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            onStatusUpdate={onStatusUpdate}
          />
        ))
      ) : (
        <p>No se encontraron libros.</p>
      )}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onStatusUpdate: PropTypes.func.isRequired,
};

export default BookList;
