import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddBookForm({ onAddBook, onCloseForm }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    totalPages: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación sencilla
    if (!formData.title || !formData.author || !formData.totalPages) {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    // Creación del nuevo objeto libro
    const newBook = {
      ...formData,
      totalPages: parseInt(formData.totalPages, 10),
      id: Date.now().toString(),
      year: new Date().getFullYear(),
      genre: "Unknown",
      status: "wantToRead",
      progress: 0
    };

    onAddBook(newBook);
    setFormData({ title: '', author: '', totalPages: '' }); // Restablecer
    onCloseForm();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content add-book-form">
        <h2>Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="totalPages">Total Pages:</label>
            <input type="number" id="totalPages" name="totalPages" value={formData.totalPages} onChange={handleChange} required />
          </div>
          <div className="form-actions" style={{ marginTop: '1rem', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button type="submit" className="btn-primary" style={{ padding: '8px 16px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Book</button>
            <button type="button" className="btn-secondary" onClick={onCloseForm} style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

AddBookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
  onCloseForm: PropTypes.func.isRequired,
};

export default AddBookForm;
