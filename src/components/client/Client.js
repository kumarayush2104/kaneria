// Libraries
import React from 'react'

// Media
import CommaImage from '../../assets/career/comma.png'
import ClientCard from './ClientCard'

export default function Client() {
    return (
        <>
            <div className="header_space"></div>

            {/* Client Banner Section Start */}
            <div className="careers_banner">
                <img src={CommaImage} alt='' />
                <br />
                <span className="bold">Our Clients</span>
            </div>
            {/* Client Banner Section End */}

            {/* Clients Section Start */}
            <section className="client-page-area">
                <div className="container">
                    <div className="row">
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/94110-logo01.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/28670-logo02.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/74800-logo03.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/58667-logo04.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/36680-logo05.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/58191-logo06.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/85614-logo07.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/75533-logo08.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/13802-logo09.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/33938-logo10.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/41042-logo11.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/14962-logo12.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/43414-logo13.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/91346-logo14.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/61721-logo15.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/68727-logo16.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/25920-logo17.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/35130-logo19.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/33701-logo20.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/76211-logo21.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/73455-logo22.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/24212-logo23.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/62487-logo24.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/53638-25.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/33536-26.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/26534-27.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/32259-28.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/59836-29.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/38559-30.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/6831-31.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/10540-33.jpg"} />
                        <ClientCard image={"https://kaneriaplast.com:5000/upload/client/67871-32.jpg"} />
                    </div>
                </div>
            </section>
            {/* Clients Section End */}
        </>
    )
}
