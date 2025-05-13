import React from 'react'
import { Carousel } from 'antd';


const SlideSection = () => {

    return (
        <>
            <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000} className='slideSection'>
                <div >
                    <img src="https://i.pinimg.com/736x/f6/35/61/f635619f34db62b9b5c002a870c40489.jpg" />
                </div>
                <div>
                    <img src="https://wallpapers.com/images/featured/janasena-party-qxbqux4yll4ut0yp.jpg" />
                </div>
                <div>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8c9d8e165926781.64101e67043d5.jpg" />
                </div>
                <div>
                    <img src="https://images.indianexpress.com/2024/06/pawan-kalyan-1.jpg" />
                </div>
            </Carousel>
        </>
    )
}

export default SlideSection