import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import './Services.scss'
import axios from "axios";
import Slider from "@mui/material/Slider";
import { AiOutlineInsertRowAbove } from 'react-icons/ai'
import Loading from "../../Layouts/Loading/Loading";
import cookie from "cookies-js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Services = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);
    const [animat, setAnimat] = useState(false);
    const [products, setProducts] = useState([{ name: '1/2 Méchoui d’agneau', price: 1000 }, { name: '1/2 Méchoui d’agneau', price: 600 }, { name: '1/2 Méchoui d’agneau', price: 100 }, { name: '1/2 Méchoui d’agneau', price: 500 }, { name: '1/2 Méchoui d’agneau', price: 2000 }, { name: '1/2 Méchoui d’agneau', price: 4000 }, { name: '1/2 Méchoui d’agneau', price: 1000 }, { name: '1/2 Méchoui d’agneau', price: 600 }, { name: '1/2 Méchoui d’agneau', price: 100 }, { name: '1/2 Méchoui d’agneau', price: 500 }, { name: '1/2 Méchoui d’agneau', price: 2000 }, { name: '1/2 Méchoui d’agneau', price: 4000 }, { name: '1/2 Méchoui d’agneau', price: 1000 }, { name: '1/2 Méchoui d’agneau', price: 600 }, { name: '1/2 Méchoui d’agneau', price: 100 }, { name: '1/2 Méchoui d’agneau', price: 500 }, { name: '1/2 Méchoui d’agneau', price: 2000 }, { name: '1/2 Méchoui d’agneau', price: 4000 }, { name: '1/2 Méchoui d’agneau', price: 1000 }, { name: '1/2 Méchoui d’agneau', price: 600 }, { name: '1/2 Méchoui d’agneau', price: 100 }, { name: '1/2 Méchoui d’agneau', price: 500 }, { name: '1/2 Méchoui d’agneau', price: 2000 }, { name: '1/2 Méchoui d’agneau', price: 4000 }, { name: '1/2 Méchoui d’agneau', price: 1000 }, { name: '1/2 Méchoui d’agneau', price: 600 }, { name: '1/2 Méchoui d’agneau', price: 100 }, { name: '1/2 Méchoui d’agneau', price: 500 }, { name: '1/2 Méchoui d’agneau', price: 2000 }, { name: '1/2 Méchoui d’agneau', price: 4000 }]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [currentPage, setCurrentPage] = useState(1);


    const productsPerPage = 9;
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    useEffect(() => {
        fetchProducts();
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        setAnimat(true);
        setFilteredProducts(
            products.filter(
                (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
            )
        );
        setTimeout(() => {
            setAnimat(false);
        }, 1500);
    }, [products, priceRange]);

    const fetchProducts = async () => {
        axios.get("/api/products").then((res) => {
            setProducts(res.data);
        });
    };



    const handlePageChange = (event, value) => {
        if (currentPage !== value) {
            setCurrentPage(value);
            setAnimat(true);

            const element = document.getElementById('products');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    setAnimat(false);
                }, 1500);
            }
        } else {
            return
        }
    };

    const pageNumber = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
    }


    const addProduct = (product, e) => {
        const products = cookie.get('products');


        const productsArray = products ? JSON.parse(products) : [];

        const newProduct = { name: product.name, price: product.price, quantity: 1 };

        // Check if product already exists in array
        const existingProduct = productsArray.find(product => product.name === newProduct.name);

        if (existingProduct) {
            existingProduct.quantity += newProduct.quantity;
            existingProduct.price += newProduct.price;
        } else {
            productsArray.push(newProduct);
        }

        const updatedValue = JSON.stringify(productsArray);

        cookie.set('products', updatedValue);


        Swal.fire({
            title: `${product.quantity ? product.quantity : 1} service , ${product.name} a été ajouté avec succès`,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: '#000'
        })
            .then(res => {
                if (res.isConfirmed) {
                    navigate('/reservation', { replace: true });
                }
            })
    }


    return (
        loading ?
            <Loading />
            :
            <div id="services">


                <Navbar target={'nos-service'} />



                <div className="nos-services">
                    <header>
                        <h2>Nos Services</h2>
                        <p>Meilleur sevice dans le <span>maroc</span></p>


                        <div className="scroll-downs">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                        </div>
                    </header>

                    <div className="products">
                        <section className="products-search">
                            <div className="left-search-side">
                                <h3 >Votre Panier</h3>
                                <hr />

                                <div className="range-price">
                                    <Slider value={priceRange} onChange={e => setPriceRange(e.target.value)} valueLabelDisplay={'on'} step={10} min={products.reduce((prev, cur) => (cur.price < prev.price ? cur : prev)).price} max={products.reduce((prev, cur) => (cur.price > prev.price ? cur : prev)).price} />
                                    <h4>Prix : {products.reduce((prev, cur) => (cur.price < prev.price ? cur : prev)).price} Dhs - {products.reduce((prev, cur) => (cur.price > prev.price ? cur : prev)).price} Dhs</h4>
                                </div>

                                <div data-aos="fade-down" className="category-products">
                                    <h3>Catégories des produits</h3>
                                    <ul>
                                        <li>My Bio Alimentaire</li>
                                        <li>My Buffet</li>
                                        <li>My Cake Design</li>
                                        <li>My Ice Cream</li>
                                        <li>My Menu</li>
                                        <li>My Menu Traditionnel</li>
                                        <li>My Pâtisserie</li>
                                        <li>My Petit Déjeuner</li>
                                        <li>My Thème Personnalisé</li>
                                        <li>My Wedding</li>
                                        <li>MyTraiteur</li>
                                        <li>Nos services</li>
                                    </ul>
                                </div>


                                <div className="tags-products">
                                    <h3>Tags des produits</h3>
                                </div>
                            </div>
                        </section>


                        <section className="products-show" id="products">
                            <div className="lay-products-side">
                                <div className="layout">
                                    <AiOutlineInsertRowAbove />
                                    <h3>Affichage de 1-12 sur 38 résultats</h3>
                                </div>
                                <div className="order-by">
                                    <select name="order_by" id="order_by" >
                                        <option value="low-to-high">Newest</option>
                                        <option value="low-to-high">Popular</option>
                                        <option value="low-to-high">Low Price To High</option>
                                        <option value="low-to-high">High Price To Low</option>
                                    </select>
                                    <div className="select_arrow">
                                    </div>
                                </div>
                            </div>

                            <div className="products-container" >
                                {filteredProducts.length > 0 ? currentProducts.map((product, index) => (
                                    <div data-aos="fade-right" data-aos-duration={index + "00"} key={index} className={`single-product ${animat ? 'animat-cards' : ''}`} >
                                        <img src="./Images_public/Carousel/8.jpg" alt={product.name} />
                                        <div className="body">
                                            <h3>{product.name}</h3>
                                            <p>{product.price} Dhs</p>
                                            <button onClick={e => addProduct(product, e)}>ACHETER</button>
                                        </div>
                                    </div>
                                )) : <div><h3 style={{ fontSize: '40px', textAlign: 'center', color: '#000' }}>No Products Available</h3></div>}


                            </div>

                            {filteredProducts.length > 0 && (
                            <div data-aos="fade-down" className="pagination">
                                {pageNumber.map((number) => (
                                    <button key={number} className={currentPage === number ? `button-selected` : ''} onClick={e => handlePageChange(e, number)}>
                                        {number}
                                    </button>
                                ))}
                            </div>
                        )}
                        </section>

                        
                    </div>

                </div>




                <Footer />
            </div >
    )
}

export default Services