import React from 'react';

const ProgressBar = ({ books }) => {
  const readBooks = books.filter(book => book.status === 'Leído').length;
  const totalBooks = books.length;
  const progress = totalBooks === 0 ? 0 : Math.round((readBooks / totalBooks) * 100);

  return (
    <div className="progress-bar-container">
      <p>Progreso de lectura: {progress}%</p>
      <div className="progress-bar-background">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
