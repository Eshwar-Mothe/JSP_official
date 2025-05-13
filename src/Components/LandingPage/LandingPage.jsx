import React from 'react'
import Header from '../Common/Header'
import SlideSection from './SlideSection'
import PhotoGallery from './Gallery/PhotoGallery/PhotoGallery'
import { Link } from 'react-router-dom'
import Videos from './Gallery/VideoGallery/Videos'

const LandingPage = () => {
    return (
        <>
            <SlideSection />
            <PhotoGallery />

            <div className="container d-flex justify-content-between">
                <p className='heading p-0'>Video-Gallery</p>
                <Link to="/videoGallery" style={{ textDecoration: 'none',color:'red', fontSize:'1.5rem',fontWeight:600}}>
                    <span>watchMore &rarr;</span>
                </Link>
            </div>
            <div><Videos /></div>
        </>
    )
}

export default LandingPage