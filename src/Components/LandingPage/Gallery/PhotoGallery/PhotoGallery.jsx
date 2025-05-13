import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const galleryItems = [
  {
    title: 'Party',
    path: 'PartyImages',
    date: 'Mar 13, 2024',
    imageUrl: 'https://janasenanewssletter1.blob.core.windows.net/images/16%E0%B0%B5%20%E0%B0%86%E0%B0%B0%E0%B1%8D%E0%B0%A5%E0%B0%BF%E0%B0%95%20%E0%B0%B8%E0%B0%82%E0%B0%98%E0%B0%82%E0%B0%A4%E0%B1%8B%20%E0%B0%B8%E0%B0%AE%E0%B0%BE%E0%B0%B5%E0%B1%87%E0%B0%B6%E0%B0%82%E0%B0%B2%E0%B1%8B%20%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%20%E0%B0%AA%E0%B0%B5%E0%B0%A8%E0%B1%8D%20%E0%B0%95%E0%B0%B3%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%A3%E0%B1%8D%204',
  },
  {
    title: 'Public',
    path: 'PublicImages',
    date: 'Mar 13, 2024',
    imageUrl: 'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%B5%E0%B0%BF%E0%B0%B6%E0%B0%BE%E0%B0%96%20%E0%B0%B5%E0%B0%BF%E0%B0%AE%E0%B0%BE%E0%B0%A8%E0%B0%BE%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B0%AF%E0%B0%82%E0%B0%B2%E0%B1%8B%20%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%20%E0%B0%AA%E0%B0%B5%E0%B0%A8%E0%B1%8D%20%E0%B0%95%E0%B0%B3%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%A3%E0%B1%8D%20%E0%B0%95%E0%B1%81%20%E0%B0%98%E0%B0%A8%20%E0%B0%B8%E0%B1%8D%E0%B0%B5%E0%B0%BE%E0%B0%97%E0%B0%A4%E0%B0%82%200',
  },
  {
    title: 'Events',
    path: 'EventImages',
    date: 'Mar 13, 2024',
    imageUrl: 'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%AE%E0%B0%A8%E0%B1%8D%E0%B0%AF%E0%B0%82%20%E0%B0%9C%E0%B0%A8%E0%B0%82%E0%B0%A4%E0%B1%8B%20%E0%B0%AE%E0%B0%AE%E0%B1%87%E0%B0%95%E0%B0%8237',
  },
  {
    title: 'Issues',
    path: 'IssuesImages',
    date: 'Mar 13, 2024',
    imageUrl: 'https://janasenanewssletter1.blob.core.windows.net/images/%E0%B0%B9%E0%B1%88%E0%B0%A6%E0%B0%B0%E0%B0%BE%E0%B0%AC%E0%B0%BE%E0%B0%A6%E0%B1%8D%20%E0%B0%A8%E0%B1%86%E0%B0%95%E0%B1%8D%E0%B0%B2%E0%B1%86%E0%B0%B8%E0%B1%8D%20%E0%B0%B0%E0%B1%8B%E0%B0%A1%E0%B1%8D%20%E0%B0%B2%E0%B1%8B%20%E0%B0%9C%E0%B0%A8%E0%B0%B8%E0%B1%87%E0%B0%A8%20%E0%B0%AA%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%9F%E0%B1%80%20%E0%B0%95%E0%B1%8A%E0%B0%B5%E0%B1%8D%E0%B0%B5%E0%B1%8A%E0%B0%A4%E0%B1%8D%E0%B0%A4%E0%B1%81%E0%B0%B2%20%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%A6%E0%B0%B0%E0%B1%8D%E0%B0%B6%E0%B0%A8%E0%B0%B2%E0%B1%8B%20%E0%B0%AA%E0%B0%BE%E0%B0%B2%E0%B1%8D%E0%B0%97%E0%B1%8A%E0%B0%A8%E0%B1%8D%E0%B0%A8%20%E0%B0%B6%E0%B1%8D%E0%B0%B0%E0%B1%80%20%E0%B0%95%E0%B1%86.%E0%B0%A8%E0%B0%BE%E0%B0%97%E0%B0%AC%E0%B0%BE%E0%B0%AC%E0%B1%81%203',
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
