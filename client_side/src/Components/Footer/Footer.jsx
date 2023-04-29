import './Footer.scss'

const Footer = () => {
    return (
        <div className='app__footer'>


            <div className="flex-sections">

                <div className="logo-section">
                    <h1>K</h1>
                </div>

                <div className="contact-section">
                    <h2>Contact</h2>
                    <hr />
                    <br />

                    <ul>
                        <li>N°755 Rue Tamada Hay</li>
                        <li>Rue Adrar, Agadir 80650</li>
                        <li>Tél: +212 661-60-49-85</li>
                        <li>contact@mytraiteur.ma</li>
                    </ul>
                </div>

                <div className="newsletter-section">
                    <h2>INSCRIPTION À LA NEWSLETTER</h2>
                    <hr />
                    <h5>Ne manquez pas nos nouvelles</h5>
                    <br />

                    <div className='newslette-input-cont'>
                        <div className='email-contianer'>
                            <input type="email" placeholder='Entrez votre e-mail' name='email' id='email' maxLength={30} minLength={6} />
                            <button>Soumettre</button>
                        </div>
                        <div className="accept-check">
                            <input type="checkbox" name="accept-news" id="accept-news" />
                            <h4>J&#39;accepte que mes données soumises soient collectées et stockées.</h4>
                        </div>
                    </div>
                </div>

            </div>


            <div className="under-footer">
                <div className="made-by">
                    WEBINA © 2023 All Rights Reserved
                </div>

                <div className="social-media">
                    <div className="cycle-media"></div>
                    <div className="cycle-media"></div>
                    <div className="cycle-media"></div>
                </div>
            </div>


        </div >
    )
}

export default Footer