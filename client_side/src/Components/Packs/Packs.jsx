import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Loading from '../../Layouts/Loading/Loading';
import './Packs.scss'
import packs from '../../assets/API/Packs.json'
import Footer from '../Footer/Footer';

const Packs = () => {


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])


    return (
        loading ?
            <Loading />
            :
            <div>


                <Navbar target={'nos-packs'} />


                <div className='nos-packs'>
                    <header>
                        <h2>Nos Packs</h2>
                        <p>Meilleur sevice dans le <span>maroc</span></p>


                        <div className="scroll-downs">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                        </div>
                    </header>


                    <section>

                        {Object.entries(packs).map(([full, packList], index) => (
                            <div key={index} className="section-packs">
                                <h2>Découvrez <span>{full}</span> Packs</h2>
                                <div className="packs-continer">
                                    {packList.map((pack, index) => (
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
                            </div>
                        ))}
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