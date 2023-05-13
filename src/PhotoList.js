import React from 'react';


function PhotoList(props) {
  const { photos, selectedPhoto, onPhotoSelect } = props;

  return (
    <div >
      {photos.map((photo) => (
        <img
          key={photo.id}
          alt={photo.alt}
          image={photo.image}
          className={selectedPhoto === photo ? 'selected' : ''}
          onClick={() => onPhotoSelect(photo)}
        />
      ))}
    </div>
  );
}

export default PhotoList;