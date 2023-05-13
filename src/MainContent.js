import React from 'react';
import './App.css'

function MainContent(props) {
  const { selectedPhoto } = props;

  return (
    <div className="main-content">
      {selectedPhoto ? (
        <div className="photo-container">
          <p style={{fontSize: 20}}>{selectedPhoto.alt}</p>
          <img src={selectedPhoto.image} alt={selectedPhoto.alt} />
        </div>
      ) : (
        <h2>Please select a photo from the list on the left or search from the SearchBar.</h2>
      )}
    </div>
  );
}

export default MainContent;