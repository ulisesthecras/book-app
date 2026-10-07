import React from 'react';
import PropTypes from 'prop-types';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>
      <p>Estado: {book.status}</p>
      {/* El botón de actualizar (PATCH) se implementará en el próximo paso */}
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCard;
