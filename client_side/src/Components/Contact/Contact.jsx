import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";
import Navbar from '../Navbar/Navbar'
import './Contact.scss'
import { BsFillHouseDoorFill, BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineSend, AiFillMail } from 'react-icons/ai'
import Footer from "../Footer/Footer";
import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();
    const [messageSentS, setMessageSent] = useState();



    const messageSent = () => {

        if (name !== '' && email !== '' && phone !== '' && message !== '') {

            setMessageSent(true)


            Swal.fire({
                title: 'Thank you',
                text: 'Your message has been sent',
                icon: 'success'
            })
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Please fill all the fields',
                icon: 'error'
            })
        }

    }



    return (
        <div id="contact">

            <Navbar target={'contact'} />


            <header>
                <div className="header-text">
                    <h1 data-aos="fade-right">Contact <span>Nous</span></h1>

                    <h3 data-aos="fade-right" data-aos-duration="500">le meilleur traiteur dans le maroc</h3>

                </div>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="carousel-swiper">
                    <SwiperSlide className="swiper-container"></SwiperSlide>
                </Swiper>
            </header>


            <section className="loc">

                <h2 data-aos="fade-down">Notre <span>Localisation</span></h2>

                <iframe data-aos="zoom-in" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3319.9373322766514!2d-5.370133096553818!3d33.68468682959433!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQxJzA1LjYiTiA1wrAyMicwOC4wIlc!5e0!3m2!1sen!2sus!4v1682681535602!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


            </section>



            <section className="conta">

                <a data-aos="fade-down" href="https://goo.gl/maps/AerEcyskXLhXhGqp7" className="sing">
                    <div className="cycle-top">
                        <BsFillHouseDoorFill />
                    </div>
                    <div className="body">
                        <h3>Adresse</h3>
                        <h5>Place Branzarane,<br /> 51000 El Hajeb،<br /> El Hajeb 51000,<br /> Morocco</h5>
                    </div>
                </a>

                <a data-aos="fade-down" href="tel:+212667667153" className="sing">
                    <div className="cycle-top">
                        <BsFillTelephoneFill />
                    </div>
                    <div className="body">
                        <h3>Téléphone</h3>
                        <h5>+212 667-667153</h5>
                        <h5>+212 661-374817</h5>
                    </div>
                </a>

                <a data-aos="fade-down" href="mailto:kjidaa@gmail.com" className="sing">
                    <div className="cycle-top">
                        <AiFillMail />
                    </div>
                    <div className="body">
                        <h3>Email</h3>
                        <h5>kjidaa@gmail.com</h5>
                    </div>
                </a>

            </section>



            <section className="contact-footer" id="contact-footer">
                <div>
                    <h2>Laissez un Commentaire ou</h2>
                    <h2>Posez <span>une Question</span></h2>
                </div>

                {!messageSentS ?
                    <form onSubmit={messageSent}>

                        <div className="inputs-name-tel">
                            <input data-aos="fade-right" type="text" placeholder="Name" onChange={e => setName(e.target.value)} name="name" id="name" maxLength={'20'} minLength={'4'} required />

                            <input data-aos="fade-right" type="tel" placeholder="Tele" name="tel" onChange={e => setPhone(e.target.value)} id="tel" maxLength={'20'} minLength={'8'} required />
                        </div>


                        <input data-aos="fade-right" type="email" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} id="email" maxLength={'30'} minLength={'8'} required />


                        <textarea data-aos="fade-in" required placeholder="Message" name="message" onChange={e => setMessage(e.target.value)} id="message" cols="30" rows="10" maxLength={'300'} minLength={'10'} />


                        <div data-aos="fade-right" className="checkbox-container">
                            <input type="checkbox" name="accept" id="accept" required />
                            <label htmlFor="accept"> J&#39;accepte que mes données soumises soient collectées et stockées.</label>
                        </div>

                        <button data-aos="fade-right" type="submit">Envoyez <AiOutlineSend /></button>

                    </form> : <h2 style={{ color: '#000' }}>Thank you for your message</h2>}
            </section>


            <Footer />

        </div>
    )
}

export default Contact