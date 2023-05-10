import { Fragment, useLayoutEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Reservation.scss'
import Cookies from "cookies-js";
import { useEffect } from "react";
import { TiDelete } from 'react-icons/ti'
import { FaOpencart } from 'react-icons/fa'
import Loading from "../../Layouts/Loading/Loading";

const Reservation = () => {

    const [loading, setLoading] = useState();

    const [name, setName] = useState('');
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('');
    const [order, setOrder] = useState([]);


    useLayoutEffect(() => {
        if (Cookies.get('products')) {
            const products = JSON.parse(Cookies.get('products'));
            setOrder(products);
            console.log(products)
        } else {
            setOrder([]);
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const deleteItem = (item) => {

        const filteredArray = order.filter(obj => obj.name !== item.name);

        Cookies.set('products', filteredArray);
        setOrder(filteredArray);

        console.log(item, filteredArray, order);
    }

    return (
        loading ?
            <Loading />
            :
            <div id="reserve">


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
                        <form method="GET">

                            <input data-aos="fade-right" type="text" name="name" id="name" maxLength={20} minLength={4} placeholder="Nom*" onChange={e => setName(e.target.value)} required />

                            <input data-aos="fade-right" type="tel" name="phone" id="phone" maxLength={16} minLength={8} placeholder="Tel*" onChange={e => setPhone(e.target.value)} required />

                            <div data-aos="fade-right" className="select">
                                <select name="city" id="city" placeholder="Ville*" onChange={e => setCity(e.target.value)} required>
                                    <option defaultChecked>Choisez votre ville</option>
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
                                <div className="select_arrow">
                                </div>
                            </div>



                            <div className="products-table">
                                <table className="rwd-table">
                                    <tr>
                                        <th></th>
                                        <th>Produit</th>
                                        <th>Quantity</th>
                                        <th>Prix</th>
                                    </tr>
                                    {Cookies.get('products') ?
                                        order?.map((product, index) =>
                                        (
                                            <>

                                                <tr data-aos="fade-right" key={index}>
                                                    <td className="delete" onClick={e => deleteItem(product)}><TiDelete /></td>
                                                    <td >{product.name}</td>
                                                    <td >{product.quantity}</td>
                                                    <td >{product.price} MAD</td>
                                                </tr>


                                            </>
                                        )) :
                                        (<h2 style={{ textAlign: 'center', padding: '20px' }}>Rien produits dans votre panier <br /> <FaOpencart style={{ fontSize: '40px', marginTop: '40px' }} /> <br /> <a href="/nos-service">Nos Services</a></h2>)
                                    }



                                </table>
                                <hr />
                            </div>



                            <a target="blank" href={`https://api.whatsapp.com/send/?phone=212665845124&text=Bonjour%20Mon%20Nom%20%3A%20*${name}*%20%2C%0AMon%20Numero%20%3A%20*${phone}*%2C%0AMa%20Ville%20%3A%20*${city}*%20%2C%0AMes%20exigences%20%3A%20*${order.map(order => order.name + '* Quantite : *' + order.quantity + '* Prix Total : *' + order.price)} MAD*`} className={`btn btn-primary ${name && phone && Cookies.get('products') && city ? '' : 'disabled'}`}>Envoyez</a>

                        </form>
                    </section>

                </div>



                <Footer />
            </div>
    )
}

export default Reservation