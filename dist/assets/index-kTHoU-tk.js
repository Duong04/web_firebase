(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=o(l);fetch(l.href,d)}})();const Ee=()=>`
    <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
    <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div class="col-lg-6 px-5 text-start">
            <small><i class="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
            <small class="ms-4"><i class="fa fa-envelope me-2"></i>info@example.com</small>
        </div>
        <div class="col-lg-6 px-5 text-end">
            <small>Follow us:</small>
            <a class="text-body ms-3" href=""><i class="fab fa-facebook-f"></i></a>
            <a class="text-body ms-3" href=""><i class="fab fa-twitter"></i></a>
            <a class="text-body ms-3" href=""><i class="fab fa-linkedin-in"></i></a>
            <a class="text-body ms-3" href=""><i class="fab fa-instagram"></i></a>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="/" data-navigo class="navbar-brand ms-4 ms-lg-0">
            <h1 class="fw-bold text-primary m-0">F<span class="text-secondary">oo</span>dy</h1>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/" class="nav-item nav-link" data-navigo>Home</a>
                <a href="/about" class="nav-item nav-link" data-navigo>About Us</a>
                <a href="/products" class="nav-item nav-link" data-navigo>Products</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu m-0">
                        <a href="/blog" class="dropdown-item" data-navigo>Blog Grid</a>
                        <a href="/feature" class="dropdown-item" data-navigo>Our Features</a>
                        <a href="/testimonial" class="dropdown-item" data-navigo>Testimonial</a>
                        <a href="/adminCategories" class="dropdown-item" data-navigo>Quản trị viên</a>
                    </div>
                </div>
                <a href="/contact" class="nav-item nav-link" data-navigo>Contact Us</a>
            </div>
            <div class="d-none d-lg-flex ms-2">
                <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                    <small class="fa fa-search text-body"></small>
                </a>
                <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                    <small class="fa fa-user text-body"></small>
                </a>
                <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                    <small class="fa fa-shopping-bag text-body"></small>
                </a>
            </div>
        </div>
    </nav>
    </div>
`,Ae=()=>`
<div class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
<div class="container py-5">
    <div class="row g-5">
        <div class="col-lg-3 col-md-6">
            <h1 class="fw-bold text-primary mb-4">F<span class="text-secondary">oo</span>dy</h1>
            <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
            <div class="d-flex pt-2">
                <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-youtube"></i></a>
                <a class="btn btn-square btn-outline-light rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Address</h4>
            <p><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
        </div>
        <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Quick Links</h4>
            <a class="btn btn-link" href="">About Us</a>
            <a class="btn btn-link" href="">Contact Us</a>
            <a class="btn btn-link" href="">Our Services</a>
            <a class="btn btn-link" href="">Terms & Condition</a>
            <a class="btn btn-link" href="">Support</a>
        </div>
        <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div class="position-relative mx-auto" style="max-width: 400px;">
                <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid copyright">
    <div class="container">
        <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
                <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                <br>Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </div>
        </div>
    </div>
</div>
</div>
`,Xo=`<!-- Carousel Start -->\r
<div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">\r
    <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">\r
        <div class="carousel-inner">\r
            <div class="carousel-item active">\r
                <img class="w-100" src="img/carousel-1.jpg" alt="Image">\r
                <div class="carousel-caption">\r
                    <div class="container">\r
                        <div class="row justify-content-start">\r
                            <div class="col-lg-7">\r
                                <h1 class="display-2 mb-5 animated slideInDown">Organic Food Is Good For Health</h1>\r
                                <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>\r
                                <a href="" class="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="carousel-item">\r
                <img class="w-100" src="img/carousel-2.jpg" alt="Image">\r
                <div class="carousel-caption">\r
                    <div class="container">\r
                        <div class="row justify-content-start">\r
                            <div class="col-lg-7">\r
                                <h1 class="display-2 mb-5 animated slideInDown">Natural Food Is Always Healthy</h1>\r
                                <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>\r
                                <a href="" class="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"\r
            data-bs-slide="prev">\r
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\r
            <span class="visually-hidden">Previous</span>\r
        </button>\r
        <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"\r
            data-bs-slide="next">\r
            <span class="carousel-control-next-icon" aria-hidden="true"></span>\r
            <span class="visually-hidden">Next</span>\r
        </button>\r
    </div>\r
</div>\r
<!-- Carousel End -->\r
\r
\r
<!-- About Start -->\r
<div class="container-xxl py-5">\r
    <div class="container">\r
        <div class="row g-5 align-items-center">\r
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">\r
                <div class="about-img position-relative overflow-hidden p-5 pe-0">\r
                    <img class="img-fluid w-100" src="img/about.jpg">\r
                </div>\r
            </div>\r
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">\r
                <h1 class="display-5 mb-4">Best Organic Fruits And Vegetables</h1>\r
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>\r
                <p><i class="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>\r
                <p><i class="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>\r
                <p><i class="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>\r
                <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<!-- About End -->\r
\r
\r
<!-- Feature Start -->\r
<div class="container-fluid bg-light bg-icon my-5 py-6">\r
    <div class="container">\r
        <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">\r
            <h1 class="display-5 mb-3">Our Features</h1>\r
            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>\r
        </div>\r
        <div class="row g-4">\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">\r
                <div class="bg-white text-center h-100 p-4 p-xl-5">\r
                    <img class="img-fluid mb-4" src="img/icon-1.png" alt="">\r
                    <h4 class="mb-3">Natural Process</h4>\r
                    <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>\r
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>\r
                </div>\r
            </div>\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">\r
                <div class="bg-white text-center h-100 p-4 p-xl-5">\r
                    <img class="img-fluid mb-4" src="img/icon-2.png" alt="">\r
                    <h4 class="mb-3">Organic Products</h4>\r
                    <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>\r
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>\r
                </div>\r
            </div>\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">\r
                <div class="bg-white text-center h-100 p-4 p-xl-5">\r
                    <img class="img-fluid mb-4" src="img/icon-3.png" alt="">\r
                    <h4 class="mb-3">Biologically Safe</h4>\r
                    <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>\r
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<!-- Feature End -->\r
\r
\r
<!-- Product Start -->\r
<div class="container-xxl py-5">\r
    <div class="container">\r
        <div class="row g-0 gx-5 align-items-end">\r
            <div class="col-lg-6">\r
                <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">\r
                    <h1 class="display-5 mb-3">Our Products</h1>\r
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>\r
                </div>\r
            </div>\r
            <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">\r
                <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">\r
                    <li class="nav-item me-2">\r
                        <a class="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Vegetable</a>\r
                    </li>\r
                    <li class="nav-item me-2">\r
                        <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>\r
                    </li>\r
                    <li class="nav-item me-0">\r
                        <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>\r
                    </li>\r
                </ul>\r
            </div>\r
        </div>\r
        <div class="tab-content">\r
            <div id="tab-1" class="tab-pane fade show p-0 active">\r
                <div id="vegetables" class="row g-4">\r
                    \r
                    \r
                </div>\r
                <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">\r
                    <a class="btn btn-primary rounded-pill py-3 px-5 mt-5" href="">Browse More Products</a>\r
                </div>\r
            </div>\r
            <div id="tab-2" class="tab-pane fade show p-0">\r
                <div id="fruits" class="row g-4">\r
                    \r
                </div>\r
                <div class="col-12 text-center">\r
                    <a class="btn btn-primary rounded-pill py-3 px-5 mt-5" href="">Browse More Products</a>\r
                </div>\r
            </div>\r
            <div id="tab-3" class="tab-pane fade show p-0">\r
                <div id="juice" class="row g-4">\r
                    \r
                </div>\r
                <div class="col-12 text-center">\r
                    <a class="btn btn-primary rounded-pill py-3 px-5 mt-5" href="">Browse More Products</a>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<!-- Product End -->\r
\r
\r
<!-- Firm Visit Start -->\r
<div class="container-fluid bg-primary bg-icon mt-5 py-6">\r
    <div class="container">\r
        <div class="row g-5 align-items-center">\r
            <div class="col-md-7 wow fadeIn" data-wow-delay="0.1s">\r
                <h1 class="display-5 text-white mb-3">Visit Our Firm</h1>\r
                <p class="text-white mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>\r
            </div>\r
            <div class="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">\r
                <a class="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<!-- Firm Visit End -->\r
\r
\r
<!-- Testimonial Start -->\r
<div class="container-fluid bg-light bg-icon py-6 mb-5">\r
    <div class="container">\r
        <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">\r
            <h1 class="display-5 mb-3">Customer Review</h1>\r
            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>\r
        </div>\r
        <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">\r
            <div class="testimonial-item position-relative bg-white p-5 mt-4">\r
                <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>\r
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>\r
                <div class="d-flex align-items-center">\r
                    <img class="flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" alt="">\r
                    <div class="ms-3">\r
                        <h5 class="mb-1">Client Name</h5>\r
                        <span>Profession</span>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="testimonial-item position-relative bg-white p-5 mt-4">\r
                <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>\r
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>\r
                <div class="d-flex align-items-center">\r
                    <img class="flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" alt="">\r
                    <div class="ms-3">\r
                        <h5 class="mb-1">Client Name</h5>\r
                        <span>Profession</span>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="testimonial-item position-relative bg-white p-5 mt-4">\r
                <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>\r
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>\r
                <div class="d-flex align-items-center">\r
                    <img class="flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" alt="">\r
                    <div class="ms-3">\r
                        <h5 class="mb-1">Client Name</h5>\r
                        <span>Profession</span>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="testimonial-item position-relative bg-white p-5 mt-4">\r
                <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>\r
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>\r
                <div class="d-flex align-items-center">\r
                    <img class="flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" alt="">\r
                    <div class="ms-3">\r
                        <h5 class="mb-1">Client Name</h5>\r
                        <span>Profession</span>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<!-- Testimonial End -->\r
\r
\r
<!-- Blog Start -->\r
<div class="container-xxl py-5">\r
    <div class="container">\r
        <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">\r
            <h1 class="display-5 mb-3">Latest Blog</h1>\r
            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>\r
        </div>\r
        <div class="row g-4">\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">\r
                <img class="img-fluid" src="img/blog-1.jpg" alt="">\r
                <div class="bg-light p-4">\r
                    <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                    <div class="text-muted border-top pt-4">\r
                        <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                        <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">\r
                <img class="img-fluid" src="img/blog-2.jpg" alt="">\r
                <div class="bg-light p-4">\r
                    <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                    <div class="text-muted border-top pt-4">\r
                        <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                        <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">\r
                <img class="img-fluid" src="img/blog-3.jpg" alt="">\r
                <div class="bg-light p-4">\r
                    <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                    <div class="text-muted border-top pt-4">\r
                        <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                        <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>`,Yo=()=>`
        ${Ee()}
        ${Xo}
        ${Ae()}
    `,Zo=`    <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <h1 class="display-3 mb-3 animated slideInDown">Contact Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-dark active" aria-current="page">Contact Us</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Contact Start -->
    <div class="container-xxl py-6">
        <div class="container">
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <h1 class="display-5 mb-3">Contact Us</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div class="row g-5 justify-content-center">
                <div class="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
                        <h5 class="text-white">Call Us</h5>
                        <p class="mb-5"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <h5 class="text-white">Email Us</h5>
                        <p class="mb-5"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <h5 class="text-white">Office Address</h5>
                        <p class="mb-5"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <h5 class="text-white">Follow Us</h5>
                        <div class="d-flex pt-2">
                            <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name">
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email">
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject">
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 200px"></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact End -->

    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>
    `,Qo=()=>`
        ${Ee()}
        ${Zo}
        ${Ae()}
    `,es=`<div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">\r
    <div class="container">\r
        <h1 class="display-3 mb-3 animated slideInDown">Products</h1>\r
        <nav aria-label="breadcrumb animated slideInDown">\r
            <ol class="breadcrumb mb-0">\r
                <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>\r
                <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>\r
                <li class="breadcrumb-item text-dark active" aria-current="page">Products</li>\r
            </ol>\r
        </nav>\r
    </div>\r
</div>\r
\r
<div class="container-xxl py-5">\r
    <div class="container">\r
        <div class="row g-0 gx-5 align-items-end">\r
            <div class="col-lg-6">\r
                <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">\r
                    <h1 class="display-5 mb-3">Our Products</h1>\r
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>\r
                </div>\r
            </div>\r
            <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">\r
                <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">\r
                    <li class="nav-item me-2">\r
                        <a class="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-defaut">All products</a>\r
                    </li>\r
                    <li class="nav-item me-2">\r
                        <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-1">Vegetable</a>\r
                    </li>\r
                    <li class="nav-item me-2">\r
                        <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>\r
                    </li>\r
                    <li class="nav-item me-0">\r
                        <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>\r
                    </li>\r
                </ul>\r
            </div>\r
        </div>\r
        <div class="tab-content">\r
            <div id="tab-defaut" class="tab-pane fade show p-0 active">\r
                <div id="all" class="row g-4">\r
                    \r
                </div>\r
            </div>\r
            <div id="tab-1" class="tab-pane fade show p-0">\r
                <div id="vegetables" class="row g-4">\r
                    \r
                </div>\r
            </div>\r
            <div id="tab-2" class="tab-pane fade show p-0">\r
                <div id="fruits" class="row g-4">\r
                    \r
                </div>\r
            </div>\r
            <div id="tab-3" class="tab-pane fade show p-0">\r
                <div id="juice" class="row g-4">\r
                    \r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>`,ts=()=>`
        ${Ee()}
        ${es}
        ${Ae()}
    `,ns=`<!-- Page Header Start -->\r
<div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">\r
    <div class="container">\r
        <h1 class="display-3 mb-3 animated slideInDown">About Us</h1>\r
        <nav aria-label="breadcrumb animated slideInDown">\r
            <ol class="breadcrumb mb-0">\r
                <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>\r
                <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>\r
                <li class="breadcrumb-item text-dark active" aria-current="page">About Us</li>\r
            </ol>\r
        </nav>\r
    </div>\r
</div>\r
<!-- Page Header End -->\r
\r
\r
<!-- About Start -->\r
<div class="container-xxl py-5">\r
    <div class="container">\r
        <div class="row g-5 align-items-center">\r
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">\r
                <div class="about-img position-relative overflow-hidden p-5 pe-0">\r
                    <img class="img-fluid w-100" src="img/about.jpg">\r
                </div>\r
            </div>\r
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">\r
                <h1 class="display-5 mb-4">Best Organic Fruits And Vegetables</h1>\r
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>\r
                <p><i class="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>\r
                <p><i class="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>\r
                <p><i class="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>\r
                <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<!-- About End -->\r
\r
\r
<!-- Firm Visit Start -->\r
<div class="container-fluid bg-primary bg-icon mt-5 py-6">\r
    <div class="container">\r
        <div class="row g-5 align-items-center">\r
            <div class="col-md-7 wow fadeIn" data-wow-delay="0.1s">\r
                <h1 class="display-5 text-white mb-3">Visit Our Firm</h1>\r
                <p class="text-white mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>\r
            </div>\r
            <div class="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">\r
                <a class="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<!-- Firm Visit End -->\r
\r
\r
<!-- Feature Start -->\r
<div class="container-fluid bg-light bg-icon py-6">\r
    <div class="container">\r
        <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">\r
            <h1 class="display-5 mb-3">Our Features</h1>\r
            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>\r
        </div>\r
        <div class="row g-4">\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">\r
                <div class="bg-white text-center h-100 p-4 p-xl-5">\r
                    <img class="img-fluid mb-4" src="img/icon-1.png" alt="">\r
                    <h4 class="mb-3">Natural Process</h4>\r
                    <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>\r
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>\r
                </div>\r
            </div>\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">\r
                <div class="bg-white text-center h-100 p-4 p-xl-5">\r
                    <img class="img-fluid mb-4" src="img/icon-2.png" alt="">\r
                    <h4 class="mb-3">Organic Products</h4>\r
                    <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>\r
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>\r
                </div>\r
            </div>\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">\r
                <div class="bg-white text-center h-100 p-4 p-xl-5">\r
                    <img class="img-fluid mb-4" src="img/icon-3.png" alt="">\r
                    <h4 class="mb-3">Biologically Safe</h4>\r
                    <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>\r
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>`,rs=()=>`
        ${Ee()}
        ${ns}
        ${Ae()}
    `,as=`    <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">\r
        <div class="container">\r
            <h1 class="display-3 mb-3 animated slideInDown">Blog Grid</h1>\r
            <nav aria-label="breadcrumb animated slideInDown">\r
                <ol class="breadcrumb mb-0">\r
                    <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>\r
                    <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>\r
                    <li class="breadcrumb-item text-dark active" aria-current="page">Blog Grid</li>\r
                </ol>\r
            </nav>\r
        </div>\r
    </div>\r
    <!-- Blog Start -->\r
    <div class="container-xxl py-6">\r
        <div class="container">\r
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">\r
                <h1 class="display-5 mb-3">Latest Blog</h1>\r
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>\r
            </div>\r
            <div class="row g-4">\r
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">\r
                    <img class="img-fluid" src="img/blog-1.jpg" alt="">\r
                    <div class="bg-light p-4">\r
                        <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                        <div class="text-muted border-top pt-4">\r
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">\r
                    <img class="img-fluid" src="img/blog-2.jpg" alt="">\r
                    <div class="bg-light p-4">\r
                        <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                        <div class="text-muted border-top pt-4">\r
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">\r
                    <img class="img-fluid" src="img/blog-3.jpg" alt="">\r
                    <div class="bg-light p-4">\r
                        <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                        <div class="text-muted border-top pt-4">\r
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">\r
                    <img class="img-fluid" src="img/blog-2.jpg" alt="">\r
                    <div class="bg-light p-4">\r
                        <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                        <div class="text-muted border-top pt-4">\r
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">\r
                    <img class="img-fluid" src="img/blog-3.jpg" alt="">\r
                    <div class="bg-light p-4">\r
                        <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                        <div class="text-muted border-top pt-4">\r
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">\r
                    <img class="img-fluid" src="img/blog-1.jpg" alt="">\r
                    <div class="bg-light p-4">\r
                        <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                        <div class="text-muted border-top pt-4">\r
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">\r
                    <img class="img-fluid" src="img/blog-3.jpg" alt="">\r
                    <div class="bg-light p-4">\r
                        <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                        <div class="text-muted border-top pt-4">\r
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">\r
                    <img class="img-fluid" src="img/blog-1.jpg" alt="">\r
                    <div class="bg-light p-4">\r
                        <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                        <div class="text-muted border-top pt-4">\r
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">\r
                    <img class="img-fluid" src="img/blog-2.jpg" alt="">\r
                    <div class="bg-light p-4">\r
                        <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>\r
                        <div class="text-muted border-top pt-4">\r
                            <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>\r
                            <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">\r
                    <a class="btn btn-primary rounded-pill py-3 px-5" href="">Load More</a>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Back to Top -->\r
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>\r
`,is=()=>`
        ${Ee()}
        ${as}
        ${Ae()}
    `,os=`<!-- Page Header Start -->\r
<div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">\r
    <div class="container">\r
        <h1 class="display-3 mb-3 animated slideInDown">Features</h1>\r
        <nav aria-label="breadcrumb animated slideInDown">\r
            <ol class="breadcrumb mb-0">\r
                <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>\r
                <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>\r
                <li class="breadcrumb-item text-dark active" aria-current="page">Features</li>\r
            </ol>\r
        </nav>\r
    </div>\r
</div>\r
<!-- Page Header End -->\r
\r
\r
<!-- Feature Start -->\r
<div class="container-fluid bg-light bg-icon py-6">\r
    <div class="container">\r
        <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">\r
            <h1 class="display-5 mb-3">Our Features</h1>\r
            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>\r
        </div>\r
        <div class="row g-4">\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">\r
                <div class="bg-white text-center h-100 p-4 p-xl-5">\r
                    <img class="img-fluid mb-4" src="img/icon-1.png" alt="">\r
                    <h4 class="mb-3">Natural Process</h4>\r
                    <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>\r
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>\r
                </div>\r
            </div>\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">\r
                <div class="bg-white text-center h-100 p-4 p-xl-5">\r
                    <img class="img-fluid mb-4" src="img/icon-2.png" alt="">\r
                    <h4 class="mb-3">Organic Products</h4>\r
                    <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>\r
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>\r
                </div>\r
            </div>\r
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">\r
                <div class="bg-white text-center h-100 p-4 p-xl-5">\r
                    <img class="img-fluid mb-4" src="img/icon-3.png" alt="">\r
                    <h4 class="mb-3">Biologically Safe</h4>\r
                    <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>\r
                    <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>`,qr=()=>`
        ${Ee()}
        ${os}
        ${Ae()}
    `,ss=`
    <!-- END nav -->
    <div class="hero-wrap hero-bread" style="background-size: cover;padding: 10rem 0px;background-image: url('images/bg_1.jpg');">
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center">
          	<p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span class="mr-2"><a href="/products">Product</a></span> <span>Product Single</span></p>
            <h1 class="mb-0 bread">Product Detail</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section">
    	<div class="container">
    		<div class="row">
    			<div class="col-lg-6 mb-5 ftco-animate">
    				<a href="" class="image-popup"><img src="images/product-1.jpg" class="img-fluid" alt="Colorlib Template"></a>
    			</div>
    			<div class="col-lg-6 product-details pl-md-5 ftco-animate mt-5">
    				<h3>Bell Pepper</h3>
    				<div class="rating d-flex">
							<p class="text-left mr-4">
								<a href="#" class="mr-2">5.0</a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
							</p>
							<p class="text-left mr-4">
								<a href="#" class="mr-2" style="color: #000;">100 <span style="color: #bbb;">Rating</span></a>
							</p>
							<p class="text-left">
								<a href="#" class="mr-2" style="color: #000;">500 <span style="color: #bbb;">Sold</span></a>
							</p>
						</div>
    				<p class="price"><span>$120.00</span></p>
    				<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.
						</p>
						<div class="row mt-4">
							<div class="col-md-6">
								<div class="form-group d-flex">
		              <div class="select-wrap">
	                  <div class="icon"><span class="ion-ios-arrow-down"></span></div>
	                  <select name="" id="" class="form-control">
	                  	<option value="">Small</option>
	                    <option value="">Medium</option>
	                    <option value="">Large</option>
	                    <option value="">Extra Large</option>
	                  </select>
	                </div>
		            </div>
							</div>
							<div class="w-100"></div>
							<div class="d-flex mt-3 mb-3">
	             	<span class="input-group-btn mr-2">
	                	<button style="border-color: #ccc;" type="button" class="quantity-left-minus btn border-1"  data-type="minus" data-field="">
							<i class="fa-solid fa-minus"></i>
	                	</button>
	            		</span>
	             	<input style="width: 80px;" type="text" id="quantity" name="quantity" class="form-control input-number text-center" value="1" min="1" max="100">
	             	<span class="input-group-btn ml-2">
	                	<button style="border-color: #ccc;" type="button" class="quantity-right-plus btn border-1" data-type="plus" data-field="">
							<i class="fa-solid fa-plus"></i>
	                 </button>
	             	</span>
	          	</div>
	          	<div class="w-100"></div>
	          	<div class="col-md-12">
	          		<p style="color: #000;">600 kg available</p>
	          	</div>
          	</div>
          	<p><a href="cart.html" class="btn btn-primary py-3 px-5">Add to Cart</a></p>
    			</div>
    		</div>
    	</div>
    </section>

    <section class="ftco-section">
    	<div class="container">
				<div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section text-center ftco-animate">
          	<span class="subheading">Products</span>
            <h2 class="mb-4">Related Products</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>   		
    	</div>
    	<div class="container">
    		<div class="row g-4">
				<div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
					<div class="product-item">
						<div class="position-relative bg-light overflow-hidden">
							<img class="img-fluid w-100" src="img/product-1.jpg" alt="">
							<div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
						</div>
						<div class="text-center p-4">
							<a class="d-block h5 mb-2" href="">Fresh Tomato</a>
							<span class="text-primary me-1">$19.00</span>
							<span class="text-body text-decoration-line-through">$29.00</span>
						</div>
						<div class="d-flex border-top">
							<small class="w-50 text-center border-end py-2">
								<a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
							</small>
							<small class="w-50 text-center py-2">
								<a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
							</small>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
					<div class="product-item">
						<div class="position-relative bg-light overflow-hidden">
							<img class="img-fluid w-100" src="img/product-2.jpg" alt="">
							<div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
						</div>
						<div class="text-center p-4">
							<a class="d-block h5 mb-2" href="/productDetails">Fresh Tomato</a>
							<span class="text-primary me-1">$19.00</span>
							<span class="text-body text-decoration-line-through">$29.00</span>
						</div>
						<div class="d-flex border-top">
							<small class="w-50 text-center border-end py-2">
								<a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
							</small>
							<small class="w-50 text-center py-2">
								<a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
							</small>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
					<div class="product-item">
						<div class="position-relative bg-light overflow-hidden">
							<img class="img-fluid w-100" src="img/product-3.jpg" alt="">
							<div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
						</div>
						<div class="text-center p-4">
							<a class="d-block h5 mb-2" href="">Fresh Tomato</a>
							<span class="text-primary me-1">$19.00</span>
							<span class="text-body text-decoration-line-through">$29.00</span>
						</div>
						<div class="d-flex border-top">
							<small class="w-50 text-center border-end py-2">
								<a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
							</small>
							<small class="w-50 text-center py-2">
								<a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
							</small>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
					<div class="product-item">
						<div class="position-relative bg-light overflow-hidden">
							<img class="img-fluid w-100" src="img/product-4.jpg" alt="">
							<div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
						</div>
						<div class="text-center p-4">
							<a class="d-block h5 mb-2" href="">Fresh Tomato</a>
							<span class="text-primary me-1">$19.00</span>
							<span class="text-body text-decoration-line-through">$29.00</span>
						</div>
						<div class="d-flex border-top">
							<small class="w-50 text-center border-end py-2">
								<a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
							</small>
							<small class="w-50 text-center py-2">
								<a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
							</small>
						</div>
					</div>
				</div>
			</div>
    	</div>
    </section>

		<section class="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
      <div class="container py-4">
        <div class="row d-flex justify-content-center py-5">
          <div class="col-md-6">
          	<h2 style="font-size: 22px;" class="mb-0">Subcribe to our Newsletter</h2>
          	<span>Get e-mail updates about our latest shops and special offers</span>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <form action="#" class="subscribe-form">
              <div class="form-group d-flex">
                <input type="text" class="form-control" placeholder="Enter email address">
                <input type="submit" value="Subscribe" class="submit px-3">
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
  <!-- loader -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

  <script>
		$(document).ready(function(){

		var quantitiy=0;
		   $('.quantity-right-plus').click(function(e){
		        
		        // Stop acting like a button
		        e.preventDefault();
		        // Get the field name
		        var quantity = parseInt($('#quantity').val());
		        
		        // If is not undefined
		            
		            $('#quantity').val(quantity + 1);

		          
		            // Increment
		        
		    });

		     $('.quantity-left-minus').click(function(e){
		        // Stop acting like a button
		        e.preventDefault();
		        // Get the field name
		        var quantity = parseInt($('#quantity').val());
		        
		        // If is not undefined
		      
		            // Increment
		            if(quantity>0){
		            $('#quantity').val(quantity - 1);
		            }
		    });
		    
		});
	<\/script>
    `,ls=()=>`
        ${Ee()}
        ${ss}
        ${Ae()}
    `,cs=`<div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">\r
    <div class="container">\r
        <h1 class="display-3 mb-3 animated slideInDown">404 Error</h1>\r
        <nav aria-label="breadcrumb animated slideInDown">\r
            <ol class="breadcrumb mb-0">\r
                <li class="breadcrumb-item"><a class="text-body" href="/" data-navigo>Home</a></li>\r
                <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>\r
                <li class="breadcrumb-item text-dark active" aria-current="page">404 Error</li>\r
            </ol>\r
        </nav>\r
    </div>\r
</div>\r
<!-- Page Header End -->\r
\r
\r
<!-- 404 Start -->\r
<div class="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">\r
    <div class="container text-center">\r
        <div class="row justify-content-center">\r
            <div class="col-lg-6">\r
                <i class="bi bi-exclamation-triangle display-1 text-primary"></i>\r
                <h1 class="display-1">404</h1>\r
                <h1 class="mb-4">Page Not Found</h1>\r
                <p class="mb-4">We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>\r
                <a class="btn btn-primary rounded-pill py-3 px-5" href="/" data-navigo>Go Back To Home</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<!-- 404 End -->\r
    \r
\r
<!-- Footer Start -->\r
\r
\r
<!-- Back to Top -->\r
<a href="/" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" data-navigo><i class="bi bi-arrow-up"></i></a>`,ds=()=>`${cs}`,us=`<h2>Category Management</h2>\r
            <div class="d-flex justify-content-between py-3">\r
              <div class="modal fade" id="create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\r
                <div class="modal-dialog">\r
                  <div class="modal-content">\r
                    <div class="modal-header">\r
                      <h5 class="modal-title" id="exampleModalLabel">Create category</h5>\r
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
                    </div>\r
                    <div class="modal-body">\r
                      <div class="mb-3">\r
                        <label for="categories" class="form-label">Category name</label>\r
                        <input type="text" class="form-control" id="categories" placeholder="Product name">\r
                      </div>\r
                    </div>\r
                    <div class="modal-footer">\r
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                      <button type="button" id="create-category" class="btn btn-primary">Create</button>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#create">Create</button>\r
              <form class="d-flex">\r
                <input class="form-control me-2" style="border-radius: 5px;" type="search" placeholder="Search" aria-label="Search">\r
                <button class="btn btn-outline-success" type="submit">Search</button>\r
              </form>\r
            </div>\r
            <div class="content">\r
                <table class="table">\r
                    <thead>\r
                      <tr>\r
                        <th scope="col">id</th>\r
                        <th scope="col">Category name</th>\r
                        <th scope="col">Action</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                     \r
                    </tbody>\r
                  </table>\r
                  <div class="modal fade" id="update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\r
                    <div class="modal-dialog">\r
                      <div class="modal-content">\r
                        <div class="modal-header">\r
                          <h5 class="modal-title" id="exampleModalLabel">Update category</h5>\r
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
                        </div>\r
                        <div class="modal-body">\r
                            <input type="hidden" class="form-control" id="category_id-2" aria-describedby="emailHelp">\r
                          <div class="mb-3">\r
                            <label for="categories-2" class="form-label">Category name</label>\r
                            <input type="text" class="form-control" id="categories-2">\r
                          </div>\r
                        </div>\r
                        <div class="modal-footer">\r
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="update-category">Update</button>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
            </div>\r
  `,fs=()=>us,ms=`<h2>Products Management</h2>\r
            <div class="d-flex justify-content-between py-3">\r
              <div class="modal fade" id="create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\r
                <div class="modal-dialog">\r
                  <div class="modal-content">\r
                    <div class="modal-header">\r
                        <h5 class="modal-title" id="exampleModalLabel">Create product</h5>\r
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
                    </div>\r
                    <div class="modal-body">\r
                        <div class="mb-3">\r
                            <label for="product-name" class="form-label">Product name</label>\r
                            <input type="text" class="form-control" id="product-name" placeholder="Product name">\r
                        </div>\r
                        <div class="mb-3">\r
                            <label for="url-image" class="form-label">Url image</label>\r
                            <input type="text" class="form-control" id="url-image" placeholder="Url image">\r
                        </div>\r
                        <div class="mb-3">\r
                            <label for="price" class="form-label">Price</label>\r
                            <input type="number" class="form-control" id="price" placeholder="Price">\r
                        </div>\r
                        <div class="mb-3">\r
                            <label for="discount" class="form-label">Discount</label>\r
                            <input type="number" class="form-control" id="discount" placeholder="Discount">\r
                        </div>\r
                        <div class="mb-3">\r
                            <label for="description" class="form-label">Description</label>\r
                            <textarea name="" id="description" class="form-control" cols="30" rows="5" placeholder="Description"></textarea>\r
                        </div>\r
                        <div class="mb-3">\r
                            <label for="category_id" class="form-label">Category name</label>\r
                            <select class="form-select" name="" id="category_id">\r
\r
                            </select>\r
                        </div>\r
                    </div>\r
                    <div class="modal-footer">\r
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                        <button type="button" id="create-product" class="btn btn-primary">Create</button>\r
                    </div>\r
                  </div>\r
                </div>\r
                </div>\r
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#create">Create</button>\r
                <form class="d-flex">\r
                    <input class="form-control me-2" style="border-radius: 5px;" type="search" placeholder="Search" aria-label="Search">\r
                    <button class="btn btn-outline-success" type="submit">Search</button>\r
                </form>\r
            </div>\r
            <div class="content">\r
                <table class="table">\r
                    <thead>\r
                      <tr>\r
                        <th scope="col">id</th>\r
                        <th scope="col">Product name</th>\r
                        <th scope="col">Image</th>\r
                        <th scope="col">Initial price</th>\r
                        <th scope="col">New price</th>\r
                        <th scope="col">Discount</th>\r
                        <th scope="col">Action</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                        \r
                    </tbody>\r
                  </table>\r
                  <div class="modal fade" id="update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\r
                    <div class="modal-dialog">\r
                      <div class="modal-content">\r
                        <div class="modal-header">\r
                          <h5 class="modal-title" id="exampleModalLabel">Update product</h5>\r
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
                        </div>\r
                        <div class="modal-body">\r
                            <input type="hidden" class="form-control" id="product-id" aria-describedby="emailHelp">\r
                            <div class="mb-3">\r
                                <label for="product-name-2" class="form-label">Product name</label>\r
                                <input type="text" class="form-control" id="product-name-2" placeholder="Product name">\r
                            </div>\r
                            <div class="mb-3">\r
                                <label for="url-image-2" class="form-label">Url image</label>\r
                                <input type="text" class="form-control" id="url-image-2" placeholder="Url image">\r
                            </div>\r
                            <div class="mb-3">\r
                                <label for="price-2" class="form-label">Price</label>\r
                                <input type="number" class="form-control" id="price-2" placeholder="Price">\r
                            </div>\r
                            <div class="mb-3">\r
                                <label for="discount-2" class="form-label">Discount</label>\r
                                <input type="number" class="form-control" id="discount-2" placeholder="Discount">\r
                            </div>\r
                            <div class="mb-3">\r
                                <label for="description-2" class="form-label">Description</label>\r
                                <textarea name="" id="description-2" class="form-control" cols="30" rows="5" placeholder="Description"></textarea>\r
                            </div>\r
                            <div class="mb-3">\r
                                <label for="category_id" class="form-label">Category name</label>\r
                                <select class="form-select" name="" id="category_id-2">\r
    \r
                                </select>\r
                            </div>\r
                        </div>\r
                        <div class="modal-footer">\r
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="update-product">Update</button>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
            </div>\r
  `,ps=()=>ms,$r=`\r
    <div class="main-admin">\r
        <aside id="aside">\r
          <div class="d-flex flex-column flex-shrink-0 p-3 bg-light h-100 w-100">\r
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">\r
              <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>\r
              <span class="fs-4">Sidebar</span>\r
            </a>\r
            <hr>\r
            <ul class="nav nav-pills flex-column mb-auto">\r
              <li class="nav-item">\r
                <a href="/" data-navigo class="nav-link link-hv link-dark" aria-current="page">\r
                  <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>\r
                  Home\r
                </a>\r
              </li>\r
              <li>\r
                <a href="#" class="nav-link link-hv link-dark">\r
                  <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>\r
                  Dashboard\r
                </a>\r
              </li>\r
              <li>\r
                <a href="/adminCategories" data-navigo class="nav-link link-hv link-dark">\r
                  <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>\r
                  Categories\r
                </a>\r
              </li>\r
              <li>\r
                <a href="/adminProducts" data-navigo class="nav-link link-hv link-dark">\r
                  <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>\r
                  Products\r
                </a>\r
              </li>\r
              <li>\r
                <a href="#" class="nav-link link-hv link-dark">\r
                  <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>\r
                  Customers\r
                </a>\r
              </li>\r
            </ul>\r
            <hr>\r
            <div class="dropdown">\r
              <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">\r
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">\r
                <strong>mdo</strong>\r
              </a>\r
              <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">\r
                <li><a class="dropdown-item" href="#">New project...</a></li>\r
                <li><a class="dropdown-item" href="#">Settings</a></li>\r
                <li><a class="dropdown-item" href="#">Profile</a></li>\r
                <li><hr class="dropdown-divider"></li>\r
                <li><a class="dropdown-item" href="#">Sign out</a></li>\r
              </ul>\r
            </div>\r
          </div>\r
        </aside>\r
        <article id="article">\r
            \r
        </article>\r
      </div>\r
\r
`;var hs=/([:*])(\w+)/g,ws="([^/]+)",gs=/\*/g,vs="?(?:.*)",bs=/\/\?/g,ys="/?([^/]+|)",xs="(?:/^|^)",ks="";function Vr(n){return n===void 0&&(n="/"),bn()?location.pathname+location.search+location.hash:n}function F(n){return n.replace(/\/+$/,"").replace(/^\/+/,"")}function xt(n){return typeof n=="string"}function Cs(n){return typeof n=="function"}function kt(n){return n&&n.indexOf("#")>=0&&n.split("#").pop()||""}function Es(n,r){return r.length===0||!n?null:n.slice(1,n.length).reduce(function(o,s,l){return o===null&&(o={}),o[r[l]]=decodeURIComponent(s),o},null)}function Ct(n){var r=F(n).split(/\?(.*)?$/);return[F(r[0]),r.slice(1).join("")]}function vn(n){for(var r={},o=n.split("&"),s=0;s<o.length;s++){var l=o[s].split("=");if(l[0]!==""){var d=decodeURIComponent(l[0]);r[d]?(Array.isArray(r[d])||(r[d]=[r[d]]),r[d].push(decodeURIComponent(l[1]||""))):r[d]=decodeURIComponent(l[1]||"")}}return r}function zr(n,r){var o=Ct(F(n.currentLocationPath)),s=o[0],l=o[1],d=l===""?null:vn(l),u=[],w;if(xt(r.path)){if(w=xs+F(r.path).replace(hs,function(g,_,R){return u.push(R),ws}).replace(gs,vs).replace(bs,ys)+"$",F(r.path)===""&&F(s)==="")return{url:s,queryString:l,hashString:kt(n.to),route:r,data:null,params:d}}else w=r.path;var v=new RegExp(w,ks),y=s.match(v);if(y){var x=xt(r.path)?Es(y,u):y.groups?y.groups:y.slice(1);return{url:F(s.replace(new RegExp("^"+n.instance.root),"")),queryString:l,hashString:kt(n.to),route:r,data:x,params:d}}return!1}function Wr(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function Pe(n,r){return typeof n[r]>"u"||n[r]===!0}function As(n){if(!n)return{};var r=n.split(","),o={},s;return r.forEach(function(l){var d=l.split(":").map(function(u){return u.replace(/(^ +| +$)/g,"")});switch(d[0]){case"historyAPIMethod":o.historyAPIMethod=d[1];break;case"resolveOptionsStrategy":s||(s={}),s.strategy=d[1];break;case"resolveOptionsHash":s||(s={}),s.hash=d[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[d[0]]=d[1]==="true";break}}),s&&(o.resolveOptions=s),o}function bn(){return typeof window<"u"}function Ps(n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),n.filter(function(o){return o}).forEach(function(o){["before","after","already","leave"].forEach(function(s){o[s]&&(r[s]||(r[s]=[]),r[s].push(o[s]))})}),r}function oe(n,r,o){var s=r||{},l=0;(function d(){if(!n[l]){o&&o(s);return}Array.isArray(n[l])?(n.splice.apply(n,[l,1].concat(n[l][0](s)?n[l][1]:n[l][2])),d()):n[l](s,function(u){typeof u>"u"||u===!0?(l+=1,d()):o&&o(s)})})()}oe.if=function(n,r,o){return Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]),[n,r,o]};function Pr(n,r){typeof n.currentLocationPath>"u"&&(n.currentLocationPath=n.to=Vr(n.instance.root)),n.currentLocationPath=n.instance._checkForAHash(n.currentLocationPath),r()}function an(n,r){for(var o=0;o<n.instance.routes.length;o++){var s=n.instance.routes[o],l=zr(n,s);if(l&&(n.matches||(n.matches=[]),n.matches.push(l),n.resolveOptions.strategy==="ONE")){r();return}}r()}function Ss(n,r){n.navigateOptions&&(typeof n.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof n.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),r()}function Ts(n,r){n.navigateOptions.force===!0?(n.instance._setCurrent([n.instance._pathToMatchObject(n.to)]),r(!1)):r()}var Sr=bn(),Os=Wr();function Is(n,r){if(Pe(n.navigateOptions,"updateBrowserURL")){var o=("/"+n.to).replace(/\/\//g,"/"),s=Sr&&n.resolveOptions&&n.resolveOptions.hash===!0;Os?(history[n.navigateOptions.historyAPIMethod||"pushState"](n.navigateOptions.stateObj||{},n.navigateOptions.title||"",s?"#"+o:o),location&&location.hash&&(n.instance.__freezeListening=!0,setTimeout(function(){if(!s){var l=location.hash;location.hash="",location.hash=l}n.instance.__freezeListening=!1},1))):Sr&&(window.location.href=n.to)}r()}function Jr(n,r){var o=n.instance;if(!o.lastResolved()){r();return}oe(o.lastResolved().map(function(s){return function(l,d){if(!s.route.hooks||!s.route.hooks.leave){d();return}var u=!1,w=n.instance.matchLocation(s.route.path,n.currentLocationPath,!1);if(s.route.path!=="*")u=!w;else{var v=n.matches?n.matches.find(function(y){return s.route.path===y.route.path}):!1;u=!v}if(Pe(n.navigateOptions,"callHooks")&&u){oe(s.route.hooks.leave.map(function(y){return function(x,g){return y(function(_){_===!1?n.instance.__markAsClean(n):g()},n.matches&&n.matches.length>0?n.matches.length===1?n.matches[0]:n.matches:void 0)}}).concat([function(){return d()}]));return}else d()}}),{},function(){return r()})}function _s(n,r){n.match.route.hooks&&n.match.route.hooks.before&&Pe(n.navigateOptions,"callHooks")?oe(n.match.route.hooks.before.map(function(o){return function(l,d){return o(function(u){u===!1?n.instance.__markAsClean(n):d()},n.match)}}).concat([function(){return r()}])):r()}function Bs(n,r){Pe(n.navigateOptions,"callHandler")&&n.match.route.handler(n.match),n.instance.updatePageLinks(),r()}function Ls(n,r){n.match.route.hooks&&n.match.route.hooks.after&&Pe(n.navigateOptions,"callHooks")&&n.match.route.hooks.after.forEach(function(o){return o(n.match)}),r()}function Rs(n,r){var o=n.instance.lastResolved();if(o&&o[0]&&o[0].route===n.match.route&&o[0].url===n.match.url&&o[0].queryString===n.match.queryString){o.forEach(function(s){s.route.hooks&&s.route.hooks.already&&Pe(n.navigateOptions,"callHooks")&&s.route.hooks.already.forEach(function(l){return l(n.match)})}),r(!1);return}r()}function js(n,r){var o=n.instance._notFoundRoute;if(o){n.notFoundHandled=!0;var s=Ct(n.currentLocationPath),l=s[0],d=s[1],u=kt(n.to);o.path=F(l);var w={url:o.path,queryString:d,hashString:u,data:null,route:o,params:d!==""?vn(d):null};n.matches=[w],n.match=w}r()}function Fs(n,r){(!n.resolveOptions||n.resolveOptions.noMatchWarning===!1||typeof n.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+n.currentLocationPath+`" didn't match any of the registered routes.`),r()}function Hs(n,r){n.instance._setCurrent(null),r()}function Kr(n,r){Pe(n.navigateOptions,"updateState")&&n.instance._setCurrent(n.matches),r()}var Gr=[Rs,_s,Bs,Ls],Tr=[Jr,js,oe.if(function(n){var r=n.notFoundHandled;return r},Gr.concat([Kr]),[Fs,Hs])];function un(){return un=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},un.apply(this,arguments)}function Or(n,r){var o=0;function s(){if(o===n.matches.length){Kr(n,r);return}oe(Gr,un({},n,{match:n.matches[o]}),function(){o+=1,s()})}Jr(n,s)}function on(n){n.instance.__markAsClean(n)}function fn(){return fn=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},fn.apply(this,arguments)}var Ir="[data-navigo]";function Ds(n,r){var o=r||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Ir},s=this,l="/",d=null,u=[],w=!1,v,y=Wr(),x=bn();n?l=F(n):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function g(m){return m.indexOf("#")>=0&&(o.hash===!0?m=m.split("#")[1]||"/":m=m.split("#")[0]),m}function _(m){return F(l+"/"+F(m))}function R(m,k,S,L){return m=xt(m)?_(m):m,{name:L||F(String(m)),path:m,handler:k,hooks:Ps(S)}}function C(m,k,S){var L=this;return typeof m=="object"&&!(m instanceof RegExp)?(Object.keys(m).forEach(function(I){if(typeof m[I]=="function")L.on(I,m[I]);else{var f=m[I],ge=f.uses,Te=f.as,ot=f.hooks;u.push(R(I,ge,[v,ot],Te))}}),this):(typeof m=="function"&&(S=k,k=m,m=l),u.push(R(m,k,[v,S])),this)}function E(m,k){if(s.__dirty){s.__waiting.push(function(){return s.resolve(m,k)});return}else s.__dirty=!0;m=m?F(l)+"/"+F(m):void 0;var S={instance:s,to:m,currentLocationPath:m,navigateOptions:{},resolveOptions:fn({},o,k)};return oe([Pr,an,oe.if(function(L){var I=L.matches;return I&&I.length>0},Or,Tr)],S,on),S.matches?S.matches:!1}function D(m,k){if(s.__dirty){s.__waiting.push(function(){return s.navigate(m,k)});return}else s.__dirty=!0;m=F(l)+"/"+F(m);var S={instance:s,to:m,navigateOptions:k||{},resolveOptions:k&&k.resolveOptions?k.resolveOptions:o,currentLocationPath:g(m)};oe([Ss,Ts,an,oe.if(function(L){var I=L.matches;return I&&I.length>0},Or,Tr),Is,on],S,on)}function q(m,k,S){var L=tt(m,k);return L!==null?(D(L.replace(new RegExp("^/?"+l),""),S),!0):!1}function z(m){return this.routes=u=u.filter(function(k){return xt(m)?F(k.path)!==F(m):Cs(m)?m!==k.handler:String(k.path)!==String(m)}),this}function Y(){y&&(this.__popstateListener=function(){s.__freezeListening||E()},window.addEventListener("popstate",this.__popstateListener))}function Me(){this.routes=u=[],y&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=w=!0}function Rt(m,k){return s._notFoundRoute=R("*",m,[v,k],"__NOT_FOUND__"),this}function Qe(){if(x)return jt().forEach(function(m){if(m.getAttribute("data-navigo")==="false"||m.getAttribute("target")==="_blank"){m.hasListenerAttached&&m.removeEventListener("click",m.navigoHandler);return}m.hasListenerAttached||(m.hasListenerAttached=!0,m.navigoHandler=function(k){if((k.ctrlKey||k.metaKey)&&k.target.tagName.toLowerCase()==="a")return!1;var S=m.getAttribute("href");if(typeof S>"u"||S===null)return!1;if(S.match(/^(http|https)/)&&typeof URL<"u")try{var L=new URL(S);S=L.pathname+L.search}catch{}var I=As(m.getAttribute("data-navigo-options"));w||(k.preventDefault(),k.stopPropagation(),s.navigate(F(S),I))},m.addEventListener("click",m.navigoHandler))}),s}function jt(){return x?[].slice.call(document.querySelectorAll(o.linksSelector||Ir)):[]}function et(m){return"/"+l+"/"+F(m)}function Ue(m){return v=m,this}function Ft(){return d}function tt(m,k,S){var L=u.find(function(ge){return ge.name===m}),I=null;if(L){if(I=L.path,k)for(var f in k)I=I.replace(":"+f,k[f]);I=I.match(/^\//)?I:"/"+I}return I&&S&&!S.includeRoot&&(I=I.replace(new RegExp("^/"+l),"")),I}function nt(m){return m.getAttribute("href")}function rt(m){var k=Ct(F(m)),S=k[0],L=k[1],I=L===""?null:vn(L),f=kt(m),ge=R(S,function(){},[v],S);return{url:S,queryString:L,hashString:f,route:ge,data:null,params:I}}function at(){return rt(F(Vr(l)).replace(new RegExp("^"+l),""))}function Ht(m){var k={instance:s,currentLocationPath:m,to:m,navigateOptions:{},resolveOptions:o};return an(k,function(){}),k.matches?k.matches:!1}function Dt(m,k,S){typeof k<"u"&&(typeof S>"u"||S)&&(k=_(k));var L={instance:s,to:k,currentLocationPath:k};Pr(L,function(){}),typeof m=="string"&&(m=typeof S>"u"||S?_(m):m);var I=zr(L,{name:String(m),path:m,handler:function(){},hooks:{}});return I||!1}function Se(m,k,S){return typeof k=="string"&&(k=it(k)),k?(k.hooks[m]||(k.hooks[m]=[]),k.hooks[m].push(S),function(){k.hooks[m]=k.hooks[m].filter(function(L){return L!==S})}):(console.warn("Route doesn't exists: "+k),function(){})}function it(m){return typeof m=="string"?u.find(function(k){return k.name===_(m)}):u.find(function(k){return k.handler===m})}function Mt(m){m.instance.__dirty=!1,m.instance.__waiting.length>0&&m.instance.__waiting.shift()()}this.root=l,this.routes=u,this.destroyed=w,this.current=d,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Mt,this.on=C,this.off=z,this.resolve=E,this.navigate=D,this.navigateByName=q,this.destroy=Me,this.notFound=Rt,this.updatePageLinks=Qe,this.link=et,this.hooks=Ue,this.extractGETParameters=function(m){return Ct(g(m))},this.lastResolved=Ft,this.generate=tt,this.getLinkPath=nt,this.match=Ht,this.matchLocation=Dt,this.getCurrentLocation=at,this.addBeforeHook=Se.bind(this,"before"),this.addAfterHook=Se.bind(this,"after"),this.addAlreadyHook=Se.bind(this,"already"),this.addLeaveHook=Se.bind(this,"leave"),this.getRoute=it,this._pathToMatchObject=rt,this._clean=F,this._checkForAHash=g,this._setCurrent=function(m){return d=s.current=m},Y.call(this),Qe.call(this)}const ee=new Ds("/"),te=(n,r)=>{r.innerHTML=n};function Xr(n,r){return function(){return n.apply(r,arguments)}}const{toString:Ms}=Object.prototype,{getPrototypeOf:yn}=Object,At=(n=>r=>{const o=Ms.call(r);return n[o]||(n[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),le=n=>(n=n.toLowerCase(),r=>At(r)===n),Pt=n=>r=>typeof r===n,{isArray:De}=Array,Xe=Pt("undefined");function Us(n){return n!==null&&!Xe(n)&&n.constructor!==null&&!Xe(n.constructor)&&Q(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Yr=le("ArrayBuffer");function Ns(n){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(n):r=n&&n.buffer&&Yr(n.buffer),r}const qs=Pt("string"),Q=Pt("function"),Zr=Pt("number"),St=n=>n!==null&&typeof n=="object",$s=n=>n===!0||n===!1,vt=n=>{if(At(n)!=="object")return!1;const r=yn(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Vs=le("Date"),zs=le("File"),Ws=le("Blob"),Js=le("FileList"),Ks=n=>St(n)&&Q(n.pipe),Gs=n=>{let r;return n&&(typeof FormData=="function"&&n instanceof FormData||Q(n.append)&&((r=At(n))==="formdata"||r==="object"&&Q(n.toString)&&n.toString()==="[object FormData]"))},Xs=le("URLSearchParams"),Ys=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ye(n,r,{allOwnKeys:o=!1}={}){if(n===null||typeof n>"u")return;let s,l;if(typeof n!="object"&&(n=[n]),De(n))for(s=0,l=n.length;s<l;s++)r.call(null,n[s],s,n);else{const d=o?Object.getOwnPropertyNames(n):Object.keys(n),u=d.length;let w;for(s=0;s<u;s++)w=d[s],r.call(null,n[w],w,n)}}function Qr(n,r){r=r.toLowerCase();const o=Object.keys(n);let s=o.length,l;for(;s-- >0;)if(l=o[s],r===l.toLowerCase())return l;return null}const ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ta=n=>!Xe(n)&&n!==ea;function mn(){const{caseless:n}=ta(this)&&this||{},r={},o=(s,l)=>{const d=n&&Qr(r,l)||l;vt(r[d])&&vt(s)?r[d]=mn(r[d],s):vt(s)?r[d]=mn({},s):De(s)?r[d]=s.slice():r[d]=s};for(let s=0,l=arguments.length;s<l;s++)arguments[s]&&Ye(arguments[s],o);return r}const Zs=(n,r,o,{allOwnKeys:s}={})=>(Ye(r,(l,d)=>{o&&Q(l)?n[d]=Xr(l,o):n[d]=l},{allOwnKeys:s}),n),Qs=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),el=(n,r,o,s)=>{n.prototype=Object.create(r.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:r.prototype}),o&&Object.assign(n.prototype,o)},tl=(n,r,o,s)=>{let l,d,u;const w={};if(r=r||{},n==null)return r;do{for(l=Object.getOwnPropertyNames(n),d=l.length;d-- >0;)u=l[d],(!s||s(u,n,r))&&!w[u]&&(r[u]=n[u],w[u]=!0);n=o!==!1&&yn(n)}while(n&&(!o||o(n,r))&&n!==Object.prototype);return r},nl=(n,r,o)=>{n=String(n),(o===void 0||o>n.length)&&(o=n.length),o-=r.length;const s=n.indexOf(r,o);return s!==-1&&s===o},rl=n=>{if(!n)return null;if(De(n))return n;let r=n.length;if(!Zr(r))return null;const o=new Array(r);for(;r-- >0;)o[r]=n[r];return o},al=(n=>r=>n&&r instanceof n)(typeof Uint8Array<"u"&&yn(Uint8Array)),il=(n,r)=>{const s=(n&&n[Symbol.iterator]).call(n);let l;for(;(l=s.next())&&!l.done;){const d=l.value;r.call(n,d[0],d[1])}},ol=(n,r)=>{let o;const s=[];for(;(o=n.exec(r))!==null;)s.push(o);return s},sl=le("HTMLFormElement"),ll=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,s,l){return s.toUpperCase()+l}),_r=(({hasOwnProperty:n})=>(r,o)=>n.call(r,o))(Object.prototype),cl=le("RegExp"),na=(n,r)=>{const o=Object.getOwnPropertyDescriptors(n),s={};Ye(o,(l,d)=>{let u;(u=r(l,d,n))!==!1&&(s[d]=u||l)}),Object.defineProperties(n,s)},dl=n=>{na(n,(r,o)=>{if(Q(n)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const s=n[o];if(Q(s)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},ul=(n,r)=>{const o={},s=l=>{l.forEach(d=>{o[d]=!0})};return De(n)?s(n):s(String(n).split(r)),o},fl=()=>{},ml=(n,r)=>(n=+n,Number.isFinite(n)?n:r),sn="abcdefghijklmnopqrstuvwxyz",Br="0123456789",ra={DIGIT:Br,ALPHA:sn,ALPHA_DIGIT:sn+sn.toUpperCase()+Br},pl=(n=16,r=ra.ALPHA_DIGIT)=>{let o="";const{length:s}=r;for(;n--;)o+=r[Math.random()*s|0];return o};function hl(n){return!!(n&&Q(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const wl=n=>{const r=new Array(10),o=(s,l)=>{if(St(s)){if(r.indexOf(s)>=0)return;if(!("toJSON"in s)){r[l]=s;const d=De(s)?[]:{};return Ye(s,(u,w)=>{const v=o(u,l+1);!Xe(v)&&(d[w]=v)}),r[l]=void 0,d}}return s};return o(n,0)},gl=le("AsyncFunction"),vl=n=>n&&(St(n)||Q(n))&&Q(n.then)&&Q(n.catch),h={isArray:De,isArrayBuffer:Yr,isBuffer:Us,isFormData:Gs,isArrayBufferView:Ns,isString:qs,isNumber:Zr,isBoolean:$s,isObject:St,isPlainObject:vt,isUndefined:Xe,isDate:Vs,isFile:zs,isBlob:Ws,isRegExp:cl,isFunction:Q,isStream:Ks,isURLSearchParams:Xs,isTypedArray:al,isFileList:Js,forEach:Ye,merge:mn,extend:Zs,trim:Ys,stripBOM:Qs,inherits:el,toFlatObject:tl,kindOf:At,kindOfTest:le,endsWith:nl,toArray:rl,forEachEntry:il,matchAll:ol,isHTMLForm:sl,hasOwnProperty:_r,hasOwnProp:_r,reduceDescriptors:na,freezeMethods:dl,toObjectSet:ul,toCamelCase:ll,noop:fl,toFiniteNumber:ml,findKey:Qr,global:ea,isContextDefined:ta,ALPHABET:ra,generateString:pl,isSpecCompliantForm:hl,toJSONObject:wl,isAsyncFn:gl,isThenable:vl};function T(n,r,o,s,l){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",r&&(this.code=r),o&&(this.config=o),s&&(this.request=s),l&&(this.response=l)}h.inherits(T,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:h.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const aa=T.prototype,ia={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{ia[n]={value:n}});Object.defineProperties(T,ia);Object.defineProperty(aa,"isAxiosError",{value:!0});T.from=(n,r,o,s,l,d)=>{const u=Object.create(aa);return h.toFlatObject(n,u,function(v){return v!==Error.prototype},w=>w!=="isAxiosError"),T.call(u,n.message,r,o,s,l),u.cause=n,u.name=n.name,d&&Object.assign(u,d),u};const bl=null;function pn(n){return h.isPlainObject(n)||h.isArray(n)}function oa(n){return h.endsWith(n,"[]")?n.slice(0,-2):n}function Lr(n,r,o){return n?n.concat(r).map(function(l,d){return l=oa(l),!o&&d?"["+l+"]":l}).join(o?".":""):r}function yl(n){return h.isArray(n)&&!n.some(pn)}const xl=h.toFlatObject(h,{},null,function(r){return/^is[A-Z]/.test(r)});function Tt(n,r,o){if(!h.isObject(n))throw new TypeError("target must be an object");r=r||new FormData,o=h.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,D){return!h.isUndefined(D[E])});const s=o.metaTokens,l=o.visitor||x,d=o.dots,u=o.indexes,v=(o.Blob||typeof Blob<"u"&&Blob)&&h.isSpecCompliantForm(r);if(!h.isFunction(l))throw new TypeError("visitor must be a function");function y(C){if(C===null)return"";if(h.isDate(C))return C.toISOString();if(!v&&h.isBlob(C))throw new T("Blob is not supported. Use a Buffer instead.");return h.isArrayBuffer(C)||h.isTypedArray(C)?v&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function x(C,E,D){let q=C;if(C&&!D&&typeof C=="object"){if(h.endsWith(E,"{}"))E=s?E:E.slice(0,-2),C=JSON.stringify(C);else if(h.isArray(C)&&yl(C)||(h.isFileList(C)||h.endsWith(E,"[]"))&&(q=h.toArray(C)))return E=oa(E),q.forEach(function(Y,Me){!(h.isUndefined(Y)||Y===null)&&r.append(u===!0?Lr([E],Me,d):u===null?E:E+"[]",y(Y))}),!1}return pn(C)?!0:(r.append(Lr(D,E,d),y(C)),!1)}const g=[],_=Object.assign(xl,{defaultVisitor:x,convertValue:y,isVisitable:pn});function R(C,E){if(!h.isUndefined(C)){if(g.indexOf(C)!==-1)throw Error("Circular reference detected in "+E.join("."));g.push(C),h.forEach(C,function(q,z){(!(h.isUndefined(q)||q===null)&&l.call(r,q,h.isString(z)?z.trim():z,E,_))===!0&&R(q,E?E.concat(z):[z])}),g.pop()}}if(!h.isObject(n))throw new TypeError("data must be an object");return R(n),r}function Rr(n){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return r[s]})}function xn(n,r){this._pairs=[],n&&Tt(n,this,r)}const sa=xn.prototype;sa.append=function(r,o){this._pairs.push([r,o])};sa.toString=function(r){const o=r?function(s){return r.call(this,s,Rr)}:Rr;return this._pairs.map(function(l){return o(l[0])+"="+o(l[1])},"").join("&")};function kl(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function la(n,r,o){if(!r)return n;const s=o&&o.encode||kl,l=o&&o.serialize;let d;if(l?d=l(r,o):d=h.isURLSearchParams(r)?r.toString():new xn(r,o).toString(s),d){const u=n.indexOf("#");u!==-1&&(n=n.slice(0,u)),n+=(n.indexOf("?")===-1?"?":"&")+d}return n}class jr{constructor(){this.handlers=[]}use(r,o,s){return this.handlers.push({fulfilled:r,rejected:o,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){h.forEach(this.handlers,function(s){s!==null&&r(s)})}}const ca={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Cl=typeof URLSearchParams<"u"?URLSearchParams:xn,El=typeof FormData<"u"?FormData:null,Al=typeof Blob<"u"?Blob:null,Pl={isBrowser:!0,classes:{URLSearchParams:Cl,FormData:El,Blob:Al},protocols:["http","https","file","blob","url","data"]},da=typeof window<"u"&&typeof document<"u",Sl=(n=>da&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),Tl=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ol=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:da,hasStandardBrowserEnv:Sl,hasStandardBrowserWebWorkerEnv:Tl},Symbol.toStringTag,{value:"Module"})),se={...Ol,...Pl};function Il(n,r){return Tt(n,new se.classes.URLSearchParams,Object.assign({visitor:function(o,s,l,d){return se.isNode&&h.isBuffer(o)?(this.append(s,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},r))}function _l(n){return h.matchAll(/\w+|\[(\w*)]/g,n).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Bl(n){const r={},o=Object.keys(n);let s;const l=o.length;let d;for(s=0;s<l;s++)d=o[s],r[d]=n[d];return r}function ua(n){function r(o,s,l,d){let u=o[d++];if(u==="__proto__")return!0;const w=Number.isFinite(+u),v=d>=o.length;return u=!u&&h.isArray(l)?l.length:u,v?(h.hasOwnProp(l,u)?l[u]=[l[u],s]:l[u]=s,!w):((!l[u]||!h.isObject(l[u]))&&(l[u]=[]),r(o,s,l[u],d)&&h.isArray(l[u])&&(l[u]=Bl(l[u])),!w)}if(h.isFormData(n)&&h.isFunction(n.entries)){const o={};return h.forEachEntry(n,(s,l)=>{r(_l(s),l,o,0)}),o}return null}function Ll(n,r,o){if(h.isString(n))try{return(r||JSON.parse)(n),h.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(o||JSON.stringify)(n)}const kn={transitional:ca,adapter:["xhr","http"],transformRequest:[function(r,o){const s=o.getContentType()||"",l=s.indexOf("application/json")>-1,d=h.isObject(r);if(d&&h.isHTMLForm(r)&&(r=new FormData(r)),h.isFormData(r))return l?JSON.stringify(ua(r)):r;if(h.isArrayBuffer(r)||h.isBuffer(r)||h.isStream(r)||h.isFile(r)||h.isBlob(r))return r;if(h.isArrayBufferView(r))return r.buffer;if(h.isURLSearchParams(r))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let w;if(d){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Il(r,this.formSerializer).toString();if((w=h.isFileList(r))||s.indexOf("multipart/form-data")>-1){const v=this.env&&this.env.FormData;return Tt(w?{"files[]":r}:r,v&&new v,this.formSerializer)}}return d||l?(o.setContentType("application/json",!1),Ll(r)):r}],transformResponse:[function(r){const o=this.transitional||kn.transitional,s=o&&o.forcedJSONParsing,l=this.responseType==="json";if(r&&h.isString(r)&&(s&&!this.responseType||l)){const u=!(o&&o.silentJSONParsing)&&l;try{return JSON.parse(r)}catch(w){if(u)throw w.name==="SyntaxError"?T.from(w,T.ERR_BAD_RESPONSE,this,null,this.response):w}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:se.classes.FormData,Blob:se.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};h.forEach(["delete","get","head","post","put","patch"],n=>{kn.headers[n]={}});const Cn=kn,Rl=h.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jl=n=>{const r={};let o,s,l;return n&&n.split(`
`).forEach(function(u){l=u.indexOf(":"),o=u.substring(0,l).trim().toLowerCase(),s=u.substring(l+1).trim(),!(!o||r[o]&&Rl[o])&&(o==="set-cookie"?r[o]?r[o].push(s):r[o]=[s]:r[o]=r[o]?r[o]+", "+s:s)}),r},Fr=Symbol("internals");function Ge(n){return n&&String(n).trim().toLowerCase()}function bt(n){return n===!1||n==null?n:h.isArray(n)?n.map(bt):String(n)}function Fl(n){const r=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=o.exec(n);)r[s[1]]=s[2];return r}const Hl=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function ln(n,r,o,s,l){if(h.isFunction(s))return s.call(this,r,o);if(l&&(r=o),!!h.isString(r)){if(h.isString(s))return r.indexOf(s)!==-1;if(h.isRegExp(s))return s.test(r)}}function Dl(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,o,s)=>o.toUpperCase()+s)}function Ml(n,r){const o=h.toCamelCase(" "+r);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+o,{value:function(l,d,u){return this[s].call(this,r,l,d,u)},configurable:!0})})}class Ot{constructor(r){r&&this.set(r)}set(r,o,s){const l=this;function d(w,v,y){const x=Ge(v);if(!x)throw new Error("header name must be a non-empty string");const g=h.findKey(l,x);(!g||l[g]===void 0||y===!0||y===void 0&&l[g]!==!1)&&(l[g||v]=bt(w))}const u=(w,v)=>h.forEach(w,(y,x)=>d(y,x,v));return h.isPlainObject(r)||r instanceof this.constructor?u(r,o):h.isString(r)&&(r=r.trim())&&!Hl(r)?u(jl(r),o):r!=null&&d(o,r,s),this}get(r,o){if(r=Ge(r),r){const s=h.findKey(this,r);if(s){const l=this[s];if(!o)return l;if(o===!0)return Fl(l);if(h.isFunction(o))return o.call(this,l,s);if(h.isRegExp(o))return o.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,o){if(r=Ge(r),r){const s=h.findKey(this,r);return!!(s&&this[s]!==void 0&&(!o||ln(this,this[s],s,o)))}return!1}delete(r,o){const s=this;let l=!1;function d(u){if(u=Ge(u),u){const w=h.findKey(s,u);w&&(!o||ln(s,s[w],w,o))&&(delete s[w],l=!0)}}return h.isArray(r)?r.forEach(d):d(r),l}clear(r){const o=Object.keys(this);let s=o.length,l=!1;for(;s--;){const d=o[s];(!r||ln(this,this[d],d,r,!0))&&(delete this[d],l=!0)}return l}normalize(r){const o=this,s={};return h.forEach(this,(l,d)=>{const u=h.findKey(s,d);if(u){o[u]=bt(l),delete o[d];return}const w=r?Dl(d):String(d).trim();w!==d&&delete o[d],o[w]=bt(l),s[w]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const o=Object.create(null);return h.forEach(this,(s,l)=>{s!=null&&s!==!1&&(o[l]=r&&h.isArray(s)?s.join(", "):s)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,o])=>r+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...o){const s=new this(r);return o.forEach(l=>s.set(l)),s}static accessor(r){const s=(this[Fr]=this[Fr]={accessors:{}}).accessors,l=this.prototype;function d(u){const w=Ge(u);s[w]||(Ml(l,u),s[w]=!0)}return h.isArray(r)?r.forEach(d):d(r),this}}Ot.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);h.reduceDescriptors(Ot.prototype,({value:n},r)=>{let o=r[0].toUpperCase()+r.slice(1);return{get:()=>n,set(s){this[o]=s}}});h.freezeMethods(Ot);const de=Ot;function cn(n,r){const o=this||Cn,s=r||o,l=de.from(s.headers);let d=s.data;return h.forEach(n,function(w){d=w.call(o,d,l.normalize(),r?r.status:void 0)}),l.normalize(),d}function fa(n){return!!(n&&n.__CANCEL__)}function Ze(n,r,o){T.call(this,n??"canceled",T.ERR_CANCELED,r,o),this.name="CanceledError"}h.inherits(Ze,T,{__CANCEL__:!0});function Ul(n,r,o){const s=o.config.validateStatus;!o.status||!s||s(o.status)?n(o):r(new T("Request failed with status code "+o.status,[T.ERR_BAD_REQUEST,T.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}const Nl=se.hasStandardBrowserEnv?{write(n,r,o,s,l,d){const u=[n+"="+encodeURIComponent(r)];h.isNumber(o)&&u.push("expires="+new Date(o).toGMTString()),h.isString(s)&&u.push("path="+s),h.isString(l)&&u.push("domain="+l),d===!0&&u.push("secure"),document.cookie=u.join("; ")},read(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ql(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function $l(n,r){return r?n.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):n}function ma(n,r){return n&&!ql(r)?$l(n,r):r}const Vl=se.hasStandardBrowserEnv?function(){const r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");let s;function l(d){let u=d;return r&&(o.setAttribute("href",u),u=o.href),o.setAttribute("href",u),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:o.pathname.charAt(0)==="/"?o.pathname:"/"+o.pathname}}return s=l(window.location.href),function(u){const w=h.isString(u)?l(u):u;return w.protocol===s.protocol&&w.host===s.host}}():function(){return function(){return!0}}();function zl(n){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return r&&r[1]||""}function Wl(n,r){n=n||10;const o=new Array(n),s=new Array(n);let l=0,d=0,u;return r=r!==void 0?r:1e3,function(v){const y=Date.now(),x=s[d];u||(u=y),o[l]=v,s[l]=y;let g=d,_=0;for(;g!==l;)_+=o[g++],g=g%n;if(l=(l+1)%n,l===d&&(d=(d+1)%n),y-u<r)return;const R=x&&y-x;return R?Math.round(_*1e3/R):void 0}}function Hr(n,r){let o=0;const s=Wl(50,250);return l=>{const d=l.loaded,u=l.lengthComputable?l.total:void 0,w=d-o,v=s(w),y=d<=u;o=d;const x={loaded:d,total:u,progress:u?d/u:void 0,bytes:w,rate:v||void 0,estimated:v&&u&&y?(u-d)/v:void 0,event:l};x[r?"download":"upload"]=!0,n(x)}}const Jl=typeof XMLHttpRequest<"u",Kl=Jl&&function(n){return new Promise(function(o,s){let l=n.data;const d=de.from(n.headers).normalize();let{responseType:u,withXSRFToken:w}=n,v;function y(){n.cancelToken&&n.cancelToken.unsubscribe(v),n.signal&&n.signal.removeEventListener("abort",v)}let x;if(h.isFormData(l)){if(se.hasStandardBrowserEnv||se.hasStandardBrowserWebWorkerEnv)d.setContentType(!1);else if((x=d.getContentType())!==!1){const[E,...D]=x?x.split(";").map(q=>q.trim()).filter(Boolean):[];d.setContentType([E||"multipart/form-data",...D].join("; "))}}let g=new XMLHttpRequest;if(n.auth){const E=n.auth.username||"",D=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";d.set("Authorization","Basic "+btoa(E+":"+D))}const _=ma(n.baseURL,n.url);g.open(n.method.toUpperCase(),la(_,n.params,n.paramsSerializer),!0),g.timeout=n.timeout;function R(){if(!g)return;const E=de.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),q={data:!u||u==="text"||u==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:E,config:n,request:g};Ul(function(Y){o(Y),y()},function(Y){s(Y),y()},q),g=null}if("onloadend"in g?g.onloadend=R:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(R)},g.onabort=function(){g&&(s(new T("Request aborted",T.ECONNABORTED,n,g)),g=null)},g.onerror=function(){s(new T("Network Error",T.ERR_NETWORK,n,g)),g=null},g.ontimeout=function(){let D=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const q=n.transitional||ca;n.timeoutErrorMessage&&(D=n.timeoutErrorMessage),s(new T(D,q.clarifyTimeoutError?T.ETIMEDOUT:T.ECONNABORTED,n,g)),g=null},se.hasStandardBrowserEnv&&(w&&h.isFunction(w)&&(w=w(n)),w||w!==!1&&Vl(_))){const E=n.xsrfHeaderName&&n.xsrfCookieName&&Nl.read(n.xsrfCookieName);E&&d.set(n.xsrfHeaderName,E)}l===void 0&&d.setContentType(null),"setRequestHeader"in g&&h.forEach(d.toJSON(),function(D,q){g.setRequestHeader(q,D)}),h.isUndefined(n.withCredentials)||(g.withCredentials=!!n.withCredentials),u&&u!=="json"&&(g.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&g.addEventListener("progress",Hr(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&g.upload&&g.upload.addEventListener("progress",Hr(n.onUploadProgress)),(n.cancelToken||n.signal)&&(v=E=>{g&&(s(!E||E.type?new Ze(null,n,g):E),g.abort(),g=null)},n.cancelToken&&n.cancelToken.subscribe(v),n.signal&&(n.signal.aborted?v():n.signal.addEventListener("abort",v)));const C=zl(_);if(C&&se.protocols.indexOf(C)===-1){s(new T("Unsupported protocol "+C+":",T.ERR_BAD_REQUEST,n));return}g.send(l||null)})},hn={http:bl,xhr:Kl};h.forEach(hn,(n,r)=>{if(n){try{Object.defineProperty(n,"name",{value:r})}catch{}Object.defineProperty(n,"adapterName",{value:r})}});const Dr=n=>`- ${n}`,Gl=n=>h.isFunction(n)||n===null||n===!1,pa={getAdapter:n=>{n=h.isArray(n)?n:[n];const{length:r}=n;let o,s;const l={};for(let d=0;d<r;d++){o=n[d];let u;if(s=o,!Gl(o)&&(s=hn[(u=String(o)).toLowerCase()],s===void 0))throw new T(`Unknown adapter '${u}'`);if(s)break;l[u||"#"+d]=s}if(!s){const d=Object.entries(l).map(([w,v])=>`adapter ${w} `+(v===!1?"is not supported by the environment":"is not available in the build"));let u=r?d.length>1?`since :
`+d.map(Dr).join(`
`):" "+Dr(d[0]):"as no adapter specified";throw new T("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return s},adapters:hn};function dn(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Ze(null,n)}function Mr(n){return dn(n),n.headers=de.from(n.headers),n.data=cn.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),pa.getAdapter(n.adapter||Cn.adapter)(n).then(function(s){return dn(n),s.data=cn.call(n,n.transformResponse,s),s.headers=de.from(s.headers),s},function(s){return fa(s)||(dn(n),s&&s.response&&(s.response.data=cn.call(n,n.transformResponse,s.response),s.response.headers=de.from(s.response.headers))),Promise.reject(s)})}const Ur=n=>n instanceof de?n.toJSON():n;function Fe(n,r){r=r||{};const o={};function s(y,x,g){return h.isPlainObject(y)&&h.isPlainObject(x)?h.merge.call({caseless:g},y,x):h.isPlainObject(x)?h.merge({},x):h.isArray(x)?x.slice():x}function l(y,x,g){if(h.isUndefined(x)){if(!h.isUndefined(y))return s(void 0,y,g)}else return s(y,x,g)}function d(y,x){if(!h.isUndefined(x))return s(void 0,x)}function u(y,x){if(h.isUndefined(x)){if(!h.isUndefined(y))return s(void 0,y)}else return s(void 0,x)}function w(y,x,g){if(g in r)return s(y,x);if(g in n)return s(void 0,y)}const v={url:d,method:d,data:d,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:w,headers:(y,x)=>l(Ur(y),Ur(x),!0)};return h.forEach(Object.keys(Object.assign({},n,r)),function(x){const g=v[x]||l,_=g(n[x],r[x],x);h.isUndefined(_)&&g!==w||(o[x]=_)}),o}const ha="1.6.7",En={};["object","boolean","number","function","string","symbol"].forEach((n,r)=>{En[n]=function(s){return typeof s===n||"a"+(r<1?"n ":" ")+n}});const Nr={};En.transitional=function(r,o,s){function l(d,u){return"[Axios v"+ha+"] Transitional option '"+d+"'"+u+(s?". "+s:"")}return(d,u,w)=>{if(r===!1)throw new T(l(u," has been removed"+(o?" in "+o:"")),T.ERR_DEPRECATED);return o&&!Nr[u]&&(Nr[u]=!0,console.warn(l(u," has been deprecated since v"+o+" and will be removed in the near future"))),r?r(d,u,w):!0}};function Xl(n,r,o){if(typeof n!="object")throw new T("options must be an object",T.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let l=s.length;for(;l-- >0;){const d=s[l],u=r[d];if(u){const w=n[d],v=w===void 0||u(w,d,n);if(v!==!0)throw new T("option "+d+" must be "+v,T.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new T("Unknown option "+d,T.ERR_BAD_OPTION)}}const wn={assertOptions:Xl,validators:En},me=wn.validators;class Et{constructor(r){this.defaults=r,this.interceptors={request:new jr,response:new jr}}async request(r,o){try{return await this._request(r,o)}catch(s){if(s instanceof Error){let l;Error.captureStackTrace?Error.captureStackTrace(l={}):l=new Error;const d=l.stack?l.stack.replace(/^.+\n/,""):"";s.stack?d&&!String(s.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+d):s.stack=d}throw s}}_request(r,o){typeof r=="string"?(o=o||{},o.url=r):o=r||{},o=Fe(this.defaults,o);const{transitional:s,paramsSerializer:l,headers:d}=o;s!==void 0&&wn.assertOptions(s,{silentJSONParsing:me.transitional(me.boolean),forcedJSONParsing:me.transitional(me.boolean),clarifyTimeoutError:me.transitional(me.boolean)},!1),l!=null&&(h.isFunction(l)?o.paramsSerializer={serialize:l}:wn.assertOptions(l,{encode:me.function,serialize:me.function},!0)),o.method=(o.method||this.defaults.method||"get").toLowerCase();let u=d&&h.merge(d.common,d[o.method]);d&&h.forEach(["delete","get","head","post","put","patch","common"],C=>{delete d[C]}),o.headers=de.concat(u,d);const w=[];let v=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(o)===!1||(v=v&&E.synchronous,w.unshift(E.fulfilled,E.rejected))});const y=[];this.interceptors.response.forEach(function(E){y.push(E.fulfilled,E.rejected)});let x,g=0,_;if(!v){const C=[Mr.bind(this),void 0];for(C.unshift.apply(C,w),C.push.apply(C,y),_=C.length,x=Promise.resolve(o);g<_;)x=x.then(C[g++],C[g++]);return x}_=w.length;let R=o;for(g=0;g<_;){const C=w[g++],E=w[g++];try{R=C(R)}catch(D){E.call(this,D);break}}try{x=Mr.call(this,R)}catch(C){return Promise.reject(C)}for(g=0,_=y.length;g<_;)x=x.then(y[g++],y[g++]);return x}getUri(r){r=Fe(this.defaults,r);const o=ma(r.baseURL,r.url);return la(o,r.params,r.paramsSerializer)}}h.forEach(["delete","get","head","options"],function(r){Et.prototype[r]=function(o,s){return this.request(Fe(s||{},{method:r,url:o,data:(s||{}).data}))}});h.forEach(["post","put","patch"],function(r){function o(s){return function(d,u,w){return this.request(Fe(w||{},{method:r,headers:s?{"Content-Type":"multipart/form-data"}:{},url:d,data:u}))}}Et.prototype[r]=o(),Et.prototype[r+"Form"]=o(!0)});const yt=Et;class An{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const s=this;this.promise.then(l=>{if(!s._listeners)return;let d=s._listeners.length;for(;d-- >0;)s._listeners[d](l);s._listeners=null}),this.promise.then=l=>{let d;const u=new Promise(w=>{s.subscribe(w),d=w}).then(l);return u.cancel=function(){s.unsubscribe(d)},u},r(function(d,u,w){s.reason||(s.reason=new Ze(d,u,w),o(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const o=this._listeners.indexOf(r);o!==-1&&this._listeners.splice(o,1)}static source(){let r;return{token:new An(function(l){r=l}),cancel:r}}}const Yl=An;function Zl(n){return function(o){return n.apply(null,o)}}function Ql(n){return h.isObject(n)&&n.isAxiosError===!0}const gn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(gn).forEach(([n,r])=>{gn[r]=n});const ec=gn;function wa(n){const r=new yt(n),o=Xr(yt.prototype.request,r);return h.extend(o,yt.prototype,r,{allOwnKeys:!0}),h.extend(o,r,null,{allOwnKeys:!0}),o.create=function(l){return wa(Fe(n,l))},o}const H=wa(Cn);H.Axios=yt;H.CanceledError=Ze;H.CancelToken=Yl;H.isCancel=fa;H.VERSION=ha;H.toFormData=Tt;H.AxiosError=T;H.Cancel=H.CanceledError;H.all=function(r){return Promise.all(r)};H.spread=Zl;H.isAxiosError=Ql;H.mergeConfig=Fe;H.AxiosHeaders=de;H.formToJSON=n=>ua(h.isHTMLForm(n)?new FormData(n):n);H.getAdapter=pa.getAdapter;H.HttpStatusCode=ec;H.default=H;var pe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tc(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ga={exports:{}};/*!
* sweetalert2 v11.10.5
* Released under the MIT License.
*/(function(n,r){(function(o,s){n.exports=s()})(pe,function(){function o(i,e,t){return e=R(e),D(i,l()?Reflect.construct(e,t||[],R(i).constructor):e.apply(i,t))}function s(i,e,t){if(l())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,e);var c=new(i.bind.apply(i,a));return t&&C(c,t.prototype),c}function l(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(l=function(){return!!i})()}function d(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var a,c,p,b,A=[],P=!0,M=!1;try{if(p=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;P=!1}else for(;!(P=(a=p.call(t)).done)&&(A.push(a.value),A.length!==e);P=!0);}catch(Ke){M=!0,c=Ke}finally{try{if(!P&&t.return!=null&&(b=t.return(),Object(b)!==b))return}finally{if(M)throw c}}return A}}function u(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var a=t.call(i,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function w(i){var e=u(i,"string");return typeof e=="symbol"?e:String(e)}function v(i){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(i)}function y(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function x(i,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,w(a.key),a)}}function g(i,e,t){return e&&x(i.prototype,e),t&&x(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function _(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&C(i,e)}function R(i){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(i)}function C(i,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,c){return a.__proto__=c,a},C(i,e)}function E(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function D(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(i)}function q(i,e){for(;!Object.prototype.hasOwnProperty.call(i,e)&&(i=R(i),i!==null););return i}function z(){return typeof Reflect<"u"&&Reflect.get?z=Reflect.get.bind():z=function(e,t,a){var c=q(e,t);if(c){var p=Object.getOwnPropertyDescriptor(c,t);return p.get?p.get.call(arguments.length<3?e:a):p.value}},z.apply(this,arguments)}function Y(i,e){return Qe(i)||d(i,e)||et(i,e)||tt()}function Me(i){return Rt(i)||jt(i)||et(i)||Ft()}function Rt(i){if(Array.isArray(i))return Ue(i)}function Qe(i){if(Array.isArray(i))return i}function jt(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function et(i,e){if(i){if(typeof i=="string")return Ue(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ue(i,e)}}function Ue(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=i[t];return a}function Ft(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nt(i,e){var t=at(i,e,"get");return Ht(i,t)}function rt(i,e,t){var a=at(i,e,"set");return Dt(i,a,t),t}function at(i,e,t){if(!e.has(i))throw new TypeError("attempted to "+t+" private field on non-instance");return e.get(i)}function Ht(i,e){return e.get?e.get.call(i):e.value}function Dt(i,e,t){if(e.set)e.set.call(i,t);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=t}}function Se(i,e){if(e.has(i))throw new TypeError("Cannot initialize the same private elements twice on an object")}function it(i,e,t){Se(i,e),e.set(i,t)}var Mt=100,m={},k=function(){m.previousActiveElement instanceof HTMLElement?(m.previousActiveElement.focus(),m.previousActiveElement=null):document.body&&document.body.focus()},S=function(e){return new Promise(function(t){if(!e)return t();var a=window.scrollX,c=window.scrollY;m.restoreFocusTimeout=setTimeout(function(){k(),t()},Mt),window.scrollTo(a,c)})},L="swal2-",I=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],f=I.reduce(function(i,e){return i[e]=L+e,i},{}),ge=["success","warning","info","question","error"],Te=ge.reduce(function(i,e){return i[e]=L+e,i},{}),ot="SweetAlert2:",Ut=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},J=function(e){console.warn("".concat(ot," ").concat(v(e)==="object"?e.join(" "):e))},ve=function(e){console.error("".concat(ot," ").concat(e))},Tn=[],ba=function(e){Tn.includes(e)||(Tn.push(e),J(e))},ya=function(e,t){ba('"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'))},st=function(e){return typeof e=="function"?e():e},Nt=function(e){return e&&typeof e.toPromise=="function"},Ne=function(e){return Nt(e)?e.toPromise():Promise.resolve(e)},qt=function(e){return e&&Promise.resolve(e)===e},W=function(){return document.body.querySelector(".".concat(f.container))},qe=function(e){var t=W();return t?t.querySelector(e):null},K=function(e){return qe(".".concat(e))},B=function(){return K(f.popup)},$e=function(){return K(f.icon)},xa=function(){return K(f["icon-content"])},On=function(){return K(f.title)},$t=function(){return K(f["html-container"])},In=function(){return K(f.image)},Vt=function(){return K(f["progress-steps"])},lt=function(){return K(f["validation-message"])},re=function(){return qe(".".concat(f.actions," .").concat(f.confirm))},Oe=function(){return qe(".".concat(f.actions," .").concat(f.cancel))},be=function(){return qe(".".concat(f.actions," .").concat(f.deny))},ka=function(){return K(f["input-label"])},Ie=function(){return qe(".".concat(f.loader))},Ve=function(){return K(f.actions)},_n=function(){return K(f.footer)},ct=function(){return K(f["timer-progress-bar"])},zt=function(){return K(f.close)},Ca=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Wt=function(){var e=B();if(!e)return[];var t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),a=Array.from(t).sort(function(b,A){var P=parseInt(b.getAttribute("tabindex")||"0"),M=parseInt(A.getAttribute("tabindex")||"0");return P>M?1:P<M?-1:0}),c=e.querySelectorAll(Ca),p=Array.from(c).filter(function(b){return b.getAttribute("tabindex")!=="-1"});return Me(new Set(a.concat(p))).filter(function(b){return X(b)})},Jt=function(){return ce(document.body,f.shown)&&!ce(document.body,f["toast-shown"])&&!ce(document.body,f["no-backdrop"])},dt=function(){var e=B();return e?ce(e,f.toast):!1},Ea=function(){var e=B();return e?e.hasAttribute("data-loading"):!1},G=function(e,t){if(e.textContent="",t){var a=new DOMParser,c=a.parseFromString(t,"text/html"),p=c.querySelector("head");p&&Array.from(p.childNodes).forEach(function(A){e.appendChild(A)});var b=c.querySelector("body");b&&Array.from(b.childNodes).forEach(function(A){A instanceof HTMLVideoElement||A instanceof HTMLAudioElement?e.appendChild(A.cloneNode(!0)):e.appendChild(A)})}},ce=function(e,t){if(!t)return!1;for(var a=t.split(/\s+/),c=0;c<a.length;c++)if(!e.classList.contains(a[c]))return!1;return!0},Aa=function(e,t){Array.from(e.classList).forEach(function(a){!Object.values(f).includes(a)&&!Object.values(Te).includes(a)&&!Object.values(t.showClass||{}).includes(a)&&e.classList.remove(a)})},Z=function(e,t,a){if(Aa(e,t),t.customClass&&t.customClass[a]){if(typeof t.customClass[a]!="string"&&!t.customClass[a].forEach){J("Invalid type of customClass.".concat(a,'! Expected string or iterable object, got "').concat(v(t.customClass[a]),'"'));return}O(e,t.customClass[a])}},ut=function(e,t){if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(f.popup," > .").concat(f[t]));case"checkbox":return e.querySelector(".".concat(f.popup," > .").concat(f.checkbox," input"));case"radio":return e.querySelector(".".concat(f.popup," > .").concat(f.radio," input:checked"))||e.querySelector(".".concat(f.popup," > .").concat(f.radio," input:first-child"));case"range":return e.querySelector(".".concat(f.popup," > .").concat(f.range," input"));default:return e.querySelector(".".concat(f.popup," > .").concat(f.input))}},Bn=function(e){if(e.focus(),e.type!=="file"){var t=e.value;e.value="",e.value=t}},Ln=function(e,t,a){!e||!t||(typeof t=="string"&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(c){Array.isArray(e)?e.forEach(function(p){a?p.classList.add(c):p.classList.remove(c)}):a?e.classList.add(c):e.classList.remove(c)}))},O=function(e,t){Ln(e,t,!0)},ae=function(e,t){Ln(e,t,!1)},ue=function(e,t){for(var a=Array.from(e.children),c=0;c<a.length;c++){var p=a[c];if(p instanceof HTMLElement&&ce(p,t))return p}},ye=function(e,t,a){a==="".concat(parseInt(a))&&(a=parseInt(a)),a||parseInt(a)===0?e.style.setProperty(t,typeof a=="number"?"".concat(a,"px"):a):e.style.removeProperty(t)},$=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";e&&(e.style.display=t)},V=function(e){e&&(e.style.display="none")},Kt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";e&&new MutationObserver(function(){ze(e,e.innerHTML,t)}).observe(e,{childList:!0,subtree:!0})},Rn=function(e,t,a,c){var p=e.querySelector(t);p&&p.style.setProperty(a,c)},ze=function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";t?$(e,a):V(e)},X=function(e){return!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length))},Pa=function(){return!X(re())&&!X(be())&&!X(Oe())},jn=function(e){return e.scrollHeight>e.clientHeight},Fn=function(e){var t=window.getComputedStyle(e),a=parseFloat(t.getPropertyValue("animation-duration")||"0"),c=parseFloat(t.getPropertyValue("transition-duration")||"0");return a>0||c>0},Gt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=ct();a&&X(a)&&(t&&(a.style.transition="none",a.style.width="100%"),setTimeout(function(){a.style.transition="width ".concat(e/1e3,"s linear"),a.style.width="0%"},10))},Sa=function(){var e=ct();if(e){var t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";var a=parseInt(window.getComputedStyle(e).width),c=t/a*100;e.style.width="".concat(c,"%")}},Hn=function(){return typeof window>"u"||typeof document>"u"},Ta=`
 <div aria-labelledby="`.concat(f.title,'" aria-describedby="').concat(f["html-container"],'" class="').concat(f.popup,`" tabindex="-1">
   <button type="button" class="`).concat(f.close,`"></button>
   <ul class="`).concat(f["progress-steps"],`"></ul>
   <div class="`).concat(f.icon,`"></div>
   <img class="`).concat(f.image,`" />
   <h2 class="`).concat(f.title,'" id="').concat(f.title,`"></h2>
   <div class="`).concat(f["html-container"],'" id="').concat(f["html-container"],`"></div>
   <input class="`).concat(f.input,'" id="').concat(f.input,`" />
   <input type="file" class="`).concat(f.file,`" />
   <div class="`).concat(f.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(f.select,'" id="').concat(f.select,`"></select>
   <div class="`).concat(f.radio,`"></div>
   <label class="`).concat(f.checkbox,`">
     <input type="checkbox" id="`).concat(f.checkbox,`" />
     <span class="`).concat(f.label,`"></span>
   </label>
   <textarea class="`).concat(f.textarea,'" id="').concat(f.textarea,`"></textarea>
   <div class="`).concat(f["validation-message"],'" id="').concat(f["validation-message"],`"></div>
   <div class="`).concat(f.actions,`">
     <div class="`).concat(f.loader,`"></div>
     <button type="button" class="`).concat(f.confirm,`"></button>
     <button type="button" class="`).concat(f.deny,`"></button>
     <button type="button" class="`).concat(f.cancel,`"></button>
   </div>
   <div class="`).concat(f.footer,`"></div>
   <div class="`).concat(f["timer-progress-bar-container"],`">
     <div class="`).concat(f["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Oa=function(){var e=W();return e?(e.remove(),ae([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},xe=function(){m.currentInstance.resetValidationMessage()},Ia=function(){var e=B(),t=ue(e,f.input),a=ue(e,f.file),c=e.querySelector(".".concat(f.range," input")),p=e.querySelector(".".concat(f.range," output")),b=ue(e,f.select),A=e.querySelector(".".concat(f.checkbox," input")),P=ue(e,f.textarea);t.oninput=xe,a.onchange=xe,b.onchange=xe,A.onchange=xe,P.oninput=xe,c.oninput=function(){xe(),p.value=c.value},c.onchange=function(){xe(),p.value=c.value}},_a=function(e){return typeof e=="string"?document.querySelector(e):e},Ba=function(e){var t=B();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},La=function(e){window.getComputedStyle(e).direction==="rtl"&&O(W(),f.rtl)},Ra=function(e){var t=Oa();if(Hn()){ve("SweetAlert2 requires document to initialize");return}var a=document.createElement("div");a.className=f.container,t&&O(a,f["no-transition"]),G(a,Ta);var c=_a(e.target);c.appendChild(a),Ba(e),La(c),Ia()},Xt=function(e,t){e instanceof HTMLElement?t.appendChild(e):v(e)==="object"?ja(e,t):e&&G(t,e)},ja=function(e,t){e.jquery?Fa(t,e):G(t,e.toString())},Fa=function(e,t){if(e.textContent="",0 in t)for(var a=0;a in t;a++)e.appendChild(t[a].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},ke=function(){if(Hn())return!1;var i=document.createElement("div");return typeof i.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof i.style.animation<"u"?"animationend":!1}(),Ha=function(e,t){var a=Ve(),c=Ie();!a||!c||(!t.showConfirmButton&&!t.showDenyButton&&!t.showCancelButton?V(a):$(a),Z(a,t,"actions"),Da(a,c,t),G(c,t.loaderHtml||""),Z(c,t,"loader"))};function Da(i,e,t){var a=re(),c=be(),p=Oe();!a||!c||!p||(Yt(a,"confirm",t),Yt(c,"deny",t),Yt(p,"cancel",t),Ma(a,c,p,t),t.reverseButtons&&(t.toast?(i.insertBefore(p,a),i.insertBefore(c,a)):(i.insertBefore(p,e),i.insertBefore(c,e),i.insertBefore(a,e))))}function Ma(i,e,t,a){if(!a.buttonsStyling){ae([i,e,t],f.styled);return}O([i,e,t],f.styled),a.confirmButtonColor&&(i.style.backgroundColor=a.confirmButtonColor,O(i,f["default-outline"])),a.denyButtonColor&&(e.style.backgroundColor=a.denyButtonColor,O(e,f["default-outline"])),a.cancelButtonColor&&(t.style.backgroundColor=a.cancelButtonColor,O(t,f["default-outline"]))}function Yt(i,e,t){var a=Ut(e);ze(i,t["show".concat(a,"Button")],"inline-block"),G(i,t["".concat(e,"ButtonText")]||""),i.setAttribute("aria-label",t["".concat(e,"ButtonAriaLabel")]||""),i.className=f[e],Z(i,t,"".concat(e,"Button"))}var Ua=function(e,t){var a=zt();a&&(G(a,t.closeButtonHtml||""),Z(a,t,"closeButton"),ze(a,t.showCloseButton),a.setAttribute("aria-label",t.closeButtonAriaLabel||""))},Na=function(e,t){var a=W();a&&(qa(a,t.backdrop),$a(a,t.position),Va(a,t.grow),Z(a,t,"container"))};function qa(i,e){typeof e=="string"?i.style.background=e:e||O([document.documentElement,document.body],f["no-backdrop"])}function $a(i,e){e&&(e in f?O(i,f[e]):(J('The "position" parameter is not valid, defaulting to "center"'),O(i,f.center)))}function Va(i,e){e&&O(i,f["grow-".concat(e)])}var j={innerParams:new WeakMap,domCache:new WeakMap},za=["input","file","range","select","radio","checkbox","textarea"],Wa=function(e,t){var a=B();if(a){var c=j.innerParams.get(e),p=!c||t.input!==c.input;za.forEach(function(b){var A=ue(a,f[b]);A&&(Ga(b,t.inputAttributes),A.className=f[b],p&&V(A))}),t.input&&(p&&Ja(t),Xa(t))}},Ja=function(e){if(e.input){if(!U[e.input]){ve("Unexpected type of input! Expected ".concat(Object.keys(U).join(" | "),', got "').concat(e.input,'"'));return}var t=Dn(e.input),a=U[e.input](t,e);$(t),e.inputAutoFocus&&setTimeout(function(){Bn(a)})}},Ka=function(e){for(var t=0;t<e.attributes.length;t++){var a=e.attributes[t].name;["id","type","value","style"].includes(a)||e.removeAttribute(a)}},Ga=function(e,t){var a=ut(B(),e);if(a){Ka(a);for(var c in t)a.setAttribute(c,t[c])}},Xa=function(e){var t=Dn(e.input);v(e.customClass)==="object"&&O(t,e.customClass.input)},Zt=function(e,t){(!e.placeholder||t.inputPlaceholder)&&(e.placeholder=t.inputPlaceholder)},We=function(e,t,a){if(a.inputLabel){var c=document.createElement("label"),p=f["input-label"];c.setAttribute("for",e.id),c.className=p,v(a.customClass)==="object"&&O(c,a.customClass.inputLabel),c.innerText=a.inputLabel,t.insertAdjacentElement("beforebegin",c)}},Dn=function(e){return ue(B(),f[e]||f.input)},ft=function(e,t){["string","number"].includes(v(t))?e.value="".concat(t):qt(t)||J('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(v(t),'"'))},U={};U.text=U.email=U.password=U.number=U.tel=U.url=U.search=U.date=U["datetime-local"]=U.time=U.week=U.month=function(i,e){return ft(i,e.inputValue),We(i,i,e),Zt(i,e),i.type=e.input,i},U.file=function(i,e){return We(i,i,e),Zt(i,e),i},U.range=function(i,e){var t=i.querySelector("input"),a=i.querySelector("output");return ft(t,e.inputValue),t.type=e.input,ft(a,e.inputValue),We(t,i,e),i},U.select=function(i,e){if(i.textContent="",e.inputPlaceholder){var t=document.createElement("option");G(t,e.inputPlaceholder),t.value="",t.disabled=!0,t.selected=!0,i.appendChild(t)}return We(i,i,e),i},U.radio=function(i){return i.textContent="",i},U.checkbox=function(i,e){var t=ut(B(),"checkbox");t.value="1",t.checked=!!e.inputValue;var a=i.querySelector("span");return G(a,e.inputPlaceholder),t},U.textarea=function(i,e){ft(i,e.inputValue),Zt(i,e),We(i,i,e);var t=function(c){return parseInt(window.getComputedStyle(c).marginLeft)+parseInt(window.getComputedStyle(c).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var a=parseInt(window.getComputedStyle(B()).width),c=function(){if(document.body.contains(i)){var b=i.offsetWidth+t(i);b>a?B().style.width="".concat(b,"px"):ye(B(),"width",e.width)}};new MutationObserver(c).observe(i,{attributes:!0,attributeFilter:["style"]})}}),i};var Ya=function(e,t){var a=$t();a&&(Kt(a),Z(a,t,"htmlContainer"),t.html?(Xt(t.html,a),$(a,"block")):t.text?(a.textContent=t.text,$(a,"block")):V(a),Wa(e,t))},Za=function(e,t){var a=_n();a&&(Kt(a),ze(a,t.footer,"block"),t.footer&&Xt(t.footer,a),Z(a,t,"footer"))},Qa=function(e,t){var a=j.innerParams.get(e),c=$e();if(c){if(a&&t.icon===a.icon){Un(c,t),Mn(c,t);return}if(!t.icon&&!t.iconHtml){V(c);return}if(t.icon&&Object.keys(Te).indexOf(t.icon)===-1){ve('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"')),V(c);return}$(c),Un(c,t),Mn(c,t),O(c,t.showClass&&t.showClass.icon)}},Mn=function(e,t){for(var a=0,c=Object.entries(Te);a<c.length;a++){var p=Y(c[a],2),b=p[0],A=p[1];t.icon!==b&&ae(e,A)}O(e,t.icon&&Te[t.icon]),ri(e,t),ei(),Z(e,t,"icon")},ei=function(){var e=B();if(e)for(var t=window.getComputedStyle(e).getPropertyValue("background-color"),a=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),c=0;c<a.length;c++)a[c].style.backgroundColor=t},ti=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ni=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Un=function(e,t){if(!(!t.icon&&!t.iconHtml)){var a=e.innerHTML,c="";if(t.iconHtml)c=Nn(t.iconHtml);else if(t.icon==="success")c=ti,a=a.replace(/ style=".*?"/g,"");else if(t.icon==="error")c=ni;else if(t.icon){var p={question:"?",warning:"!",info:"i"};c=Nn(p[t.icon])}a.trim()!==c.trim()&&G(e,c)}},ri=function(e,t){if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(var a=0,c=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];a<c.length;a++){var p=c[a];Rn(e,p,"background-color",t.iconColor)}Rn(e,".swal2-success-ring","border-color",t.iconColor)}},Nn=function(e){return'<div class="'.concat(f["icon-content"],'">').concat(e,"</div>")},ai=function(e,t){var a=In();if(a){if(!t.imageUrl){V(a);return}$(a,""),a.setAttribute("src",t.imageUrl),a.setAttribute("alt",t.imageAlt||""),ye(a,"width",t.imageWidth),ye(a,"height",t.imageHeight),a.className=f.image,Z(a,t,"image")}},ii=function(e,t){var a=W(),c=B();if(!(!a||!c)){if(t.toast){ye(a,"width",t.width),c.style.width="100%";var p=Ie();p&&c.insertBefore(p,$e())}else ye(c,"width",t.width);ye(c,"padding",t.padding),t.color&&(c.style.color=t.color),t.background&&(c.style.background=t.background),V(lt()),oi(c,t)}},oi=function(e,t){var a=t.showClass||{};e.className="".concat(f.popup," ").concat(X(e)?a.popup:""),t.toast?(O([document.documentElement,document.body],f["toast-shown"]),O(e,f.toast)):O(e,f.modal),Z(e,t,"popup"),typeof t.customClass=="string"&&O(e,t.customClass),t.icon&&O(e,f["icon-".concat(t.icon)])},si=function(e,t){var a=Vt();if(a){var c=t.progressSteps,p=t.currentProgressStep;if(!c||c.length===0||p===void 0){V(a);return}$(a),a.textContent="",p>=c.length&&J("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),c.forEach(function(b,A){var P=li(b);if(a.appendChild(P),A===p&&O(P,f["active-progress-step"]),A!==c.length-1){var M=ci(t);a.appendChild(M)}})}},li=function(e){var t=document.createElement("li");return O(t,f["progress-step"]),G(t,e),t},ci=function(e){var t=document.createElement("li");return O(t,f["progress-step-line"]),e.progressStepsDistance&&ye(t,"width",e.progressStepsDistance),t},di=function(e,t){var a=On();a&&(Kt(a),ze(a,t.title||t.titleText,"block"),t.title&&Xt(t.title,a),t.titleText&&(a.innerText=t.titleText),Z(a,t,"title"))},qn=function(e,t){ii(e,t),Na(e,t),si(e,t),Qa(e,t),ai(e,t),di(e,t),Ua(e,t),Ya(e,t),Ha(e,t),Za(e,t);var a=B();typeof t.didRender=="function"&&a&&t.didRender(a)},ui=function(){return X(B())},$n=function(){var e;return(e=re())===null||e===void 0?void 0:e.click()},fi=function(){var e;return(e=be())===null||e===void 0?void 0:e.click()},mi=function(){var e;return(e=Oe())===null||e===void 0?void 0:e.click()},_e=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Vn=function(e){e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},pi=function(e,t,a){Vn(e),t.toast||(e.keydownHandler=function(c){return wi(t,c,a)},e.keydownTarget=t.keydownListenerCapture?window:B(),e.keydownListenerCapture=t.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Qt=function(e,t){var a,c=Wt();if(c.length){e=e+t,e===c.length?e=0:e===-1&&(e=c.length-1),c[e].focus();return}(a=B())===null||a===void 0||a.focus()},zn=["ArrowRight","ArrowDown"],hi=["ArrowLeft","ArrowUp"],wi=function(e,t,a){e&&(t.isComposing||t.keyCode===229||(e.stopKeydownPropagation&&t.stopPropagation(),t.key==="Enter"?gi(t,e):t.key==="Tab"?vi(t):[].concat(zn,hi).includes(t.key)?bi(t.key):t.key==="Escape"&&yi(t,e,a)))},gi=function(e,t){if(st(t.allowEnterKey)){var a=ut(B(),t.input);if(e.target&&a&&e.target instanceof HTMLElement&&e.target.outerHTML===a.outerHTML){if(["textarea","file"].includes(t.input))return;$n(),e.preventDefault()}}},vi=function(e){for(var t=e.target,a=Wt(),c=-1,p=0;p<a.length;p++)if(t===a[p]){c=p;break}e.shiftKey?Qt(c,-1):Qt(c,1),e.stopPropagation(),e.preventDefault()},bi=function(e){var t=Ve(),a=re(),c=be(),p=Oe();if(!(!t||!a||!c||!p)){var b=[a,c,p];if(!(document.activeElement instanceof HTMLElement&&!b.includes(document.activeElement))){var A=zn.includes(e)?"nextElementSibling":"previousElementSibling",P=document.activeElement;if(P){for(var M=0;M<t.children.length;M++){if(P=P[A],!P)return;if(P instanceof HTMLButtonElement&&X(P))break}P instanceof HTMLButtonElement&&P.focus()}}}},yi=function(e,t,a){st(t.allowEscapeKey)&&(e.preventDefault(),a(_e.esc))},Be={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},xi=function(){var e=Array.from(document.body.children);e.forEach(function(t){t===W()||t.contains(W())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")||""),t.setAttribute("aria-hidden","true"))})},Wn=function(){var e=Array.from(document.body.children);e.forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")||""),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Jn=typeof window<"u"&&!!window.GestureEvent,ki=function(){if(Jn&&!ce(document.body,f.iosfix)){var e=document.body.scrollTop;document.body.style.top="".concat(e*-1,"px"),O(document.body,f.iosfix),Ci()}},Ci=function(){var e=W();if(e){var t;e.ontouchstart=function(a){t=Ei(a)},e.ontouchmove=function(a){t&&(a.preventDefault(),a.stopPropagation())}}},Ei=function(e){var t=e.target,a=W(),c=$t();return!a||!c||Ai(e)||Pi(e)?!1:t===a||!jn(a)&&t instanceof HTMLElement&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&!(jn(c)&&c.contains(t))},Ai=function(e){return e.touches&&e.touches.length&&e.touches[0].touchType==="stylus"},Pi=function(e){return e.touches&&e.touches.length>1},Si=function(){if(ce(document.body,f.iosfix)){var e=parseInt(document.body.style.top,10);ae(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},Ti=function(){var e=document.createElement("div");e.className=f["scrollbar-measure"],document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},Le=null,Oi=function(e){Le===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")&&(Le=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Le+Ti(),"px"))},Ii=function(){Le!==null&&(document.body.style.paddingRight="".concat(Le,"px"),Le=null)};function Kn(i,e,t,a){dt()?Xn(i,a):(S(t).then(function(){return Xn(i,a)}),Vn(m)),Jn?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Jt()&&(Ii(),Si(),Wn()),_i()}function _i(){ae([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function fe(i){i=Li(i);var e=Be.swalPromiseResolve.get(this),t=Bi(this);this.isAwaitingPromise?i.isDismissed||(Je(this),e(i)):t&&e(i)}var Bi=function(e){var t=B();if(!t)return!1;var a=j.innerParams.get(e);if(!a||ce(t,a.hideClass.popup))return!1;ae(t,a.showClass.popup),O(t,a.hideClass.popup);var c=W();return ae(c,a.showClass.backdrop),O(c,a.hideClass.backdrop),Ri(e,t,a),!0};function Gn(i){var e=Be.swalPromiseReject.get(this);Je(this),e&&e(i)}var Je=function(e){e.isAwaitingPromise&&(delete e.isAwaitingPromise,j.innerParams.get(e)||e._destroy())},Li=function(e){return typeof e>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e)},Ri=function(e,t,a){var c=W(),p=ke&&Fn(t);typeof a.willClose=="function"&&a.willClose(t),p?ji(e,t,c,a.returnFocus,a.didClose):Kn(e,c,a.returnFocus,a.didClose)},ji=function(e,t,a,c,p){ke&&(m.swalCloseEventFinishedCallback=Kn.bind(null,e,a,c,p),t.addEventListener(ke,function(b){b.target===t&&(m.swalCloseEventFinishedCallback(),delete m.swalCloseEventFinishedCallback)}))},Xn=function(e,t){setTimeout(function(){typeof t=="function"&&t.bind(e.params)(),e._destroy&&e._destroy()})},Re=function(e){var t=B();if(t||new gt,t=B(),!!t){var a=Ie();dt()?V($e()):Fi(t,e),$(a),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()}},Fi=function(e,t){var a=Ve(),c=Ie();!a||!c||(!t&&X(re())&&(t=re()),$(a),t&&(V(t),c.setAttribute("data-button-to-replace",t.className),a.insertBefore(c,t)),O([e,a],f.loading))},Hi=function(e,t){t.input==="select"||t.input==="radio"?qi(e,t):["text","email","number","tel","textarea"].some(function(a){return a===t.input})&&(Nt(t.inputValue)||qt(t.inputValue))&&(Re(re()),$i(e,t))},Di=function(e,t){var a=e.getInput();if(!a)return null;switch(t.input){case"checkbox":return Mi(a);case"radio":return Ui(a);case"file":return Ni(a);default:return t.inputAutoTrim?a.value.trim():a.value}},Mi=function(e){return e.checked?1:0},Ui=function(e){return e.checked?e.value:null},Ni=function(e){return e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null},qi=function(e,t){var a=B();if(a){var c=function(b){t.input==="select"?Vi(a,Yn(b),t):t.input==="radio"&&zi(a,Yn(b),t)};Nt(t.inputOptions)||qt(t.inputOptions)?(Re(re()),Ne(t.inputOptions).then(function(p){e.hideLoading(),c(p)})):v(t.inputOptions)==="object"?c(t.inputOptions):ve("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(v(t.inputOptions)))}},$i=function(e,t){var a=e.getInput();a&&(V(a),Ne(t.inputValue).then(function(c){a.value=t.input==="number"?"".concat(parseFloat(c)||0):"".concat(c),$(a),a.focus(),e.hideLoading()}).catch(function(c){ve("Error in inputValue promise: ".concat(c)),a.value="",$(a),a.focus(),e.hideLoading()}))};function Vi(i,e,t){var a=ue(i,f.select);if(a){var c=function(b,A,P){var M=document.createElement("option");M.value=P,G(M,A),M.selected=Zn(P,t.inputValue),b.appendChild(M)};e.forEach(function(p){var b=p[0],A=p[1];if(Array.isArray(A)){var P=document.createElement("optgroup");P.label=b,P.disabled=!1,a.appendChild(P),A.forEach(function(M){return c(P,M[1],M[0])})}else c(a,A,b)}),a.focus()}}function zi(i,e,t){var a=ue(i,f.radio);if(a){e.forEach(function(p){var b=p[0],A=p[1],P=document.createElement("input"),M=document.createElement("label");P.type="radio",P.name=f.radio,P.value=b,Zn(b,t.inputValue)&&(P.checked=!0);var Ke=document.createElement("span");G(Ke,A),Ke.className=f.label,M.appendChild(P),M.appendChild(Ke),a.appendChild(M)});var c=a.querySelectorAll("input");c.length&&c[0].focus()}}var Yn=function i(e){var t=[];return e instanceof Map?e.forEach(function(a,c){var p=a;v(p)==="object"&&(p=i(p)),t.push([c,p])}):Object.keys(e).forEach(function(a){var c=e[a];v(c)==="object"&&(c=i(c)),t.push([a,c])}),t},Zn=function(e,t){return!!t&&t.toString()===e.toString()},mt=void 0,Wi=function(e){var t=j.innerParams.get(e);e.disableButtons(),t.input?Qn(e,"confirm"):tn(e,!0)},Ji=function(e){var t=j.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?Qn(e,"deny"):en(e,!1)},Ki=function(e,t){e.disableButtons(),t(_e.cancel)},Qn=function(e,t){var a=j.innerParams.get(e);if(!a.input){ve('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Ut(t)));return}var c=e.getInput(),p=Di(e,a);a.inputValidator?Gi(e,p,t):c&&!c.checkValidity()?(e.enableButtons(),e.showValidationMessage(a.validationMessage||c.validationMessage)):t==="deny"?en(e,p):tn(e,p)},Gi=function(e,t,a){var c=j.innerParams.get(e);e.disableInput();var p=Promise.resolve().then(function(){return Ne(c.inputValidator(t,c.validationMessage))});p.then(function(b){e.enableButtons(),e.enableInput(),b?e.showValidationMessage(b):a==="deny"?en(e,t):tn(e,t)})},en=function(e,t){var a=j.innerParams.get(e||mt);if(a.showLoaderOnDeny&&Re(be()),a.preDeny){e.isAwaitingPromise=!0;var c=Promise.resolve().then(function(){return Ne(a.preDeny(t,a.validationMessage))});c.then(function(p){p===!1?(e.hideLoading(),Je(e)):e.close({isDenied:!0,value:typeof p>"u"?t:p})}).catch(function(p){return tr(e||mt,p)})}else e.close({isDenied:!0,value:t})},er=function(e,t){e.close({isConfirmed:!0,value:t})},tr=function(e,t){e.rejectPromise(t)},tn=function(e,t){var a=j.innerParams.get(e||mt);if(a.showLoaderOnConfirm&&Re(),a.preConfirm){e.resetValidationMessage(),e.isAwaitingPromise=!0;var c=Promise.resolve().then(function(){return Ne(a.preConfirm(t,a.validationMessage))});c.then(function(p){X(lt())||p===!1?(e.hideLoading(),Je(e)):er(e,typeof p>"u"?t:p)}).catch(function(p){return tr(e||mt,p)})}else er(e,t)};function pt(){var i=j.innerParams.get(this);if(i){var e=j.domCache.get(this);V(e.loader),dt()?i.icon&&$($e()):Xi(e),ae([e.popup,e.actions],f.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}}var Xi=function(e){var t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?$(t[0],"inline-block"):Pa()&&V(e.actions)};function nr(){var i=j.innerParams.get(this),e=j.domCache.get(this);return e?ut(e.popup,i.input):null}function rr(i,e,t){var a=j.domCache.get(i);e.forEach(function(c){a[c].disabled=t})}function ar(i,e){var t=B();if(!(!t||!i))if(i.type==="radio")for(var a=t.querySelectorAll('[name="'.concat(f.radio,'"]')),c=0;c<a.length;c++)a[c].disabled=e;else i.disabled=e}function ir(){rr(this,["confirmButton","denyButton","cancelButton"],!1)}function or(){rr(this,["confirmButton","denyButton","cancelButton"],!0)}function sr(){ar(this.getInput(),!1)}function lr(){ar(this.getInput(),!0)}function cr(i){var e=j.domCache.get(this),t=j.innerParams.get(this);G(e.validationMessage,i),e.validationMessage.className=f["validation-message"],t.customClass&&t.customClass.validationMessage&&O(e.validationMessage,t.customClass.validationMessage),$(e.validationMessage);var a=this.getInput();a&&(a.setAttribute("aria-invalid","true"),a.setAttribute("aria-describedby",f["validation-message"]),Bn(a),O(a,f.inputerror))}function dr(){var i=j.domCache.get(this);i.validationMessage&&V(i.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ae(e,f.inputerror))}var je={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Yi=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Zi={},Qi=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ur=function(e){return Object.prototype.hasOwnProperty.call(je,e)},fr=function(e){return Yi.indexOf(e)!==-1},mr=function(e){return Zi[e]},eo=function(e){ur(e)||J('Unknown parameter "'.concat(e,'"'))},to=function(e){Qi.includes(e)&&J('The parameter "'.concat(e,'" is incompatible with toasts'))},no=function(e){var t=mr(e);t&&ya(e,t)},ro=function(e){e.backdrop===!1&&e.allowOutsideClick&&J('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var t in e)eo(t),e.toast&&to(t),no(t)};function pr(i){var e=B(),t=j.innerParams.get(this);if(!e||ce(e,t.hideClass.popup)){J("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var a=ao(i),c=Object.assign({},t,a);qn(this,c),j.innerParams.set(this,c),Object.defineProperties(this,{params:{value:Object.assign({},this.params,i),writable:!1,enumerable:!0}})}var ao=function(e){var t={};return Object.keys(e).forEach(function(a){fr(a)?t[a]=e[a]:J("Invalid parameter to update: ".concat(a))}),t};function hr(){var i=j.domCache.get(this),e=j.innerParams.get(this);if(!e){wr(this);return}i.popup&&m.swalCloseEventFinishedCallback&&(m.swalCloseEventFinishedCallback(),delete m.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),io(this)}var io=function(e){wr(e),delete e.params,delete m.keydownHandler,delete m.keydownTarget,delete m.currentInstance},wr=function(e){e.isAwaitingPromise?(nn(j,e),e.isAwaitingPromise=!0):(nn(Be,e),nn(j,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},nn=function(e,t){for(var a in e)e[a].delete(t)},oo=Object.freeze({__proto__:null,_destroy:hr,close:fe,closeModal:fe,closePopup:fe,closeToast:fe,disableButtons:or,disableInput:lr,disableLoading:pt,enableButtons:ir,enableInput:sr,getInput:nr,handleAwaitingPromise:Je,hideLoading:pt,rejectPromise:Gn,resetValidationMessage:dr,showValidationMessage:cr,update:pr}),so=function(e,t,a){e.toast?lo(e,t,a):(uo(t),fo(t),mo(e,t,a))},lo=function(e,t,a){t.popup.onclick=function(){e&&(co(e)||e.timer||e.input)||a(_e.close)}},co=function(e){return!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton)},ht=!1,uo=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=function(){},t.target===e.container&&(ht=!0)}}},fo=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=function(){},(t.target===e.popup||t.target instanceof HTMLElement&&e.popup.contains(t.target))&&(ht=!0)}}},mo=function(e,t,a){t.container.onclick=function(c){if(ht){ht=!1;return}c.target===t.container&&st(e.allowOutsideClick)&&a(_e.backdrop)}},po=function(e){return v(e)==="object"&&e.jquery},gr=function(e){return e instanceof Element||po(e)},ho=function(e){var t={};return v(e[0])==="object"&&!gr(e[0])?Object.assign(t,e[0]):["title","html","icon"].forEach(function(a,c){var p=e[c];typeof p=="string"||gr(p)?t[a]=p:p!==void 0&&ve("Unexpected type of ".concat(a,'! Expected "string" or "Element", got ').concat(v(p)))}),t};function wo(){for(var i=this,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return s(i,t)}function go(i){var e=function(t){_(a,t);function a(){return y(this,a),o(this,a,arguments)}return g(a,[{key:"_main",value:function(p,b){return z(R(a.prototype),"_main",this).call(this,p,Object.assign({},i,b))}}]),a}(this);return e}var vo=function(){return m.timeout&&m.timeout.getTimerLeft()},vr=function(){if(m.timeout)return Sa(),m.timeout.stop()},br=function(){if(m.timeout){var e=m.timeout.start();return Gt(e),e}},bo=function(){var e=m.timeout;return e&&(e.running?vr():br())},yo=function(e){if(m.timeout){var t=m.timeout.increase(e);return Gt(t,!0),t}},xo=function(){return!!(m.timeout&&m.timeout.isRunning())},yr=!1,rn={};function ko(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";rn[i]=this,yr||(document.body.addEventListener("click",Co),yr=!0)}var Co=function(e){for(var t=e.target;t&&t!==document;t=t.parentNode)for(var a in rn){var c=t.getAttribute(a);if(c){rn[a].fire({template:c});return}}},Eo=Object.freeze({__proto__:null,argsToParams:ho,bindClickHandler:ko,clickCancel:mi,clickConfirm:$n,clickDeny:fi,enableLoading:Re,fire:wo,getActions:Ve,getCancelButton:Oe,getCloseButton:zt,getConfirmButton:re,getContainer:W,getDenyButton:be,getFocusableElements:Wt,getFooter:_n,getHtmlContainer:$t,getIcon:$e,getIconContent:xa,getImage:In,getInputLabel:ka,getLoader:Ie,getPopup:B,getProgressSteps:Vt,getTimerLeft:vo,getTimerProgressBar:ct,getTitle:On,getValidationMessage:lt,increaseTimer:yo,isDeprecatedParameter:mr,isLoading:Ea,isTimerRunning:xo,isUpdatableParameter:fr,isValidParameter:ur,isVisible:ui,mixin:go,resumeTimer:br,showLoading:Re,stopTimer:vr,toggleTimer:bo}),Ao=function(){function i(e,t){y(this,i),this.callback=e,this.remaining=t,this.running=!1,this.start()}return g(i,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(t){var a=this.running;return a&&this.stop(),this.remaining+=t,a&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),i}(),xr=["swal-title","swal-html","swal-footer"],Po=function(e){var t=typeof e.template=="string"?document.querySelector(e.template):e.template;if(!t)return{};var a=t.content;Ro(a);var c=Object.assign(So(a),To(a),Oo(a),Io(a),_o(a),Bo(a),Lo(a,xr));return c},So=function(e){var t={},a=Array.from(e.querySelectorAll("swal-param"));return a.forEach(function(c){Ce(c,["name","value"]);var p=c.getAttribute("name"),b=c.getAttribute("value");typeof je[p]=="boolean"?t[p]=b!=="false":v(je[p])==="object"?t[p]=JSON.parse(b):t[p]=b}),t},To=function(e){var t={},a=Array.from(e.querySelectorAll("swal-function-param"));return a.forEach(function(c){var p=c.getAttribute("name"),b=c.getAttribute("value");t[p]=new Function("return ".concat(b))()}),t},Oo=function(e){var t={},a=Array.from(e.querySelectorAll("swal-button"));return a.forEach(function(c){Ce(c,["type","color","aria-label"]);var p=c.getAttribute("type");t["".concat(p,"ButtonText")]=c.innerHTML,t["show".concat(Ut(p),"Button")]=!0,c.hasAttribute("color")&&(t["".concat(p,"ButtonColor")]=c.getAttribute("color")),c.hasAttribute("aria-label")&&(t["".concat(p,"ButtonAriaLabel")]=c.getAttribute("aria-label"))}),t},Io=function(e){var t={},a=e.querySelector("swal-image");return a&&(Ce(a,["src","width","height","alt"]),a.hasAttribute("src")&&(t.imageUrl=a.getAttribute("src")),a.hasAttribute("width")&&(t.imageWidth=a.getAttribute("width")),a.hasAttribute("height")&&(t.imageHeight=a.getAttribute("height")),a.hasAttribute("alt")&&(t.imageAlt=a.getAttribute("alt"))),t},_o=function(e){var t={},a=e.querySelector("swal-icon");return a&&(Ce(a,["type","color"]),a.hasAttribute("type")&&(t.icon=a.getAttribute("type")),a.hasAttribute("color")&&(t.iconColor=a.getAttribute("color")),t.iconHtml=a.innerHTML),t},Bo=function(e){var t={},a=e.querySelector("swal-input");a&&(Ce(a,["type","label","placeholder","value"]),t.input=a.getAttribute("type")||"text",a.hasAttribute("label")&&(t.inputLabel=a.getAttribute("label")),a.hasAttribute("placeholder")&&(t.inputPlaceholder=a.getAttribute("placeholder")),a.hasAttribute("value")&&(t.inputValue=a.getAttribute("value")));var c=Array.from(e.querySelectorAll("swal-input-option"));return c.length&&(t.inputOptions={},c.forEach(function(p){Ce(p,["value"]);var b=p.getAttribute("value"),A=p.innerHTML;t.inputOptions[b]=A})),t},Lo=function(e,t){var a={};for(var c in t){var p=t[c],b=e.querySelector(p);b&&(Ce(b,[]),a[p.replace(/^swal-/,"")]=b.innerHTML.trim())}return a},Ro=function(e){var t=xr.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(function(a){var c=a.tagName.toLowerCase();t.includes(c)||J("Unrecognized element <".concat(c,">"))})},Ce=function(e,t){Array.from(e.attributes).forEach(function(a){t.indexOf(a.name)===-1&&J(['Unrecognized attribute "'.concat(a.name,'" on <').concat(e.tagName.toLowerCase(),">."),"".concat(t.length?"Allowed attributes are: ".concat(t.join(", ")):"To set the value, use HTML within the element.")])})},kr=10,jo=function(e){var t=W(),a=B();typeof e.willOpen=="function"&&e.willOpen(a);var c=window.getComputedStyle(document.body),p=c.overflowY;Mo(t,a,e),setTimeout(function(){Ho(t,a)},kr),Jt()&&(Do(t,e.scrollbarPadding,p),xi()),!dt()&&!m.previousActiveElement&&(m.previousActiveElement=document.activeElement),typeof e.didOpen=="function"&&setTimeout(function(){return e.didOpen(a)}),ae(t,f["no-transition"])},Fo=function i(e){var t=B();if(!(e.target!==t||!ke)){var a=W();t.removeEventListener(ke,i),a.style.overflowY="auto"}},Ho=function(e,t){ke&&Fn(t)?(e.style.overflowY="hidden",t.addEventListener(ke,Fo)):e.style.overflowY="auto"},Do=function(e,t,a){ki(),t&&a!=="hidden"&&Oi(a),setTimeout(function(){e.scrollTop=0})},Mo=function(e,t,a){O(e,a.showClass.backdrop),a.animation?(t.style.setProperty("opacity","0","important"),$(t,"grid"),setTimeout(function(){O(t,a.showClass.popup),t.style.removeProperty("opacity")},kr)):$(t,"grid"),O([document.documentElement,document.body],f.shown),a.heightAuto&&a.backdrop&&!a.toast&&O([document.documentElement,document.body],f["height-auto"])},Cr={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")}};function Uo(i){i.inputValidator||(i.input==="email"&&(i.inputValidator=Cr.email),i.input==="url"&&(i.inputValidator=Cr.url))}function No(i){(!i.target||typeof i.target=="string"&&!document.querySelector(i.target)||typeof i.target!="string"&&!i.target.appendChild)&&(J('Target parameter is not valid, defaulting to "body"'),i.target="body")}function qo(i){Uo(i),i.showLoaderOnConfirm&&!i.preConfirm&&J(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),No(i),typeof i.title=="string"&&(i.title=i.title.split(`
`).join("<br />")),Ra(i)}var ie,wt=new WeakMap,N=function(){function i(){if(y(this,i),it(this,wt,{writable:!0,value:void 0}),!(typeof window>"u")){ie=this;for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var c=Object.freeze(this.constructor.argsToParams(t));this.params=c,this.isAwaitingPromise=!1,rt(this,wt,this._main(ie.params))}}return g(i,[{key:"_main",value:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(ro(Object.assign({},a,t)),m.currentInstance){var c=Be.swalPromiseResolve.get(m.currentInstance),p=m.currentInstance.isAwaitingPromise;m.currentInstance._destroy(),p||c({isDismissed:!0}),Jt()&&Wn()}m.currentInstance=ie;var b=Vo(t,a);qo(b),Object.freeze(b),m.timeout&&(m.timeout.stop(),delete m.timeout),clearTimeout(m.restoreFocusTimeout);var A=zo(ie);return qn(ie,b),j.innerParams.set(ie,b),$o(ie,A,b)}},{key:"then",value:function(t){return nt(this,wt).then(t)}},{key:"finally",value:function(t){return nt(this,wt).finally(t)}}]),i}(),$o=function(e,t,a){return new Promise(function(c,p){var b=function(P){e.close({isDismissed:!0,dismiss:P})};Be.swalPromiseResolve.set(e,c),Be.swalPromiseReject.set(e,p),t.confirmButton.onclick=function(){Wi(e)},t.denyButton.onclick=function(){Ji(e)},t.cancelButton.onclick=function(){Ki(e,b)},t.closeButton.onclick=function(){b(_e.close)},so(a,t,b),pi(m,a,b),Hi(e,a),jo(a),Wo(m,a,b),Jo(t,a),setTimeout(function(){t.container.scrollTop=0})})},Vo=function(e,t){var a=Po(e),c=Object.assign({},je,t,a,e);return c.showClass=Object.assign({},je.showClass,c.showClass),c.hideClass=Object.assign({},je.hideClass,c.hideClass),c.animation===!1&&(c.showClass={backdrop:"swal2-noanimation"},c.hideClass={}),c},zo=function(e){var t={popup:B(),container:W(),actions:Ve(),confirmButton:re(),denyButton:be(),cancelButton:Oe(),loader:Ie(),closeButton:zt(),validationMessage:lt(),progressSteps:Vt()};return j.domCache.set(e,t),t},Wo=function(e,t,a){var c=ct();V(c),t.timer&&(e.timeout=new Ao(function(){a("timer"),delete e.timeout},t.timer),t.timerProgressBar&&($(c),Z(c,t,"timerProgressBar"),setTimeout(function(){e.timeout&&e.timeout.running&&Gt(t.timer)})))},Jo=function(e,t){if(!t.toast){if(!st(t.allowEnterKey)){Go();return}Ko(e,t)||Qt(-1,1)}},Ko=function(e,t){return t.focusDeny&&X(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&X(e.cancelButton)?(e.cancelButton.focus(),!0):t.focusConfirm&&X(e.confirmButton)?(e.confirmButton.focus(),!0):!1},Go=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var Er=new Date,Ar=localStorage.getItem("swal-initiation");Ar?(Er.getTime()-Date.parse(Ar))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var i=document.createElement("audio");i.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",i.loop=!0,document.body.appendChild(i),setTimeout(function(){i.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(Er))}N.prototype.disableButtons=or,N.prototype.enableButtons=ir,N.prototype.getInput=nr,N.prototype.disableInput=lr,N.prototype.enableInput=sr,N.prototype.hideLoading=pt,N.prototype.disableLoading=pt,N.prototype.showValidationMessage=cr,N.prototype.resetValidationMessage=dr,N.prototype.close=fe,N.prototype.closePopup=fe,N.prototype.closeModal=fe,N.prototype.closeToast=fe,N.prototype.rejectPromise=Gn,N.prototype.update=pr,N.prototype._destroy=hr,Object.assign(N,Eo),Object.keys(oo).forEach(function(i){N[i]=function(){if(ie&&ie[i]){var e;return(e=ie)[i].apply(e,arguments)}return null}}),N.DismissReason=_e,N.version="11.10.5";var gt=N;return gt.default=gt,gt}),typeof pe<"u"&&pe.Sweetalert2&&(pe.swal=pe.sweetAlert=pe.Swal=pe.SweetAlert=pe.Sweetalert2),typeof document<"u"&&function(o,s){var l=o.createElement("style");if(o.getElementsByTagName("head")[0].appendChild(l),l.styleSheet)l.styleSheet.disabled||(l.styleSheet.cssText=s);else try{l.innerHTML=s}catch{l.innerText=s}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(ga);var nc=ga.exports;const he=tc(nc),He=H.create({baseURL:"https://my-project-29fd5-default-rtdb.firebaseio.com"});function rc({category_id:n,category_name:r},o){return`
    <tr>
        <th scope="row">${n}</th>
        <td>${r}</td>
        <td>
          <button id="${o}" class="btn btn-warning update-categories" data-bs-toggle="modal" data-bs-target="#update">Edit</button>
          <button id="${o}" class="btn btn-danger delete-categories">Delete</button>
        </td>
    </tr>
    `}async function ac(){let n=this.id,r=await He.get(`/categories/${n}.json`),{category_id:o,category_name:s}=r.data;document.getElementById("category_id-2").value=o,document.getElementById("categories-2").value=s}function ic(){document.querySelectorAll(".update-categories").forEach(r=>{r.onclick=ac})}function oc(){document.getElementById("update-category").onclick=async function(){let n=document.getElementById("category_id-2").value,o={category_name:document.getElementById("categories-2").value};(await He.patch(`/categories/${n}.json`,o)).status===200&&he.fire({title:"Thành công!",text:"Thêm danh mục thành công!",icon:"success",showConfirmButton:!1,timer:1200,showClass:{popup:`
            animate__animated
            animate__fadeInDown
            animate__faster
          `},hideClass:{popup:`
            animate__animated
            animate__fadeOutUp
            animate__faster
          `}}),await It()}}async function sc(){document.querySelectorAll(".delete-categories").forEach(r=>{r.onclick=async function(){const o=this.id;he.fire({title:"Bạn có chắc chắn?",text:"Bạn sẽ không thể hoàn tác hành động này!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Xóa",cancelButtonText:"Hủy"}).then(async s=>{s.isConfirmed&&(await He.delete(`/categories/${o}.json`),he.fire({title:"Thành công!",text:"Xóa danh mục thành công!",icon:"success",showConfirmButton:!1,timer:1200,showClass:{popup:`
                        animate__animated
                        animate__fadeInDown
                        animate__faster
                    `},hideClass:{popup:`
                        animate__animated
                        animate__fadeOutUp
                        animate__faster
                    `}}),await It())})}})}async function It(){let r=(await He.get("/categories.json")).data,o="";for(const s in r)if(Object.hasOwnProperty.call(r,s)){const l=r[s];o+=rc(l,s)}document.querySelector("tbody").innerHTML=o,lc(),sc(),ic(),oc()}function lc(){document.querySelector("#create-category").addEventListener("click",async function(){let r={category_name:document.getElementById("categories").value},o=await He.post("/categories.json",r);if(o.status===200){const s=o.data.name;await He.patch(`/categories/${s}.json`,{category_id:s}),he.fire({title:"Thành công!",text:"Thêm danh mục thành công!",icon:"success",showConfirmButton:!1,timer:1200,showClass:{popup:`
                animate__animated
                animate__fadeInDown
                animate__faster
              `},hideClass:{popup:`
                animate__animated
                animate__fadeOutUp
                animate__faster
              `}}),document.getElementById("categories").value=""}await It()})}const we=H.create({baseURL:"https://my-project-29fd5-default-rtdb.firebaseio.com"});function va({category_id:n,category_name:r}){return`<option value="${n}">${r}</option>`}function cc({product_id:n,name:r,image:o,price:s,new_price:l,discount:d},u){return`
        <tr>
            <td>${n}</td>
            <td>${r}</td>
            <td><img style="width: 100px;" src="${o}" alt=""></td>
            <td>$${Math.floor(s)}.00</td>
            <td>$${Math.floor(l)}.00</td>
            <td>-${d>0?d:0}%</td>
            <td>
                <button id="${u}" class="btn btn-warning update-product" data-bs-toggle="modal" data-bs-target="#update">Edit</button>
                <button id="${u}" class="btn btn-danger delete-product">Delete</button>
                </td>
        </tr>`}async function _t(){let n=await we.get("./categories.json"),r=await we.get("./products.json"),o=n.data,s=r.data,l="",d="";for(const u in o)if(Object.hasOwnProperty.call(o,u)){const w=o[u];l+=va(w)}for(const u in s)if(Object.hasOwnProperty.call(s,u)){const w=s[u];d+=cc(w,u)}document.getElementById("category_id").innerHTML=l,document.querySelector("tbody").innerHTML=d,dc(),uc(),mc(),pc()}function dc(){document.getElementById("create-product").onclick=async()=>{let n=document.getElementById("product-name").value,r=document.getElementById("url-image").value,o=document.getElementById("price").value,s=document.getElementById("discount").value,l=document.getElementById("description").value,d=document.getElementById("category_id").value,u=o-o*(s/100);const w={name:n,image:r,price:o,discount:s,description:l,category_id:d,new_price:u};let v=await we.post("/products.json",w);if(console.log(v),v.status==200){const y=v.data.name;await we.patch(`/products/${y}.json`,{product_id:y}),he.fire({title:"Thành công!",text:"Thêm danh mục thành công!",icon:"success",showConfirmButton:!1,timer:1200,showClass:{popup:`
                    animate__animated
                    animate__fadeInDown
                    animate__faster
                  `},hideClass:{popup:`
                    animate__animated
                    animate__fadeOutUp
                    animate__faster
                  `}}),document.getElementById("product-name").value="",document.getElementById("url-image").value="",document.getElementById("price").value="",document.getElementById("discount").value="",document.getElementById("description").value=""}await _t()}}function uc(){document.querySelectorAll(".delete-product").forEach(r=>{r.onclick=async function(){const o=this.id;console.log(o),he.fire({title:"Bạn có chắc chắn?",text:"Bạn sẽ không thể hoàn tác hành động này!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Xóa",cancelButtonText:"Hủy"}).then(async s=>{s.isConfirmed&&(await we.delete(`/products/${o}.json`),he.fire({title:"Thành công!",text:"Xóa sản phẩm thành công!",icon:"success",showConfirmButton:!1,timer:1200,showClass:{popup:`
                                animate__animated
                                animate__fadeInDown
                                animate__faster
                            `},hideClass:{popup:`
                                animate__animated
                                animate__fadeOutUp
                                animate__faster
                            `}}),await _t())})}})}async function fc(){let r=(await we.get("./categories.json")).data,o="",s=this.id,l=await we.get(`/products/${s}.json`),{product_id:d,name:u,image:w,price:v,discount:y,description:x}=l.data;document.getElementById("product-name-2").value=u,document.getElementById("url-image-2").value=w,document.getElementById("price-2").value=v,document.getElementById("discount-2").value=y,document.getElementById("description-2").value=x,document.getElementById("product-id").value=d;for(const g in r)if(Object.hasOwnProperty.call(r,g)){const _=r[g];o+=va(_)}document.getElementById("category_id-2").innerHTML=o}function mc(){document.querySelectorAll(".update-product").forEach(r=>{r.onclick=fc})}function pc(){document.getElementById("update-product").onclick=async function(){let n=document.getElementById("product-id").value,r=document.getElementById("product-name-2").value,o=document.getElementById("url-image-2").value,s=document.getElementById("price-2").value,l=document.getElementById("discount-2").value,d=document.getElementById("description-2").value,u=document.getElementById("category_id-2").value,w=s-s*(l/100),v={name:r,image:o,price:s,discount:l,description:d,category_id:u,new_price:w};(await we.patch(`./products/${n}.json`,v)).status===200&&he.fire({title:"Thành công!",text:"Thêm sản phẩm thành công!",icon:"success",showConfirmButton:!1,timer:1200,showClass:{popup:`
                  animate__animated
                  animate__fadeInDown
                  animate__faster
                `},hideClass:{popup:`
                  animate__animated
                  animate__fadeOutUp
                  animate__faster
                `}}),await _t()}}const Pn=H.create({baseURL:"https://my-project-29fd5-default-rtdb.firebaseio.com"});function Sn({product_id:n,name:r,price:o,new_price:s,image:l,discount:d}){return`
    <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="product-item">
            <div class="position-relative bg-light overflow-hidden">
                <img class="img-fluid w-100" src="${l}" alt="">
                <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
            </div>
            <div class="text-center p-4">
                <a href="/productdetail" data-navigo class="d-block h5 mb-2">${r}</a>
                <span class="text-primary me-1">$${Math.floor(s)+".00"}</span>
                <span class="text-body text-decoration-line-through">${d>0?"$"+Math.floor(o)+".00":""}</span>
            </div>
            <div class="d-flex border-top">
                <small class="w-50 text-center border-end py-2">
                    <a href="/productdetail" class="text-body" data-navigo><i class="fa fa-eye text-primary me-2"></i>View detail</a>
                </small>
                <small class="w-50 text-center py-2">
                    <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                </small>
            </div>
        </div>
    </div>
    `}async function hc(){let r=(await Pn.get("/products.json")).data,o="";Object.keys(r).forEach(s=>{if(r[s].category_id=="-NrM-RlKRmLiKXUlJtRE"){const l=r[s];o+=Sn(l)}}),document.getElementById("vegetables").innerHTML=o}async function wc(){let r=(await Pn.get("/products.json")).data,o="";Object.keys(r).forEach(s=>{if(r[s].category_id=="-NrM03_xKfGzjAJ0KXTl"){const l=r[s];o+=Sn(l)}}),document.getElementById("fruits").innerHTML=o}async function gc(){let r=(await Pn.get("/products.json")).data,o="";Object.keys(r).forEach(s=>{if(r[s].category_id=="-NrM0Hv-P4OE6ZipScAj"){const l=r[s];o+=Sn(l)}}),document.getElementById("juice").innerHTML=o}async function vc(){hc(),wc(),gc()}const Bt=H.create({baseURL:"https://my-project-29fd5-default-rtdb.firebaseio.com"});function Lt({name:n,price:r,new_price:o,image:s,discount:l}){return`
    <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="product-item">
            <div class="position-relative bg-light overflow-hidden">
                <img class="img-fluid w-100" src="${s}" alt="">
                <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
            </div>
            <div class="text-center p-4">
                <a class="d-block h5 mb-2" href="/productdetail" data-navigo>${n}</a>
                <span class="text-primary me-1">$${Math.floor(o)+".00"}</span>
                <span class="text-body text-decoration-line-through">${l>0?"$"+Math.floor(r)+".00":""}</span>
            </div>
            <div class="d-flex border-top">
                <small class="w-50 text-center border-end py-2">
                    <a class="text-body" href="/productdetail" data-navigo><i class="fa fa-eye text-primary me-2"></i>View detail</a>
                </small>
                <small class="w-50 text-center py-2">
                    <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                </small>
            </div>
        </div>
    </div>
    `}async function bc(){let r=(await Bt.get("/products.json")).data,o="";Object.keys(r).forEach(s=>{const l=r[s];o+=Lt(l)}),document.getElementById("all").innerHTML=o}async function yc(){let r=(await Bt.get("/products.json")).data,o="";Object.keys(r).forEach(s=>{if(r[s].category_id=="-NrM-RlKRmLiKXUlJtRE"){const l=r[s];o+=Lt(l)}}),document.getElementById("vegetables").innerHTML=o}async function xc(){let r=(await Bt.get("/products.json")).data,o="";Object.keys(r).forEach(s=>{if(r[s].category_id=="-NrM03_xKfGzjAJ0KXTl"){const l=r[s];o+=Lt(l)}}),document.getElementById("fruits").innerHTML=o}async function kc(){let r=(await Bt.get("/products.json")).data,o="";Object.keys(r).forEach(s=>{if(r[s].category_id=="-NrM0Hv-P4OE6ZipScAj"){const l=r[s];o+=Lt(l)}}),document.getElementById("juice").innerHTML=o}async function Cc(){bc(),yc(),xc(),kc()}const ne=document.querySelector("#app");ee.on("/",async()=>{te(Yo(),ne),await vc()});ee.on("/about",()=>te(rs(),ne));ee.on("/products",async()=>{te(ts(),ne),await Cc()});ee.on("/contact",()=>te(Qo(),ne));ee.on("/blog",()=>te(is(),ne));ee.on("/feature",()=>te(qr(),ne));ee.on("/testimonial",()=>te(qr(),ne));ee.on("/productdetail",()=>te(ls(),ne));ee.on("/adminCategories",async()=>{te($r,ne),document.getElementById("article").innerHTML=fs(),await It()});ee.on("/adminProducts",async()=>{te($r,ne),document.getElementById("article").innerHTML=ps(),await _t()});ee.notFound(()=>te(ds(),ne));ee.resolve();
