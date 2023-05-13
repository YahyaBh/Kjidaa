import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Loading from '../../Layouts/Loading/Loading';
import './Packs.scss'
import packs from '../../assets/API/Packs.json'
import Footer from '../Footer/Footer';

const Packs = () => {


    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [selectedRes, setSelectedRes] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])



    const setActiveModal = (packName, pack) => {

        if (active) {
            setActive(false);

        } else {
            setSelectedRes(packName + '*%20*' + pack.name);
            setActive(true);
        }

    }


    return (
        loading ?
            <Loading />
            :
            <div id='packs'>


                <Navbar target={'nos-packs'} />

                <div id="myModal" className={active ? "modal active-m" : "modal"}>

                    <div className="modal-content">
                        <span className="close" onClick={e => setActiveModal()}>&times;</span>
                        <div className='container-modal-fields'>

                            <p>Réservez votre pack en quelques secondes, avec nos méthodes de réservation</p>

                            <input type="text" onChange={e => setName(e.target.value)} placeholder='Nom*' value={name} minLength={'6'} maxLength={'18'} />

                            <input type="tel" onChange={e => setPhone(e.target.value)} placeholder='Tel*' value={phone} minLength={'6'} maxLength={'18'} />

                            <div data-aos="fade-right" className="select">
                                <select name="city" id="city" placeholder="Ville*" onChange={e => setCity(e.target.value)} required>
                                    <option defaultChecked>Choisez votre ville</option>
                                    <option value="El Hajeb">El Hajeb</option>
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


                            <a className={`btn ${name === '' || phone === '' || city === '' ? 'disabled' : ''}`} href={`https://api.whatsapp.com/send/?phone=212767667153&text=Bonjour%20Mon%20Nom%20%3A%20*${name}*%20%2C%0AMon%20Numero%20%3A%20*${phone}*%2C%0AMa%20Ville%20%3A%20*${city}*%20%2C%0AMes%20exigences%20%3A%20*${selectedRes}*`}>Reserver</a>
                        </div>
                    </div>
                </div>


                <div className='nos-packs'>
                    <header>
                        <h2 data-aos="fade-right">Nos Packs</h2>
                        <p data-aos="fade-left">Meilleur sevice dans le <span>maroc</span></p>


                        <div data-aos="fade-down" className="scroll-downs">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                        </div>
                    </header>


                    <section>

                        {packs.map((pack, index) => {
                            const packName = Object.keys(pack)[0];
                            const packItems = pack[packName];
                            return (

                                <div data-aos="fade-down" key={index} className="section-packs">
                                    <h2>Découvrez <span>{packName}</span> Packs</h2>
                                    <div className="packs-continer">
                                        {packItems.map((pack, index) => (
                                            <div key={index} className="pack">
                                                <img src={pack.img} alt={pack.name} />
                                                <div className='body-pack'>
                                                    <div className='text-container'>
                                                        <h3>{pack.name}</h3>
                                                        <ul>
                                                            {pack.props.map((prop, index) => <li key={index}>{prop}</li>)}
                                                            <hr />
                                                        </ul>
                                                        <h3>À partir de - <span>{pack.price} Dhs</span> {pack.old_price ? <del>{pack.old_price} Dhs</del> : ''}</h3>

                                                    </div>
                                                    <button onClick={e => setActiveModal(packName, pack)}>Reserver</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}


                        {/* <div className="section-packs">
                            <h2>Découvrez <span>Nos</span> Packs</h2>



                            <div className="packs-continer">

                                {packs.pack2.map((pack, index) => (
                                    <div key={index} className="pack">
                                        <img src={pack.img} alt={pack.name} />


                                        <div className='body-pack'>
                                            <h3>{pack.name}</h3>

                                            <ul>
                                                {pack.props.map((prop, index) => <li key={index}>{prop}</li>)}
                                                <hr />
                                            </ul>

                                            <h3>À partir de - <span>{pack.price} Dhs</span> {pack.old_price ? <del>{pack.old_price} Dhs</del> : ''}</h3>

                                            <a href={`/reserve/${pack.id}`}>Reserver</a>
                                        </div>
                                    </div>
                                ))}




                            </div>
                        </div> */}

                    </section>


                </div >



                <Footer />
            </div >
    )
}

export default Packs