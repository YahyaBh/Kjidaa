import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.scss";
import { Navigation, Pagination, Autoplay } from "swiper";
import ImagePack from '../../assets/Images/Home/Carousel/MainCar.jpg';
import Footer from "../Footer/Footer";
import { RiWhatsappFill } from 'react-icons/ri'
import Navbar from "../Navbar/Navbar";

import { AiOutlineSend } from 'react-icons/ai'
import Loading from "../../Layouts/Loading/Loading";
import { useEffect, useState } from "react";

const Home = () => {


    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    })

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
                        <div data-aos="fade-right" className="card-container">

                            <img src={ImagePack} alt="anniv" />

                            <div className="card-body">
                                <h3>Pack Anniversaire</h3>
                                <hr />

                                <ul>
                                    <li>Tables comprenant: Buffet / Décoration et
                                        installation</li>

                                    <li>Gâteau personnalisé pour 10 personnes</li>

                                    <li>Cup cake</li>

                                    <li>Pop cake</li>

                                    <li>Salé</li>
                                </ul>

                                <hr />


                                <h3>À partir de - 2500 Dhs </h3>

                                <button>Reservation</button>
                            </div>
                        </div>

                        <div data-aos="fade-right" className="card-container main-card">

                            <img src={ImagePack} alt="anniv" />

                            <div className="card-body">
                                <h3>Pack Anniversaire</h3>
                                <hr />

                                <ul>
                                    <li>Tables comprenant: Buffet / Décoration et
                                        installation</li>

                                    <li>Gâteau personnalisé pour 10 personnes</li>

                                    <li>Cup cake</li>

                                    <li>Pop cake</li>

                                    <li>Salé</li>
                                </ul>

                                <hr />


                                <h3>À partir de - 2500 Dhs </h3>

                                <button>Reservation</button>
                            </div>
                        </div>

                        <div data-aos="fade-right" className="card-container">

                            <img src={ImagePack} alt="anniv" />

                            <div className="card-body">
                                <h3>Pack Anniversaire</h3>
                                <hr />

                                <ul>
                                    <li>Tables comprenant: Buffet / Décoration et
                                        installation</li>

                                    <li>Gâteau personnalisé pour 10 personnes</li>

                                    <li>Cup cake</li>

                                    <li>Pop cake</li>

                                    <li>Salé</li>
                                </ul>

                                <hr />


                                <h3>À partir de - 2500 Dhs </h3>

                                <button>Reservation</button>
                            </div>
                        </div>

                    </div>



                    <h2 data-aos="fade-down">Traiteur En Ligne Au</h2>
                    <span data-aos="fade-down">Maroc</span>

                    <div className="cards-categor">
                        <div className="images-container">
                            <div data-aos="fade-right" className="image-container">
                                <img src={ImagePack} alt="image1" />

                                <h2>My Cake Design</h2>
                            </div>

                            <div data-aos="fade-right" className="image-container">
                                <img src={ImagePack} alt="image2" />

                                <h2>My Cake Design</h2>

                            </div>

                            <div data-aos="fade-right" className="image-container">
                                <img src={ImagePack} alt="image3" />

                                <h2>My Cake Design</h2>
                            </div>

                            <div data-aos="fade-right" className="image-container">
                                <img src={ImagePack} alt="image4" />

                                <h2>My Cake Design</h2>
                            </div>
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
                        {/* <div className="image-container-swiper">
                            <img src={ImagePack} alt="image-pack" />

                            <h3>Asumez-vous maintenant</h3>
                        </div> */}
                    </SwiperSlide>
                    <SwiperSlide className="swiper-container">
                        {/* <div className="image-container-swiper">
                            <img src={ImagePack} alt="image-pack" />

                            <h3>Asumez-vous maintenant</h3>
                        </div> */}
                    </SwiperSlide>
                    <SwiperSlide className="swiper-container">
                        {/* <div className="image-container-swiper">
                            <img src={ImagePack} alt="image-pack" />

                            <h3>Asumez-vous maintenant</h3>
                        </div> */}
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



                <section  className="small-section-res" id="small-section-res">
                    <h2 data-aos="fade-right">Laissez parler votre imagination
                        Nous allons la réaliser</h2>


                    <button data-aos="fade-down">Demander un devis</button>
                </section>



                <section className="contact-footer" id="contact-footer">
                    <div>
                        <h2>Laissez un Commentaire ou</h2>
                        <h2>Posez <span>une Question</span></h2>
                    </div>


                    <form onSubmit={''} method="post">

                        <div className="inputs-name-tel">
                            <input data-aos="fade-right" type="text" placeholder="Name" name="name" id="name" maxLength={'20'} minLength={'4'} required />

                            <input data-aos="fade-right" type="tel" placeholder="Tele" name="tel" id="tel" maxLength={'20'} minLength={'8'} required />
                        </div>


                        <input data-aos="fade-right" type="email" placeholder="Email" name="email" id="email" maxLength={'30'} minLength={'8'} required />


                        <textarea data-aos="fade-in" required placeholder="Message" name="message" id="message" cols="30" rows="10" maxLength={'300'} minLength={'10'} />


                        <div data-aos="fade-right" className="checkbox-container">
                            <input type="checkbox" name="accept" id="accept" required />
                            <label htmlFor="accept"> J&#39;accepte que mes données soumises soient collectées et stockées.</label>
                        </div>
                        <button data-aos="fade-right" type="submit">Envoyez <AiOutlineSend /></button>

                    </form>
                </section>


                <a data-aos="fade-down" href="https://wa.me/+212665845124" target="blank" className="whatsapp-bubble">
                    <RiWhatsappFill />
                </a>

                <Footer />

            </div>


    )
}

export default Home