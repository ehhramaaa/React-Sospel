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
                <div className="copyright-area" style={{ marginTop:'10rem' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <span className="copyright">© 2023 SOSPEL</span>
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