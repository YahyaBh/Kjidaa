import './Navbar.scss'
import Logo from '../../assets/Images/Gen/Logo.png'
import { MdOutlineSegment } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Cookies from 'cookies-js'


// eslint-disable-next-line react/prop-types
const Navbar = ({ target }) => {


    const [count, setCount] = useState(false);

    const [products, setProducts] = useState(null);

    const chgangeSideBar = () => {
        if (count) {
            setCount(false)
        } else {
            setCount(true)
        }
    }


    useEffect(() => {
        
        if(Cookies.get('products')) {
            setProducts(Cookies.get('products'))
        } else {
            setProducts(null)
        }

    }, [])


    return (


        <div id='navbar'>
            <div className='contact_header'>
                <div>
                    <h3 data-aos="fade-down">APPELEZ NOUS +212 667-667153</h3>
                </div>

                <div>
                    <h3 data-aos="fade-down">APPELEZ NOUS +212 661-374817</h3>
                </div>
            </div>


            <div className='app__navbar'>

                <ul>
                    <div>
                        <img data-aos="fade-right" src={Logo} alt="Logo" />
                    </div>

                    <ul>
                        <li data-aos="fade-left" data-aos-duration="200" className={target === 'home' ? 'border_right active' : 'border_right'}><a href='/'>Accueil</a></li>
                        <li data-aos="fade-left" data-aos-duration="400" className={target === 'nos-service' ? 'border_right active' : 'border_right'}><a href='nos-service'>Nos Services</a></li>
                        <li data-aos="fade-left" data-aos-duration="600" className={target === 'nos-packs' ? 'border_right active' : 'border_right'}><a href='nos-packs'>Nos Packs</a></li>
                        <li data-aos="fade-left" data-aos-duration="800" className={target === 'reservation' ? 'border_right active' : 'border_right'}><a href='reservation'>Reservation {products ? <span className='cycle-notice'>{products.lenght}</span> : ''}</a></li>
                        <li data-aos="fade-left" data-aos-duration="1000" className={target === 'a-propos' ? 'border_right active' : 'border_right'}><a href='a-propos'>A Propos</a></li>
                        {/* <li data-aos="fade-left" data-aos-duration="1200" className={target === 'blog' ? 'border_right active' : 'border_right'}><a href='/blog'>Blog</a></li> */}
                        <li data-aos="fade-left" data-aos-duration="1400" className={target === 'contact' ? `active` : ``}><a href='/contact'>Contact</a></li>
                    </ul>
                </ul>


            </div>


            <div className='small__navbar'>
                <ul>
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>

                    <ul>
                        <div className={!count ? "active segmer" : 'segmer'}>
                            <MdOutlineSegment onClick={e => chgangeSideBar(e)} />
                        </div>


                        <aside className={count ? 'active' : ''}>
                            <header>
                                <AiOutlineClose onClick={e => chgangeSideBar(e)} />
                            </header>


                            <section>
                                <ul>
                                    <li className={target === 'home' ? 'border_right active' : 'border_right'}><a href='/'>Accueil</a></li>
                                    <li className={target === 'nos-service' ? 'border_right active' : 'border_right'}><a href='nos-service'>Nos Services</a></li>
                                    <li className={target === 'nos-produits' ? 'border_right active' : 'border_right'}><a href='nos-packs'>Nos Packs</a></li>
                                    <li className={target === 'reservation' ? 'border_right active' : 'border_right'}><a href='reservation'>Reservation</a></li>
                                    <li className={target === 'a-props' ? 'border_right active' : 'border_right'}><a href='a-propos'>A Propos</a></li>
                                    {/* <li className={target === 'blog' ? 'border_right active' : 'border_right'}><a href='/blog'>Blog</a></li> */}
                                    <li className={target === 'contact' ? `active` : ``}><a href='/contact'>Contact</a></li>
                                </ul>
                            </section>
                        </aside>


                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Navbar