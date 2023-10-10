import Link from 'next/link'
import React from 'react'
import CardModal from './CardModal/CardModal'

const Section2 = () => {
    return (
        <div className='section2'>
            <div className='mb-2 head-section2'>
                PORTOFOLIO
            </div>
            <div className="flex gap-7">
                <div className="card-section2">
                    <CardModal url='https://designshack.net/wp-content/uploads/mobile-app-template-368x246.jpg' title='lorem ipsum' />
                    <CardModal url='https://caphe.sfo2.cdn.digitaloceanspaces.com/assets/images/trackizer-free-app-ui-kit-for-figma-thumb.jpg' title='lorem ipsum' />
                    <CardModal url='https://designshack.net/wp-content/uploads/mobile-app-template-368x246.jpg' title='lorem ipsum' />
                </div>
            </div>
            <div className='flex justify-end'>
                <Link href={'/project'} className='myBtn'>
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </Link >
            </div>
        </div>
    )
}

export default Section2