import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import QuickView from '../Modal/QuickView';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    smartSpeed: 750,
    dots: false,
    autoplayHoverPause: true,
    margin: 30,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}

class BestSellersProducts extends Component {

    state = {
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null,
        display: false,
        panel: true
    };

    handleAddToCart = (id) => {
        this.props.addToCart(id); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item_best");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (image, price, id) => {
        this.setState({ 
            modalImage: image, 
            price: price,
            idd: id
        });
    }

    render() {
        let { products } = this.props;
        const { modalOpen } = this.state;
        return (
            <section className="best-sellers-area ptb-60">

                <ReactTooltip  />
                <ToastContainer transition={Slide} />
                
                <div className="container">
                    <div className="tab products-category-tab-style-2">
                        <div className="title">
                            <h2><span className="dot"></span> Sản phẩm bán chạy nhất</h2>
                        </div>

                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab4')}}
                                className="current"
                            >
                                <span></span>
                            </li>
                            
                            <li
                                onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab5')}}
                            >
                                <span></span>
                            </li>
                            
                            <li
                                onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab6')}}
                            >
                                <span></span>
                            </li>
                        </ul>

                        {/* Tab Content */}
                        <div className="tab_content">
                            <div id="tab4" className="tabs_item">
                                {this.state.display ? <OwlCarousel 
                                    className="product-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    {products.map((data, idx) => (
                                        <div key={idx}>
                                            <div className="single-product-item">
                                                <div className="product-image">
                                                    <Link href="/product-details">
                                                        <a>
                                                            <img src={data.image} alt="image" />
                                                        </a>
                                                    </Link>
                                                </div>

                                                <div className="product-content">
                                                    <h3>
                                                        <Link href="/product-details">
                                                            <a>{data.title}</a>
                                                        </Link>
                                                    </h3>

                                                    <div className="product-price">
                                                        <span className="new-price">${data.price}</span>
                                                    </div>

                                                    <div className="row align-items-end">
                                                        <div className="col-lg-7 col-md-6 col-7">
                                                            <Link href="#">
                                                                <a 
                                                                    className="btn btn-light"
                                                                    onClick={(e) => {
                                                                        e.preventDefault(); this.handleAddToCart(data.id)
                                                                    }}
                                                                >
                                                                    Thêm vào giỏ
                                                                </a>
                                                            </Link>
                                                        </div>

                                                        <div className="col-lg-5 col-md-6 col-5">
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a 
                                                                            data-tip="Quick View" 
                                                                            data-place="left" 
                                                                            onClick={e => {
                                                                                    e.preventDefault(); 
                                                                                    this.openModal();
                                                                                    this.handleModalData(data.quickView,data.price,data.id)
                                                                                }
                                                                            }
                                                                        >
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Wishlist" data-place="left">
                                                                            <i className="far fa-heart"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel> : ''}
                            </div>

                            <div id="tab5" className="tabs_item">
                                {this.state.display ? <OwlCarousel 
                                    className="product-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    {products.map((data, idx) => (
                                        <div key={idx}>
                                            <div className="single-product-item">
                                                <div className="product-image">
                                                    <Link href="/product-details">
                                                        <a>
                                                            <img src={data.image} alt="image" />
                                                        </a>
                                                    </Link>
                                                </div>

                                                <div className="product-content">
                                                    <h3>
                                                        <Link href="/product-details">
                                                            <a>{data.title}</a>
                                                        </Link>
                                                    </h3>

                                                    <div className="product-price">
                                                        <span className="new-price">${data.price}</span>
                                                    </div>

                                                    <div className="row align-items-end">
                                                        <div className="col-lg-7 col-md-6 col-7">
                                                            <Link href="#">
                                                                <a 
                                                                    className="btn btn-light"
                                                                    onClick={(e) => {
                                                                        e.preventDefault(); this.handleAddToCart(data.id)
                                                                    }}
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </Link>
                                                        </div>

                                                        <div className="col-lg-5 col-md-6 col-5">
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a 
                                                                            data-tip="Quick View" 
                                                                            data-place="left" 
                                                                            onClick={e => {
                                                                                    e.preventDefault(); 
                                                                                    this.openModal();
                                                                                    this.handleModalData(data.quickView,data.price,data.id)
                                                                                }
                                                                            }
                                                                        >
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Wishlist" data-place="left">
                                                                            <i className="far fa-heart"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel> : ''}
                            </div>

                            <div id="tab6" className="tabs_item">
                                {this.state.display ? <OwlCarousel 
                                    className="product-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    {products.map((data, idx) => (
                                        <div key={idx}>
                                            <div className="single-product-item">
                                                <div className="product-image">
                                                    <Link href="/product-details">
                                                        <a>
                                                            <img src={data.image} alt="image" />
                                                        </a>
                                                    </Link>
                                                </div>

                                                <div className="product-content">
                                                    <h3>
                                                        <Link href="/product-details">
                                                            <a>{data.title}</a>
                                                        </Link>
                                                    </h3>

                                                    <div className="product-price">
                                                        <span className="new-price">${data.price}</span>
                                                    </div>

                                                    <div className="row align-items-end">
                                                        <div className="col-lg-7 col-md-6 col-7">
                                                            <Link href="#">
                                                                <a 
                                                                    className="btn btn-light"
                                                                    onClick={(e) => {
                                                                        e.preventDefault(); this.handleAddToCart(data.id)
                                                                    }}
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </Link>
                                                        </div>

                                                        <div className="col-lg-5 col-md-6 col-5">
                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a 
                                                                            data-tip="Quick View" 
                                                                            data-place="left" 
                                                                            onClick={e => {
                                                                                    e.preventDefault(); 
                                                                                    this.openModal();
                                                                                    this.handleModalData(data.quickView,data.price,data.id)
                                                                                }
                                                                            }
                                                                        >
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Wishlist" data-place="left">
                                                                            <i className="far fa-heart"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel> : ''}
                            </div>
                        </div>
                    </div>
                </div>
                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    idd={this.state.idd}
                    image={this.state.modalImage} 
                    price={this.state.price}
                /> : '' }
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productsCollectionEleven
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (BestSellersProducts);
