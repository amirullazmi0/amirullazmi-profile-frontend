'use client'
import React, { useState } from 'react'
import './cardmodal.css'

const CardModal = ({ url, title }: { url: string, title: string }) => {
    const [modal, setModal] = useState<boolean>(false)
    const data = [
        'https://images.wondershare.com/mockitt/ui-design/ui-example-round-corners-trend.png',
        'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/248105377/original/92c59a5cac9ff198b1a83315076bca92b7086c3a/do-modern-ui-ux-design-for-mobile-and-web.jpg',
        'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/285797365/original/6e3750184980274d61d605b242e738e995be617b/beautiful-and-meaningful-ui-ux-design.png'
    ]

    const renderModal = () => {
        return (
            <div className={modal == true ? 'modal modal-active' : 'modal modal-non-active'}>
                <div className="item-modal">
                    <div className="btn-modal">
                        <button onClick={() => setModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    <div className="body-modal">
                        {data && data.map((item: string, index: number) => {
                            return (
                                <React.Fragment>
                                    <img className='img-body-modal' src={item} alt="" />
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className="footer-modal">
                        Lorem ipsum dolor sit amet
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="card-modal-section">
                <div className='item-card-modal-section'>
                    <img src={url} alt="" />
                </div>
                <button onClick={() => setModal(true)} className='btn-card-modal-section'>
                    <p>{title}</p>
                </button>
            </div>
            {renderModal()}
        </>
    )
}

export default CardModal