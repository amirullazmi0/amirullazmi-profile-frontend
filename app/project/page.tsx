import React from 'react'
import { Metadata } from 'next'
import Header from "./Component/Header";
import Navigation from '../Component/navigation/Navigation';
export const metadata: Metadata = {
    title: 'Project Page',
}
import Section1 from "./Component/Section1";
import Section2 from './Component/Section2';
import Footer from '../Component/footer/Footer';
import Section3 from './Component/Section3';

export default function page() {
    return (
        <main className='body-project'>
            <Navigation active={'project'} />
            <Header />
            <div className="lg:grid lg:grid-cols-7">
                <div className="lg:col-span-5">
                    <Section1 />
                    <Section2 />
                </div>
            </div>
            <Footer />
        </main>
    )
}
