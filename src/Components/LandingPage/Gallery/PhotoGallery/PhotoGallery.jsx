import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const galleryItems = [
  {
    title: 'Party',
    path: 'PartyImages',
    date: 'Mar 13, 2024',
    imageUrl: 'https://newsjspdiag673.blob.core.windows.net/gallery/0QhU013zT-OsQsoWbVpmZuG9.jpeg',
  },
  {
    title: 'Public',
    path: 'PublicImages',
    date: 'Mar 13, 2024',
    imageUrl: 'https://newsjspdiag673.blob.core.windows.net/gallery/0QhU013zT-OsQsoWbVpmZuG9.jpeg',
  },
  {
    title: 'Events',
    path: 'EventImages',
    date: 'Mar 13, 2024',
    imageUrl: 'https://newsjspdiag673.blob.core.windows.net/gallery/0QhU013zT-OsQsoWbVpmZuG9.jpeg',
  },
  {
    title: 'Issues',
    path: 'IssuesImages',
    date: 'Mar 13, 2024',
    imageUrl: 'https://newsjspdiag673.blob.core.windows.net/gallery/0QhU013zT-OsQsoWbVpmZuG9.jpeg',
  },
];

const PhotoGallery = () => {
    const [date, setDate] = useState(() => {
        const now = new Date();
        return now.toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        }).replace(',', '');
      });
  return (
    <div className="photo_gal">
      <p className="heading">Photo-Gallery</p>

      {galleryItems.map((item, index) => (
        <div className="card_box photo_gal" key={index}>
          <div className="card photo_gal">
            <div className="card_normal photo_gal">
              <Link to={item.path}>
                <div className="image photo_gal" tabIndex="0">
                  <img className="photo_gal" src={item.imageUrl} alt={item.title} />
                </div>
                <div className="title photo_gal" tabIndex="0">{item.title}</div>
                <div className="date_share photo_gal">
                  <div className="date photo_gal"><strong> {date}</strong></div>
                </div>
              </Link>
            </div>

            <div className="card_left photo_gal">
              <div className="image photo_gal">
                <img className="photo_gal" src={item.imageUrl} alt={item.title} />
              </div>
              <div className="title photo_gal">{item.title}</div>
              <div className="date_share photo_gal">
                <div className="date photo_gal"><strong> {date}</strong></div>
              </div>
            </div>

            <div className="card_right photo_gal">
              <div className="image photo_gal">
                <img className="photo_gal" src={item.imageUrl} alt={item.title} />
              </div>
              <div className="title photo_gal">{item.title}</div>
              <div className="date_share photo_gal">
                <div className="date photo_gal"><strong> {date}</strong></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
