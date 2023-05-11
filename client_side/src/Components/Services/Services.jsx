import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import './Services.scss'
import Slider from "@mui/material/Slider";
import { AiOutlineInsertRowAbove } from 'react-icons/ai'
import Loading from "../../Layouts/Loading/Loading";
import cookie from "cookies-js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import ServicesData from '../../assets/API/Services.json'

// eslint-disable-next-line react/prop-types
const Services = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);
    const [animat, setAnimat] = useState(false);
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(ServicesData);
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCategory, setCurrentCategory] = useState('all');
    const [categories, setCategories] = useState([]);

    const productsPerPage = 9;
    const totalProducts = filteredProducts?.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts?.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    useEffect(() => {
        fetchProducts();
        getCategories();
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        setAnimat(true);
        setFilteredProducts(
            products?.filter(
                (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
            )
        );
    }, [products, priceRange]);

    useEffect(() => {
        setAnimat(true);

        if (currentCategory === 'all') {
            setFilteredProducts(ServicesData)
            setPriceRange([filteredProducts?.reduce((prev, cur) => (cur.price < prev.price ? cur : prev), { price: Infinity }).price , products.reduce((prev, cur) => (cur.price > prev.price ? cur : prev), { price: 0 }).price])
        } else {
            setFilteredProducts(ServicesData?.filter((item) => item.category === currentCategory));
            setPriceRange([filteredProducts?.reduce((prev, cur) => (cur.price < prev.price ? cur : prev)).price , products.reduce((prev, cur) => (cur.price > prev.price ? cur : prev)).price])
        }

    }, [currentCategory])

    const fetchProducts = async () => {
        setProducts(ServicesData);
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


    const addProduct = (product) => {
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

    function getCategories() {
        const uniqueCategories = [...new Set(ServicesData.map(item => item.category))];
        setCategories(uniqueCategories);
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
                                        <li onClick={e => setCurrentCategory('all' , e)}>Tout</li>
                                        {categories.map((category, i) => <li onClick={e => setCurrentCategory(category , e)} key={i}>{category}</li>)}
                                    </ul>
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
                                        <option value="low-to-high">Popular</option>
                                    </select>
                                    <div className="select_arrow">
                                    </div>
                                </div>
                            </div>

                            <div className="products-container" >
                                {filteredProducts?.length > 0 ? currentProducts.map((product, index) => (
                                    <div data-aos-duration={index + "00"} key={index} className={`single-product ${animat ? 'animat-cards' : ''}`} >
                                        <img src={product.image} alt={product.name} />
                                        <div className="body">
                                            <h3>{product.name}</h3>
                                            <p>{product.price} Dhs</p>
                                            <button onClick={e => addProduct(product, e)}>ACHETER</button>
                                        </div>
                                    </div>
                                )) : <div><h3 style={{ fontSize: '40px', textAlign: 'center', color: '#000' }}>No Products Available</h3></div>}


                            </div>

                            {filteredProducts?.length > 0 && (
                                <div className="pagination">
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