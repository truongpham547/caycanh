import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
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
        1200: {
            items: 4,
        }
    }
}

class ProductCategories extends Component {
    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <section className="offer-area ptb-60">
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span>Các loại cây cảnh mà chúng tôi có</h2>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="offer-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-offer-box">
                                    <img src={require("../../images/category-image/category-img-1.png")} alt="image" />

                                    <div className="offer-content">
                                        <h3>Cây cảnh để bàn</h3>
                                        <span>65 sản phẩm</span>
                                    </div>

                                    <Link href="#">
                                        <a></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-offer-box">
                                <img src={require("../../images/category-image/category-img-2.png")} alt="image" />

                                    <div className="offer-content">
                                        <h3>Cây thủy sinh</h3>
                                        <span>155 sản phẩm</span>
                                    </div>

                                    <Link href="#">
                                        <a></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-offer-box">
                                <img src={require("../../images/category-image/category-img-3.png")} alt="image" />

                                    <div className="offer-content">
                                        <h3>Sen đá , xương rồng</h3>
                                        <span>175 sản phẩm</span>
                                    </div>

                                    <Link href="#">
                                        <a></a>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="single-offer-box">
                                <img src={require("../../images/category-image/category-img-4.png")} alt="image" />

                                    <div className="offer-content">
                                        <h3>Cây ăn trái</h3>
                                        <span>548 sản phẩm</span>
                                    </div>

                                    <Link href="#">
                                        <a></a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="single-offer-box">
                                <img src={require("../../images/category-image/category-img-4.png")} alt="image" />

                                    <div className="offer-content">
                                        <h3>Cây ăn trái</h3>
                                        <span>548 sản phẩm</span>
                                    </div>

                                    <Link href="#">
                                        <a></a>
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel> : '' }
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductCategories;
