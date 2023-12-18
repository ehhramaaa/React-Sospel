import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Preloader from "../components/Preloader"
import { useEffect } from 'react';

const Homepage = () => {
    useEffect(() => {
        $('.product-single-slider').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });
        $('.product-slide').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });

        $('.product-slider-2').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('.testimonails-2').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.sponsors').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });

        $('.mainmenu-area a[href*="#"]')
            .not('[href="#"]')
            .not('[href="#0"]')
            .on('click', function (event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 500, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });

        $("h1,h2,h3,h4,h5,h6").each(function () {
            var title_val = $(this).text();
            $(this).attr('title', title_val);
        });

        $('body').clickBubble({
            color: '#674DD6',
            size: 50,
            time: 500,
            borderWidth: 2
        });
    }, []);
    return (
        <>
            < Preloader />
            < Navbar />

            {/* Header */}
            <header className="header-area v2 angle-1" id="home-area">
                <div className="container">
                    <div className="row row-flex">
                        <div className="col-xs-12 col-md-7">
                            <div className="text-box text-white">
                                <h2 className="title">Delicious Pele Sausage</h2>
                                <p>Every bite is an adventure of taste. With the tenderness of Pele's Sausage, Which Captivates Your Tongue and Heart!</p>
                                <div className="space-30" />
                                <a href="#product-area" className="bttn-4">Order Now</a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-5 text-right section-bg" style={{ backgroundImage: 'url("/src/assets/images/circle-bg-2.png")', backgroundSize: '100% auto' }}>
                            <div className="space-60 hidden-md hidden-lg" />
                            <div className="product-single-slider wow zoomIn">
                                <div className="item">
                                    <img src="/src/assets/img/product2.png" alt />
                                </div>
                                <div className="item">
                                    <img src="/src/assets/img/product3.png" alt />
                                </div>
                                <div className="item">
                                    <img src="/src/assets/img/product4.png" alt />
                                </div>
                                <div className="item">
                                    <img src="/src/assets/img/product5.png" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topshapewrap">
                    <div className="topshape" />
                </div>
            </header>
            {/* End Header */}

            {/* Product Intro */}
            <section className="intro-area v2 section-padding circle-bg relative-box" style={{ backgroundImage: 'url("/src/assets/images/watch-round-1.html"),url("/src/assets/img/about2.png"),url("/src/assets/images/circle-bg.png")', backgroundPosition: 'right 58vw top 5vh, right 58vw bottom 10vh, right 60vw center' }} id="about-area">
                <div className="container">
                    <div className="row row-flex">
                        <div className="col-xs-12 col-md-6 col-md-offset-6">
                            <div className="text-box">
                                <div className="box-icon v2">
                                    <i className="fa fa-paper-plane" />
                                </div>
                                <h3 className="title">Order your Pele sausage with a variety of different flavors</h3>
                                <div className="space-30" />
                                <a href="#product-area" className="bttn-5">Discover Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="intro-area v2 section-padding circle-bg" style={{ backgroundImage: 'url("/src/assets/img/about.png"),url("/src/assets/images/watch-round-4.html"),url("/src/assets/images/circle-bg.png")', backgroundPosition: 'left 58vw bottom 17vh, left 75vw top 10vh, left 56vw center' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <div className="text-box">
                                <div className="box-icon v2">
                                    <i className="fa fa-dribbble" />
                                </div>
                                <h4 className="title">With the tenderness of Pele sausage and delicious taste, Pele sausage is suitable for foodies</h4>
                                <div className="space-30" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Product Intro */}

            {/* Service */}
            <section className="feature-area v2 section-padding" id="service-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-md-offset-3">
                            <div className="text-box text-center">
                                <div className="box-icon v2">
                                    <i className="fa fa-gg" aria-hidden="true" />
                                </div>
                                <h2 className="title">More flavors of pele sausage</h2>
                                <div className="space-60" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="feature-box v2 wow fadeInLeft" data-wow-delay="0.3s">
                                <div className="box-icon">
                                    <i className="fa fa-pencil" />
                                </div>
                                <h3 className="title">Spicy Sospel</h3>
                                <p className="desc">Full of spicy flavors</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="feature-box v3 wow fadeInLeft" data-wow-delay="0.5s">
                                <div className="box-icon">
                                    <i className="fa fa-cloud" />
                                </div>
                                <h3 className="title">Sweet Sospel</h3>
                                <p className="desc">Dull of sweet taste</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="feature-box v4 wow fadeInLeft" data-wow-delay="0.7s">
                                <div className="box-icon">
                                    <i className="fa fa-crop" />
                                </div>
                                <h3 className="title">Salty Sospel</h3>
                                <p className="desc">Full of salty flavors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* End Service */}

            {/* Testimonial */}
            <section className="section-padding testimonial-area v2" id="testimonial-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-md-offset-3">
                            <div className="text-box text-center">
                                <div className="box-icon v2">
                                    <i className="fa fa-bolt" aria-hidden="true" />
                                </div>
                                <h2 className="title">People always
                                    Loved the deliciousness of our pele sausage</h2>
                                <div className="space-60" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="testimonails-2 paginate">
                                <div className="single-testimonial">
                                    <p className="desc">I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!.</p>
                                    <figure className="thumb">
                                        <img src="/src/assets/images/testimonial-1.png" alt />
                                    </figure>
                                    <h4 className="name">Sayma Sultana</h4>
                                    <div className="posi">Web Developer</div>
                                </div>
                                <div className="single-testimonial">
                                    <p className="desc">I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!.</p>
                                    <figure className="thumb">
                                        <img src="/src/assets/images/testimonial-2.png" alt />
                                    </figure>
                                    <h4 className="name">Sayem Rahamn</h4>
                                    <div className="posi">Graphic Design</div>
                                </div>
                                <div className="single-testimonial">
                                    <p className="desc">I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!.</p>
                                    <figure className="thumb">
                                        <img src="/src/assets/images/testimonial-3.png" alt />
                                    </figure>
                                    <h4 className="name">Jhoni Zwe</h4>
                                    <div className="posi">Founder at Pixelite</div>
                                </div>
                                <div className="single-testimonial">
                                    <p className="desc">I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!.</p>
                                    <figure className="thumb">
                                        <img src="/src/assets/images/testimonial-4.png" alt />
                                    </figure>
                                    <h4 className="name">Shahriar Hossain</h4>
                                    <div className="posi">Founder at Pixelite</div>
                                </div>
                                <div className="single-testimonial">
                                    <p className="desc">I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!.</p>
                                    <figure className="thumb">
                                        <img src="/src/assets/images/testimonial-5.png" alt />
                                    </figure>
                                    <h4 className="name">Haydar Ali</h4>
                                    <div className="posi">Head Of TTCM</div>
                                </div>
                                <div className="single-testimonial">
                                    <p className="desc">I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!.</p>
                                    <figure className="thumb">
                                        <img src="/src/assets/images/testimonial-6.png" alt />
                                    </figure>
                                    <h4 className="name">Shek Hamida</h4>
                                    <div className="posi">Founder at Pixelite</div>
                                </div>
                                <div className="single-testimonial">
                                    <p className="desc">I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!.</p>
                                    <figure className="thumb">
                                        <img src="/src/assets/images/testimonial-7.png" alt />
                                    </figure>
                                    <h4 className="name">Jorin Zuel</h4>
                                    <div className="posi">Founder at Pixelite</div>
                                </div>
                                <div className="single-testimonial">
                                    <p className="desc">I’ve read a ton of blog posts about how some startups hit this milestone with ease. They came up with an amazing idea that “just clicked”, made!.</p>
                                    <figure className="thumb">
                                        <img src="/src/assets/images/testimonial-8.png" alt />
                                    </figure>
                                    <h4 className="name">Ashekur Rahman</h4>
                                    <div className="posi">Web Designer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Testimonial */}

            {/* Contact */}
            <section className="info-area v2 section-padding" id="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-md-offset-3">
                            <div className="text-box text-center">
                                <div className="box-icon v2">
                                    <i className="fa fa-map-signs" aria-hidden="true" />
                                </div>
                                <h2 className="title">Our place</h2>
                                <div className="space-60" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="info-box wow fadeIn" data-wow-delay="0.3s">
                                <div className="box-image">
                                    <img src="/src/assets/img/contact.png" alt />
                                </div>
                                <div className="box-content">
                                    <h3 className="title">Bandung</h3>
                                    <p className="desc">No.122, Jl.Dipati Ukur, Lebak Gede, Coblong, Bandung City, West Java 40132</p>
                                    <h4 className="number">6281317398575</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Contact */}

            < Footer />
        </>
    )
}

export default Homepage