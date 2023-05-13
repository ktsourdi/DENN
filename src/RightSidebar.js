import React from 'react';

function Map({ url }) {

  return (
    <iframe
      src={url}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      width={300}
      height={300}
      borderRadious={20}
    />
  );
}

function MetadataList(props) {
  const { selectedPhoto } = props;

  return (
    <div className="right-sidebar">
      {selectedPhoto && (
        <div className="metadata-container">
          <h2>Metadata</h2>
          <ul>
            <li>
              <strong>Date:</strong> {selectedPhoto.metadata.date}
            </li>
            <li>
              <strong>Location:</strong> {selectedPhoto.metadata.location}
            </li>
            <li>
              <strong>Creator:</strong> {selectedPhoto.metadata.creator}
            </li>
            <li>
              <strong>Signature:</strong> {selectedPhoto.metadata.signature}
            </li>
            <li>
              <strong>Coordinates:</strong> {selectedPhoto.metadata.coordinates1}, {selectedPhoto.metadata.coordinates2}
            </li>
            <br />
              <Map url={selectedPhoto.metadata.mapsSrc} />
          </ul>
        </div>
      )}
    </div>
  );
}


export default MetadataList;
