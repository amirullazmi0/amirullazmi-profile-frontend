import React from 'react'
import CardSection1 from './CardSection1'
import CardModal from '@/app/Component/CardModal/CardModal'

const Section1 = () => {
    return (
        <div className='project-section1'>
            <div className="item">
                <div className="head">
                    Website and Mobile App
                </div>
                <div className="body">
                    <CardModal
                        url='https://relevant.software/wp-content/uploads/Mobile-App-UI-Design_Cover-scaled.jpg'
                        title='Lorem ipsum dolor sit amet.'
                    />
                    <CardModal
                        url='https://www.ideamotive.co/hs-fs/hubfs/21%20Dazzling%20Examples%20of%20Mobile%20App%20UI%20Design%20to%20Inspire%20You%20in%202022%20-%20unix.png?width=688&height=516&name=21%20Dazzling%20Examples%20of%20Mobile%20App%20UI%20Design%20to%20Inspire%20You%20in%202022%20-%20unix.png'
                        title='Lorem ipsum dolor sit amet.'
                    />
                    <CardModal
                        url='https://mir-s3-cdn-cf.behance.net/projects/404/2c3407180018387.Y3JvcCwxNjAwLDEyNTEsMCwzMQ.png'
                        title='Lorem ipsum dolor sit amet.'
                    />
                    <CardModal
                        url='https://designshack.net/wp-content/uploads/mobile-app-template-368x246.jpg'
                        title='Lorem ipsum dolor sit amet.'
                    />
                    <CardModal
                        url='https://res.cloudinary.com/madimages/image/fetch/fl_progressive,e_sharpen:100/https://www.mobileappdaily.com/public/uploads/mad_1111053f826.png'
                        title='Lorem ipsum dolor sit amet.'
                    />
                    <CardModal
                        url='https://mir-s3-cdn-cf.behance.net/project_modules/1400/e7511871755505.5bd0304b4d24d.png'
                        title='Lorem ipsum dolor sit amet.'
                    />
                </div>
            </div>
        </div>
    )
}

export default Section1