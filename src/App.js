import React,{ useState } from 'react';
import './App.css'
import logo from './photos/logo.jpg';
import linkedin from './photos/linkedin.png'
import MainContent from './MainContent';
import PhotoList from './PhotoList';
import MetadataList from './RightSidebar';
import Metadata from './Metadata';
import SearchBar from './SearchBar';

function App() {

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const photos = Metadata;

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleSearch = (searchTerm) => {
    const results = photos.filter((photo) => {
      return photo.alt.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
    setSelectedPhoto(null);
  };

  return (
    <div>
      <div className="header">
            <div className="logo">
              <a href="."><img src={logo} style={{height:60}} /></a> 
            </div>
            <div>
              <SearchBar onSearch={handleSearch} />
              <p>The results are desplayed in the list on the left.</p>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/company/project-denn/" title="linkedin" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} style={{height:40}}/>
              </a>
            </div>
          </div>
      <div className="container">
        <div className="sidebar-left">
          <h3>Latest photos and news.</h3>
          <br/>
          <p className='PhotoList'>
            <PhotoList
              photos={searchResults || photos}
              selectedPhoto={selectedPhoto}
              onPhotoSelect={handlePhotoSelect}
            />
          </p>
        </div>
        <div className="main-content">
          <MainContent selectedPhoto={selectedPhoto} />
          
        </div>
        <div className="sidebar-right">
          <MetadataList selectedPhoto={selectedPhoto} />
        </div>
      </div>
    </div>
  );
}

export default App;