import { useEffect, useState } from "react"
import Loading from "../../Layouts/Loading/Loading"
import Navbar from "../Navbar/Navbar"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";
import './About.scss'
import Footer from "../Footer/Footer";
import AboutPic from '../../assets/Images/About/Ellipse 18.png'
import DishesPic from '../../assets/Images/About/IMG-20230428-WA0043.jpg'
import Logo from '../../assets/Images/About/K.png'
import Place from '../../assets/Images/About/IMG-20230428-WA0035.jpg';

const About = () => {

    const [loading, setLoading] = useState(true);



    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    return (
        loading ?
            <Loading />
            :
            <div>


                <Navbar target={'a-propos'} />

                <header>
                    <div className="header-text">
                        <h2 data-aos="fade-right">A Propos</h2>
                        <p data-aos="fade-right">Meilleur sevice dans le <span>maroc</span></p>

                        <div className="scroll-downs">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                        </div>
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

                    <div className="sec-section">
                        <h2>NOTRE RAISON D'ÊTRE, NOS VALEURS ET NOTRE VISION.</h2>

                        <div className="a-propos-cont">
                            <img src={Logo} alt="A-Propos-Logo" />

                            <div className="text-cont">
                                <h3>PREMIER TRAITEUR EN LIGNE AU MAROC</h3>

                                <p>Nous répondons avec empressement aux demandes privées et corporatives quel que soit l’importance de votre évènement.
                                    Des mets savoureux, une présentation impeccable, un service parfait pour un évènement mémorable, voilà ce à quoi nous nous engageons.
                                    Inauguration, anniversaire, baptême, funérailles, My Traiteur vous offre un service à la hauteur de vos attentes.
                                    Chaque petit détail compte et vous êtes en droit d’exiger ce qu’il se fait de mieux. Voilà notre souci d’excellence.</p>
                            </div>

                        </div>


                        <div className="a-propos-cont">

                            <div className="text-cont">
                                <h3>MY TRAITEUR À VOTRE SERVICE</h3>

                                <p>Organiser un évènement gourmand demande beaucoup d’efforts. Comme c’est notre spécialité,
                                    n’hésitez pas à déléguer : nous serons ravis de prendre les choses en main pour que vous ayez l’esprit tranquille.
                                    La planification du menu, la confection des plats, la livraison, la mise en place, le service… Nous pouvons tout faire à
                                    votre place. D’une étape à l’autre, nous saurons vous conseiller avec soin pour qu’aucun détail ne soit laissé au hasard
                                    mais aussi pour voir à ce que l’ambiance et le service soient impeccables.Quelle que soit occasion, My Traiteur s’adaptera
                                    pour vous offrir ce qu’il y a de mieux selon le concept que vous aurez choisi. Faites-nous confiance : on s’occupe de tout !</p>
                            </div>

                            <img src={Place} alt="A-Propos-place" />

                        </div>


                        <div className="a-propos-cont">
                            <img src={DishesPic} alt="Dishes" />

                            <div className="text-cont">
                                <h3>LA QUALITÉ EST À MOITIÉ</h3>

                                <p>Organiser un évènement gourmand demande beaucoup d’efforts. Comme c’est notre spécialité, n’hésitez pas à déléguer : nous serons ravis de prendre
                                    les choses en main pour que vous ayez l’esprit tranquille. La planification du menu, la confection des plats,
                                    la livraison, la mise en place, le service… Nous pouvons tout faire à votre place.</p>
                            </div>

                        </div>


                        <div className="a-propos-cont">

                            <div className="text-cont">
                                <h3>LIVRAISON A DOMICILE</h3>

                                <p>Notre équipe se chargera de la livraison des commandes à Agadir et dans les environs. Notre personnel de cuisine et de service est également à votre entière disposition pour s’assurer que tout se déroulera dans les règles de l’art et que vos convives soient traités aux petits soins.
                                    Cette offre ne s’applique pas qu’aux évènements de grande envergure. Pourquoi ne pas profiter de notre service pour vos buffets, Choisissez ce qui vous fait envie sur nos divers menus traiteurs ou encore, créez votre menu de toute pièce avec notre chef cuisinière et nous nous ferons un plaisir de vous l’apporter jusque chez vous.
                                    Quelle que soit occasion, My Traiteur s’adaptera pour vous offrir ce qu’il y a de mieux selon le concept que vous aurez choisi. Faites-nous confiance : on s’occupe de tout !</p>
                            </div>

                            <img src={AboutPic} alt="About" />

                        </div>
                    </div>
                </section>
                

                <Footer/>
            </div>
    )
}

export default About