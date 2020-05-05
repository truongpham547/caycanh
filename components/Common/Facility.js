import React, { Component } from 'react';

class Facility extends Component {
    render() {
        return (
            <section className="facility-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-plane"></i>
                                </div>
                                <h3>Miễn phí vận chuyển </h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-money-check-alt"></i>
                                </div>
                                <h3>Hoàn trả tiền 100%</h3>
                            </div> 
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="far fa-credit-card"></i>
                                </div>
                                <h3>Nhiều phương thức thanh toán</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="facility-box">
                                <div className="icon">
                                    <i className="fas fa-headset"></i>
                                </div>
                                <h3>Hỗ trợ trực tuyến 24/7</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Facility;
