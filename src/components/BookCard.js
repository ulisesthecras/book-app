import React from 'react';
import PropTypes from 'prop-types';
import { STATUSES } from '../data/constants';

const BookCard = ({ book, onStatusUpdate }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>

      <div style={{ marginTop: '10px' }}>
        <label style={{ marginRight: '8px' }}>Estado:</label>
        <select
          className="status-select"
          value={book.status}
          onChange={(e) => onStatusUpdate(book.id, e.target.value)}
          style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          {Object.values(STATUSES).map((statusInfo) => (
            <option key={statusInfo.id} value={statusInfo.id}>
              {statusInfo.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onStatusUpdate: PropTypes.func.isRequired,
};

export default BookCard;
