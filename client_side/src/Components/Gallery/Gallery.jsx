import Navbar from "../Navbar/Navbar"
import './Gallery.scss'
import Footer from '../Footer/Footer'
import { useState } from "react"

const Gallery = () => {


    const [image, setImage] = useState();
    const [zoomed, setZoomed] = useState(false);

    const zoomImage = (e) => {
        if (e) {
            if (!image) {
                setImage(e)
                setZoomed(true)
                console.log(image);
            } else {
                setImage(null)
                setZoomed(false)
                console.log(image);
                // setTimeout(function () {

                // }, 400);
            }
        } else {
            setImage(null)
            setZoomed(false)
        }
    }




    return (
        <div id="gallery">

            <Navbar target={'gallery'} />


            <div onClick={e => zoomImage(e)} id="myModal" className={zoomed ? "modal active" : 'modal'}>
                <img className="modal-content" src={image ? image : ''} id="img" />
                <div id="caption"></div>
            </div>

            <div className="gallery">

                <header>
                    <h2 data-aos="fade-right">Notre Gallery</h2>
                    <p data-aos="fade-left">Meilleur sevice dans le <span>maroc</span></p>


                    <div data-aos="fade-down" className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                </header>



                <section>

                    <h2>Nos travailles <span>précédents</span></h2>

                    <div className="parent">


                        <div className="div1">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0001.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0001.jpg" alt="IMAGE1" />
                        </div>
                        <div className="div2">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0005.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0005.jpg" alt="IMAGE2" />
                        </div>
                        <div className="div3">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0006.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0006.jpg" alt="IMAGE3" />
                        </div>
                        <div className="div4">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0007.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0007.jpg" alt="IMAGE4" />
                        </div>
                        <div className="div5">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0008.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0008.jpg" alt="IMAGE5" />
                        </div>
                        <div className="div6">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0009.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0009.jpg" alt="IMAGE6" />
                        </div>
                        <div className="div7">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0010.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0010.jpg" alt="IMAGE7" />
                        </div>
                        <div className="div8">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0011.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0011.jpg" alt="IMAGE8" />
                        </div>
                        <div className="div9">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0012.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0012.jpg" alt="IMAGE9" />
                        </div>
                        <div className="div10">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0014.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0014.jpg" alt="IMAGE10" />
                        </div>
                        <div className="div11">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0029.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0029.jpg" alt="IMAGE11" />
                        </div>
                        <div className="div12">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0040.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0040.jpg" alt="IMAGE12" />
                        </div>
                        <div className="div13">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0041.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0041.jpg" alt="IMAGE13" />
                        </div>
                        <div className="div13l">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0042.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0042.jpg" alt="IMAGE14" />
                        </div>
                        <div className="div14">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0045.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0045.jpg" alt="IMAGE15" />
                        </div>
                        <div className="div15">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0046.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0046.jpg" alt="IMAGE16" />
                        </div>
                        <div className="div16">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0047.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0047.jpg" alt="IMAGE17" />
                        </div>
                        <div className="div17">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0048.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0048.jpg" alt="IMAGE18" />
                        </div>
                        <div className="div18">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0049.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0049.jpg" alt="IMAGE19" />
                        </div>
                        <div className="div19">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0050.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0050.jpg" alt="IMAGE20" />
                        </div>
                        <div className="div20">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0051.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0051.jpg" alt="IMAGE21" />
                        </div>
                        <div className="div21">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0052.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0052.jpg" alt="IMAGE22" />
                        </div>
                        <div className="div22">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0053.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0053.jpg" alt="IMAGE23" />
                        </div>
                        <div className="div23">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0054.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0054.jpg" alt="IMAGE24" />
                        </div>
                        <div className="div24">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0055.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0055.jpg" alt="IMAGE25" />
                        </div>
                        <div className="div25">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0056.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0056.jpg" alt="IMAGE26" />
                        </div>
                        <div className="div26">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0064.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0064.jpg" alt="IMAGE27" />
                        </div>
                        <div className="div27">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0077.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0077.jpg" alt="IMAGE28" />
                        </div>
                        <div className="div28">
                            <img onClick={e => zoomImage('./Images_public/Gallery/WhatsApp Image 2023-05-15 at 21.23.33.jpg')} src="./Images_public/Gallery/WhatsApp Image 2023-05-15 at 21.23.33.jpg" alt="IMAGE29" />
                        </div>
                    </div>


                    <h2>Organisation des <span>évènements</span></h2>

                    <div className="parent">

                        <div className="div1">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0026.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0026.jpg" alt="IMAGE1" />
                        </div>
                        <div className="div2">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0027.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0027.jpg" alt="IMAGE2" />
                        </div>
                        <div className="div3">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0028.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0028.jpg" alt="IMAGE3" />
                        </div>
                        <div className="div4">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0029.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0029.jpg" alt="IMAGE4" />
                        </div>
                        <div className="div5">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0030.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0030.jpg" alt="IMAGE5" />
                        </div>
                        <div className="div6">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0031.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0031.jpg" alt="IMAGE6" />
                        </div>
                        <div className="div7">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0032.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0032.jpg" alt="IMAGE7" />
                        </div>
                        <div className="div8">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0033.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0033.jpg" alt="IMAGE8" />
                        </div>
                        <div className="div9">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0034.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0034.jpg" alt="IMAGE9" />
                        </div>
                        <div className="div10">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0035.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0035.jpg" alt="IMAGE10" />
                        </div>
                        <div className="div11">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0036.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0036.jpg" alt="IMAGE11" />
                        </div>
                        <div className="div12">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0037.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0037.jpg" alt="IMAGE12" />
                        </div>
                        <div className="div13">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0038.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0038.jpg" alt="IMAGE13" />
                        </div>
                        <div className="div13l">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0039.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0039.jpg" alt="IMAGE14" />
                        </div>
                        <div className="div14">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0040.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0040.jpg" alt="IMAGE15" />
                        </div>
                        <div className="div15">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0041.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0041.jpg" alt="IMAGE16" />
                        </div>
                        <div className="div16">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0042.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0042.jpg" alt="IMAGE17" />
                        </div>
                        <div className="div17">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0043.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0043.jpg" alt="IMAGE18" />
                        </div>
                        <div className="div18">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0044.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0044.jpg" alt="IMAGE19" />
                        </div>
                        <div className="div19">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0045.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0045.jpg" alt="IMAGE20" />
                        </div>
                        <div className="div20">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0046.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0046.jpg" alt="IMAGE21" />
                        </div>
                        <div className="div21">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0047.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0047.jpg" alt="IMAGE22" />
                        </div>
                        <div className="div22">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0048.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0048.jpg" alt="IMAGE23" />
                        </div>
                        <div className="div23">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0049.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0049.jpg" alt="IMAGE24" />
                        </div>
                        <div className="div24">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0050.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0050.jpg" alt="IMAGE25" />
                        </div>
                        <div className="div25">
                            <img onClick={e => zoomImage('./Images_public/Gallery/IMG-20230428-WA0051.jpg')} src="./Images_public/Gallery/IMG-20230428-WA0051.jpg" alt="IMAGE26" />
                        </div>
                    </div>
                </section>

            </div>


            <Footer />

        </div>
    )
}

export default Gallery