'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navigation = ({ active }: { active: string }) => {
    const [nav, setNav] = useState<boolean>(false)
    const [navItem, setNavItem] = useState<string>(active)
    const handleNav = () => {
        if (nav === true) {
            setNav(false)
        } else {
            setNav(true)
        }
    }

    const handleNavItem = (e: string) => {
        setNavItem(e)
    }
    return (
        <>
            <div className={nav === true ? `navigation active` : `navigation non-active`}>
                <button onClick={() => handleNav()} className={`nav-button`}>
                    {nav === true ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    }
                </button>
                <div className="nav-item">
                    <Link href={'/'} onClick={() => handleNavItem('about-me')} className={navItem === 'about-me' ? "ni-link active" : "ni-link"}>About Me</Link>
                    {/* <button onClick={() => handleNavItem('portofolio')} className={navItem === 'portofolio' ? "ni-link active" : "ni-link"}>Portofolio</button> */}
                    <Link href={'/project'} onClick={() => handleNavItem('project')} className={navItem === 'project' ? "ni-link active" : "ni-link"}>Project</Link >
                    <button onClick={() => handleNavItem('design')} className={navItem === 'design' ? "ni-link active" : "ni-link"}>UI Design & Source Code</button>
                    <button onClick={() => handleNavItem('activity')} className={navItem === 'activity' ? "ni-link active" : "ni-link"}>Activity</button>
                    <button onClick={() => handleNavItem('experiences')} className={navItem === 'experiences' ? "ni-link active" : "ni-link"}>Experince</button>
                    <button onClick={() => handleNavItem('contact-me')} className={navItem === 'contact-me' ? "ni-link active" : "ni-link"}>Contact Me</button>
                </div>
            </div>
        </>
    )
}

export default Navigation