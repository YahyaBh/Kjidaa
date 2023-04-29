import './Navbar.scss'
import Logo from '../../assets/Images/Gen/Logo.png'
import { MdOutlineSegment } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({ target }) => {


    const [count, setCount] = useState(false);



    const chgangeSideBar = () => {
        if (count) {
            setCount(false)
        } else {
            setCount(true)
        }
    }


    console.log(count);

    return (


        <>
            <div className='contact_header'>
                <div>
                    <h3>APPELEZ NOUS +212 667-667153</h3>
                </div>

                <div>
                    <h3>APPELEZ NOUS +212 661374817</h3>
                </div>
            </div>


            <div className='app__navbar'>

                <ul>
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>

                    <ul>
                        <li className={target === 'home' ? 'border_right active' : 'border_right'}><a href='/'>Accueil</a></li>
                        <li className={target === 'nos-service' ? 'border_right active' : 'border_right'}><a href='/nos-service'>Nos Service</a></li>
                        <li className={target === 'nos-produits' ? 'border_right active' : 'border_right'}><a href='/nos-produits'>Nos Produits</a></li>
                        <li className={target === 'reservation' ? 'border_right active' : 'border_right'}><a href='/reservation'>Reservation</a></li>
                        <li className={target === 'a-props' ? 'border_right active' : 'border_right'}><a href='/a-propos'>A Propos</a></li>
                        <li className={target === 'blog' ? 'border_right active' : 'border_right'}><a href='/blog'>Blog</a></li>
                        <li className={target === 'contact' ? `active` : ``}><a href='/contact'>Contact</a></li>
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
                                    <li className={target === 'nos-service' ? 'border_right active' : 'border_right'}><a href='/nos-service'>Nos Service</a></li>
                                    <li className={target === 'nos-produits' ? 'border_right active' : 'border_right'}><a href='/nos-produits'>Nos Produits</a></li>
                                    <li className={target === 'reservation' ? 'border_right active' : 'border_right'}><a href='/reservation'>Reservation</a></li>
                                    <li className={target === 'a-props' ? 'border_right active' : 'border_right'}><a href='/a-propos'>A Propos</a></li>
                                    <li className={target === 'blog' ? 'border_right active' : 'border_right'}><a href='/blog'>Blog</a></li>
                                    <li className={target === 'contact' ? `active` : ``}><a href='/contact'>Contact</a></li>
                                </ul>
                            </section>
                        </aside>


                    </ul>
                </ul>
            </div>
        </>
    )
}

export default Navbar