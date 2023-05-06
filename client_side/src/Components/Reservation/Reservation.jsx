import { Fragment } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Reservation.scss'
import Cookies from "cookies-js";

const Reservation = () => {
    return (
        <Fragment>


            <Navbar target={'reservation'} />



            <div className="reserve-container">
                <header>
                    <div className="header-text">
                        <h1 data-aos="fade-right">Bienvenue Chez <span>Kjidaa</span></h1>

                        <h3 data-aos="fade-right" data-aos-duration="500">le meilleur traiteur dans le maroc</h3>
                        <a href="/nos-packs" data-aos="fade-right" data-aos-duration="1000">Nos Packs</a>
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


                <section>
                    <form action="">

                        <input type="text" name="name" id="name" maxLength={20} minLength={4} placeholder="Nom*" />

                        <input type="tel" name="phone" id="phone" maxLength={16} minLength={8} placeholder="Tel*" />

                        <select name="city" id="city" placeholder="Ville*">
                            <option value="">Select a city</option>
                            <option value="Agadir">Agadir</option>
                            <option value="Al Hoceima">Al Hoceima</option>
                            <option value="Beni Mellal">Beni Mellal</option>
                            <option value="Casablanca">Casablanca</option>
                            <option value="Dakhla">Dakhla</option>
                            <option value="El Jadida">El Jadida</option>
                            <option value="Essaouira">Essaouira</option>
                            <option value="Fès">Fès</option>
                            <option value="Ifrane">Ifrane</option>
                            <option value="Kénitra">Kénitra</option>
                            <option value="Khénifra">Khénifra</option>
                            <option value="Khouribga">Khouribga</option>
                            <option value="Laayoune">Laayoune</option>
                            <option value="Marrakech">Marrakech</option>
                            <option value="Meknès">Meknès</option>
                            <option value="Nador">Nador</option>
                            <option value="Ouarzazate">Ouarzazate</option>
                            <option value="Oujda">Oujda</option>
                            <option value="Rabat">Rabat</option>
                            <option value="Safi">Safi</option>
                            <option value="Salé">Salé</option>
                            <option value="Tangier">Tangier</option>
                            <option value="Taza">Taza</option>
                        </select>



                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message*">
                            {Cookies.get('products') ? Cookies.get('products') : 'Tapez votre message ici'}
                        </textarea>

                    </form>
                </section>

            </div>



            <Footer />
        </Fragment>
    )
}

export default Reservation