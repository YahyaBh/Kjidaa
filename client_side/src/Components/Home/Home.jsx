import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.scss";
import { Navigation, Pagination, Autoplay } from "swiper";
import ImagePack from '../../assets/Images/Home/Carousel/8.jpg';
import Footer from "../Footer/Footer";
import { RiWhatsappFill } from 'react-icons/ri'
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar target='home' />

            <header>
                <div className="header-text">
                    <h1>Bienvenue Chez <span>Kjidaa</span></h1>

                    <h3>le meilleur traiteur dans le maroc</h3>
                    <button>Reservation</button>
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
                <h2>Notre <span>Localisation</span></h2>

                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3319.9373322766514!2d-5.370133096553818!3d33.68468682959433!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQxJzA1LjYiTiA1wrAyMicwOC4wIlc!5e0!3m2!1sen!2sus!4v1682681535602!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>


            <section id="kjidaa-packs" className="packs">

                <h2>Découvrez <span>Nos</span> Packs</h2>



                <div className="cards-container">
                    <div className="card-container">

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

                    <div className="card-container main-card">

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

                    <div className="card-container">

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



                <h2>Traiteur En Ligne Au</h2>
                <span>Maroc</span>


                <div className="images-container">
                    <div className="image-container">
                        <img src={ImagePack} alt="image1" />

                        <h2>My Cake Design</h2>
                    </div>

                    <div className="image-container">
                        <img src={ImagePack} alt="image2" />

                        <h2>My Cake Design</h2>

                    </div>

                    <div className="image-container">
                        <img src={ImagePack} alt="image3" />

                        <h2>My Cake Design</h2>
                    </div>

                    <div className="image-container">
                        <img src={ImagePack} alt="image4" />

                        <h2>My Cake Design</h2>
                    </div>
                </div>
            </section>

            <Swiper
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="carousel-swiper">
                <SwiperSlide className="swiper-container">
                    <div className="image-container-swiper">
                        <img src={ImagePack} alt="image-pack" />

                        <h3>Asumez-vous maintenant</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-container">
                    <div className="image-container-swiper">
                        <img src={ImagePack} alt="image-pack" />

                        <h3>Asumez-vous maintenant</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-container">
                    <div className="image-container-swiper">
                        <img src={ImagePack} alt="image-pack" />

                        <h3>Asumez-vous maintenant</h3>
                    </div>
                </SwiperSlide>
            </Swiper>

            <section className="even-orga" id="even-orga">

                <h2>Traiteur et Organisateur des</h2>
                <span>Evènements</span>


                <div className="flex-container-orders">
                    <div className="flex-container-column">
                        <div className="order-even">
                            <div className="left-panel">
                                <h4>ACCUEIL</h4>
                                <hr />
                                <p>ÉQUIPES DYNAMIQUES DOTÉES D’UNE GRANDE AISANCE RELATIONNELLE</p>
                            </div>

                            <div className="right-panel">
                                <h3>01</h3>
                            </div>
                        </div>
                        <div className="order-even">
                            <div className="left-panel">
                                <h4>CUISINE MAROCAINE</h4>
                                <hr />
                                <p>ÉQUIPES DYNAMIQUES DOTÉES D’UNE GRANDE AISANCE RELATIONNELLE</p>
                            </div>

                            <div className="right-panel">
                                <h3>02</h3>
                            </div>
                        </div>
                        <div className="order-even">
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

                    <div className="cycle-with-name">
                        K
                    </div>

                    <div className="flex-container-column">
                        <div className="order-even">
                            <div className="right-panel">
                                <h3>04</h3>
                            </div>

                            <div className="left-panel">
                                <h4>ACCUEIL</h4>
                                <hr />
                                <p>ÉQUIPES DYNAMIQUES DOTÉES D’UNE GRANDE AISANCE RELATIONNELLE</p>
                            </div>


                        </div>
                        <div className="order-even">

                            <div className="right-panel">
                                <h3>05</h3>
                            </div>
                            <div className="left-panel">
                                <h4>CUISINE MAROCAINE</h4>
                                <hr />
                                <p>ÉQUIPES DYNAMIQUES DOTÉES D’UNE GRANDE AISANCE RELATIONNELLE</p>
                            </div>


                        </div>
                        <div className="order-even">

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
                <h2>Laissez parler votre imagination
                    Nous allons la réaliser</h2>


                <button>Demander un devis</button>
            </section>



            <section className="contact-footer" id="contact-footer">
                <div>
                    <h2>Laissez un Commentaire ou</h2>
                    <h2>Posez <span>une Question</span></h2>
                </div>


                <form onSubmit={''} method="post">

                    <div className="inputs-name-tel">
                        <input type="text" placeholder="Name" name="name" id="name" maxLength={'20'} minLength={'4'} required />

                        <input type="tel" placeholder="Tele" name="tel" id="tel" maxLength={'20'} minLength={'8'} required />
                    </div>


                    <input type="email" placeholder="Email" name="email" id="email" maxLength={'30'} minLength={'8'} required />


                    <textarea required placeholder="Message" name="message" id="message" cols="30" rows="10" maxLength={'300'} minLength={'10'}>

                    </textarea>


                    <div className="checkbox-container">
                        <input type="checkbox" name="accept" id="accept" required />
                        <label htmlFor="accept"> J&#39;accepte que mes données soumises soient collectées et stockées.</label>
                    </div>
                    <button type="submit">Envoyez</button>

                </form>
            </section>


            <a href="https://wa.me/+212665845124" target="blank" className="whatsapp-bubble">
                <RiWhatsappFill />
            </a>

            <Footer />

        </div>


    )
}

export default Home