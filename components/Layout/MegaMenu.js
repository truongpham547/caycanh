import React, { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';
import Cart from '../Modal/Cart';

class MegaMenu extends Component {

    state = {
        display: false,
        searchForm: false,
        collapsed: true
    };

    handleCart = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let { products } = this.props;
        return (
            <React.Fragment>
            <div className="navbar-area">
                <div id="navbar" className="comero-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    {/* <img src={require("../../images/logo.png")} alt="logo" /> */}
                                    TRUONG SON
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item p-relative">
                                        <Link href="#">
                                            <a className="nav-link active">
                                                Trang chủ 
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Cây cảnh <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">Cây cảnh để bàn</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Cây vạn lộc</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-sidebar-fullwidth">
                                                                        <a>Cây trường sinh</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Cây tùng hạnh phúc</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Cây trạng nguyên</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Cây si Bonsai</a>
                                                                    </Link>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Cây ăn trái</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-without-sidebar-fullwidth">
                                                                        <a>Cây Sung Mỹ</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Cây Ổi</a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="/category-left-sidebar-with-block">
                                                                        <a>Cây Khế</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Cây Cóc</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar-with-block">
                                                                        <a>Cây Chanh</a>
                                                                    </Link>
                                                                </li>

                                                              
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">Cây thủy sinh</h6>

                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <Link href="/category-left-sidebar">
                                                                        <a>Cây Vạn lộc Thủy Sinh</a>
                                                                    </Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link href="/category-right-sidebar">
                                                                        <a>Cây Trầu Bà Vàng Thủy Sinh</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-right-sidebar-with-block">
                                                                        <a>Cây Phú Quý Thủy Sinh</a>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <Link href="/category-without-sidebar">
                                                                        <a>Cây Nha Đam Thủy Sinh</a>
                                                                    </Link>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li>
                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/category-products-img2.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Top Trending</h4>
                                                                        </div>

                                                                        <a href="#"></a>
                                                                    </div>

                                                                    <div className="aside-trending-products">
                                                                        <img src={require("../../images/category-products-img3.jpg")} alt="image" />

                                                                        <div className="category">
                                                                            <h4>Popular Products</h4>
                                                                        </div>

                                                                        <a href="#"></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item p-relative">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Danh mục <i className="fas fa-chevron-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about">
                                                    <a className="nav-link">Cây cảnh để bàn</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/sizing-guide">
                                                    <a className="nav-link">Cây thủy sinh</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gallery">
                                                    <a className="nav-link">Sen đá - xương rồng</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/cart">
                                                    <a className="nav-link">Cây chậu treo</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/cart">
                                                    <a className="nav-link">Cây ăn trái</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Khuyến mãi hôm nay 
                                            </a>
                                        </Link>
                                   </li>
                                </ul>

                                <div className="others-option">
                                    <div className="option-item">
                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className="search-btn fas fa-search"
                                            style={{
                                                display: this.state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>

                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                                        ></i>
                                        
                                        <div 
                                            className="search-overlay search-popup"
                                            style={{
                                                display: this.state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />
                                                    <button className="search-button" type="submit">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="option-item">
                                        <Link href="/login">
                                            <a>Đăng nhập</a>
                                        </Link>
                                    </div>

                                    <div className="option-item">
                                        <Link href="#">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    this.handleCart()
                                                }}
                                            >
                                                Giỏ hàng({products.length}) <i className="fas fa-shopping-bag"></i>
                                            </a>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {this.state.display ? <Cart onClick={this.handleCart} /> : ''}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(MegaMenu)
