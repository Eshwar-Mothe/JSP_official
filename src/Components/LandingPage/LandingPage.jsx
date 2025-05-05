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

            <Link to="/videoGallery" style={{ textDecoration: 'none', border: '2px solid' }}>
                <p className='heading' >Video-Gallery
                    <span> watchMore &rarr; </span></p>
            </Link>
                <div><Videos /></div>
        </>
    )
}

export default LandingPage