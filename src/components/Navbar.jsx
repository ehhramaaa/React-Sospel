
const Navbar = () => {
    return (
        <div>
            <div className="mainmenu-area transparent v2" data-spy="affix" data-offset-top={197}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 row-flex">
                            <div className="site-brand">
                                <a href="#" className="logo">Jupiter</a>
                            </div>
                            <button className="burger">
                                <span className="bar" />
                                <span className="bar" />
                                <span className="bar" />
                            </button>
                            <div className="mainmenu">
                                <ul className="nav">
                                    <li><a href="#home-area">Home</a></li>
                                    <li><a href="#about-area">About</a></li>
                                    <li><a href="#product-area">Product</a></li>
                                    <li><a href="#testimonial-area">Testimonial</a></li>
                                    <li><a href="#contact-area">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar