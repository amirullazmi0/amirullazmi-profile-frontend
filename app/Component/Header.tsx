import React from 'react'


const Header = () => {
    return (
        <>
            <div className='header'>
                <div className="hd-left">
                    <div className="block">
                        <div className='name1'>Amirull Azmi</div>
                        <div className='name2'>Software Developer</div>
                        <div className='title'>Indonesia</div>
                    </div>
                </div>
                <div className="hd-right">
                    <div className="btn"></div>
                </div>
            </div>
            <div className="tron">
                <img src="/img/me2.png" alt="" />
            </div>
            <div className="tron2">
                <div className="item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:w-12 lg:h-12 h-6 w-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    Inspire yours with new things
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:w-12 lg:h-12 h-6 w-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                </div>

            </div>
            {/* <div className="about-me">
                <div className="head">ABOUT ME</div>
                I'm a software developer specializing in web and mobile app development. With a strong passion for technology and a background in programming, I thrive on solving complex challenges in software development. I've crafted innovative and efficient software solutions, and I'm always eager to learn and adapt to the latest technological advancements to make a meaningful impact in the digital world
            </div> */}

        </>
    )
}

export default Header