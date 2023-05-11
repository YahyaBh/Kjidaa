import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.scss";
import { Navigation, Pagination, Autoplay } from "swiper";
import Footer from "../Footer/Footer";
import { RiWhatsappFill } from 'react-icons/ri'
import Navbar from "../Navbar/Navbar";
import ServicesPack from '../../assets/API/Services.json'
import PackPacks from '../../assets/API/Packs.json'

import { AiOutlineSend } from 'react-icons/ai'
import Loading from "../../Layouts/Loading/Loading";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Home = () => {


    const [loading, setLoading] = useState(true);
    const [randomObjects, setRandomObjects] = useState(null);

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
    const selectRandomObjects = () => {
        const randomIndices = [];
        while (randomIndices.length < 4) {
            const randomIndex = Math.floor(Math.random() * ServicesPack?.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }
        const selectedObjects = randomIndices.map((index) => ServicesPack[index]);
        setRandomObjects(selectedObjects);
    };




    useEffect(() => {
        selectRandomObjects();
    }, []);




    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])



    return (
        loading ?
            <Loading />
            :
            <div id="Home">
                <Navbar target='home' data-aos="fade-down" />

                <header>
                    <div className="header-text">
                        <h1 data-aos="fade-right">Bienvenue Chez <span>Kjidaa</span></h1>

                        <h3 data-aos="fade-right" data-aos-duration="500">le meilleur traiteur dans le maroc</h3>
                        <button data-aos="fade-right" data-aos-duration="1000">Reservation</button>
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
                        <SwiperSlide className="swiper-container"></SwiperSlide>
                        <SwiperSlide className="swiper-container"></SwiperSlide>
                    </Swiper>
                </header>



                <section id="location" className="location-container">
                    <h2 data-aos="fade-down">Notre <span>Localisation</span></h2>

                    <iframe data-aos="zoom-in" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3319.9373322766514!2d-5.370133096553818!3d33.68468682959433!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQxJzA1LjYiTiA1wrAyMicwOC4wIlc!5e0!3m2!1sen!2sus!4v1682681535602!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>


                <section id="kjidaa-packs" className="packs">

                    <h2 data-aos="fade-down">Découvrez <span>Nos</span> Packs</h2>



                    <div className="cards-container">

                        <div data-aos="fade-right" className={`card-container main-card`}>

                            <img src={PackPacks["Pack laarssan"][0].img} alt={PackPacks["Pack laarssan"][0].name} />

                            <div className="card-body">
                                <h3>{PackPacks["Pack laarssan"][0]}</h3>
                                <hr />


                                <ul>
                                    {PackPacks["Pack laarssan"][0].props.map((prop, index) => {
                                        <li key={index}>{prop}</li>
                                    })}
                                </ul>

                                <hr />


                                <h3>À partir de - {PackPacks["Pack laarssan"][0].price} Dhs </h3>

                                <a href="/nos-packs">Reservation</a>
                            </div>

                        </div>



                    </div>



                    <h2 data-aos="fade-down">Traiteur En Ligne Au</h2>
                    <span data-aos="fade-down">Maroc</span>

                    <div className="cards-categor">
                        <div className="images-container">

                            {randomObjects.map((object) => (
                                <div key={object.name} data-aos="fade-right" className="image-container">
                                    <img src={object.image} alt="image1" />
                                    <h2>{object.name}</h2>
                                </div>
                            ))}


                        </div>


                        <button>Afficher tout</button>
                    </div>
                </section>

                <Swiper
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="carousel-swiper2"
                    data-aos="zoom-in"
                >
                    <SwiperSlide className="swiper-container">
                    </SwiperSlide>
                    <SwiperSlide className="swiper-container">
                    </SwiperSlide>
                </Swiper>

                <section className="even-orga" id="even-orga">

                    <h2 data-aos="fade-down">Traiteur et Organisateur des</h2>
                    <span data-aos="fade-down">Evènements</span>


                    <div className="flex-container-orders">
                        <div className="flex-container-column">
                            <div data-aos="fade-down" className="order-even">
                                <div className="left-panel">
                                    <h4>ACCUEIL</h4>
                                    <hr />
                                    <p>ÉQUIPES DYNAMIQUES DOTÉES D’UNE GRANDE AISANCE RELATIONNELLE</p>
                                </div>

                                <div className="right-panel">
                                    <h3>01</h3>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="250" className="order-even">
                                <div className="left-panel">
                                    <h4>CUISINE MAROCAINE</h4>
                                    <hr />
                                    <p>ÉQUIPES DYNAMIQUES DOTÉES D’UNE GRANDE AISANCE RELATIONNELLE</p>
                                </div>

                                <div className="right-panel">
                                    <h3>02</h3>
                                </div>
                            </div>
                            <div data-aos="fade-down" data-aos-duration="500" className="order-even">
                                <div className="left-panel">
                                    <h4>CAKE DESIGN</h4>
                                    <hr />
                                    <p>ÉQUIPES DYNAMIQUES DOTÉES D’UNE GRANDE AISANCE RELATIONNELLE</p>
                                </div>

                                <div className="right-panel">
                                    <h3>03</h3>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="750" className="cycle-with-name">
                            K
                        </div>

                        <div className="flex-container-column">
                            <div data-aos="fade-down" data-aos-duration="1000" className="order-even">
                                <div className="right-panel">
                                    <h3>04</h3>
                                </div>

                                <div className="left-panel">
                                    <h4>ACCUEIL</h4>
                                    <hr />
                                    <p>ÉQUIPES DYNAMIQUES DOTÉES D’UNE GRANDE AISANCE RELATIONNELLE</p>
                                </div>


                            </div>
                            <div data-aos="fade-down" data-aos-duration="1250" className="order-even">

                                <div className="right-panel">
                                    <h3>05</h3>
                                </div>
                                <div className="left-panel">
                                    <h4>CUISINE MAROCAINE</h4>
                                    <hr />
                                    <p>ÉQUIPES DYNAMIQUES DOTÉES D’UNE GRANDE AISANCE RELATIONNELLE</p>
                                </div>


                            </div>
                            <div data-aos="fade-down" data-aos-duration="1500" className="order-even">

                                <div className="right-panel">
                                    <h3>06</h3>
                                </div>
                                <div className="left-panel">
                                    <h4>CAKE DESIGN</h4>
                                    <hr />
                                    <p>ÉQUIPES DYNAMIQUES DOTÉES D’UNE GRANDE AISANCE RELATIONNELLE</p>
                                </div>


                            </div>
                        </div>


                    </div>


                </section>



                <section className="small-section-res" id="small-section-res">
                    <h2 data-aos="fade-right">Laissez parler votre imagination
                        Nous allons la réaliser</h2>


                    <button data-aos="fade-down">Demander un devis</button>
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


                <a data-aos="fade-down" href="https://wa.me/+212665845124" target="blank" className="whatsapp-bubble">
                    <RiWhatsappFill />
                </a>

                <Footer />

            </div>


    )
}

export default Home