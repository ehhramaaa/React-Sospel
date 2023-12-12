const Footer = () => {
    return (
        <div>
            <footer className="footer-area v2 section-bg angle-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {/* Subscribe-Area-Start */}
                            <div className="subscribe-area v2">
                                <div className="row">
                                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                                        <div className="text-box text-center">
                                            <div className="box-icon v2">
                                                <i className="fa fa-space-shuttle" aria-hidden="true" />
                                            </div>
                                            <h2 className="title">Never miss any update</h2>
                                            <div className="space-60" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <form id="mc-form">
                                            <div className="subscribe-form">
                                                <input type="email" className="form-input" id="mc-email" name="email" placeholder="Your email" />
                                                <button className="bttn-5 submit" type="submit">Pre-Book My Order</button>
                                                <div className="info">*Your email address is safe with us. We never share your email address.</div>
                                            </div>
                                            <label className="mt10" htmlFor="mc-email" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Subscribe-Area-End */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        {/* Footer-Widget-Start */}
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget">
                                    <h4 className="widget-title">About Us</h4>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget">
                                    <h4 className="widget-title">Quick Link</h4>
                                    <ul>
                                        <li><a href="#home-area">Home</a></li>
                                        <li><a href="#about-area">About</a></li>
                                        <li><a href="#testimonial-area">Testimonial</a></li>
                                        <li><a href="#contact-area">Contact Us!</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="widget">
                                    <h4 className="widget-title">Social</h4>
                                    <p>Please connect with our social profiles.</p>
                                    <div className="space-30" />
                                    <div className="social-menu">
                                        <a href="#"><i className="fa fa-facebook" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer-Widget-End */}
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <span className="copyright">© 2019 Jupiter. All Rights Reserved</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productShape1">
                    <div className="productShape1inner">
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer