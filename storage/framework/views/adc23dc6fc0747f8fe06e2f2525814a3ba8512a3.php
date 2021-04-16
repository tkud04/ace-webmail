<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $__env->yieldContent('title'); ?> | YSG Global - Transportation and Logistics Worldwide</title>
        <meta name="description" content="YSG Global - Transportation and Logistics Worldwide">
        <meta name="author" content="pixel-industry">
        <meta name="keywords" content="transportation, logistics, logistics, cargo, business">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Stylesheets --
       <link rel="stylesheet" href="<?php echo e(asset('vendor/bootstrap/css/bootstrap.min.css')); ?>"><!-- bootstrap grid -->
       <link rel="stylesheet" href="<?php echo e(asset('css/bootstrap.css')); ?>"><!-- bootstrap grid -->
        <link rel="stylesheet" href="<?php echo e(asset('masterslider/style/masterslider.css')); ?>" /><!-- Master slider css -->
        <link rel="stylesheet" href="<?php echo e(asset('masterslider/skins/default/style.css')); ?>" /><!-- Master slider default skin -->
        <link rel="stylesheet" href="<?php echo e(asset('css/animate.css')); ?>"/><!-- animations -->
        <link rel='stylesheet' href="<?php echo e(asset('owl-carousel/owl.carousel.css')); ?>"/><!-- Client carousel -->
        <link rel="stylesheet" href="<?php echo e(asset('css/style.css')); ?>"/><!-- template styles -->
        <link rel="stylesheet" href="<?php echo e(asset('css/color-default.css')); ?>"/><!-- template main color -->
        <link rel="stylesheet" href="<?php echo e(asset('css/retina.css')); ?>"/><!-- retina ready styles -->
        <link rel="stylesheet" href="<?php echo e(asset('css/responsive.css')); ?>"/><!-- responsive styles -->

        <!-- Google Web fonts -->
        <link href='http://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,800,700,600' rel='stylesheet' type='text/css'>

        <!-- Font icons -->
        <link rel="stylesheet" href="<?php echo e(asset('icon-fonts/font-awesome/css/font-awesome.min.css')); ?>"/><!-- Fontawesome icons css -->
     
   <!-- custom css -->
	  <link rel="stylesheet" href="<?php echo e(asset('css/custom.css')); ?>">

<!-- jquery 
    <script src="<?php echo e(asset('vendor/jquery/jquery-3.3.1.min.js')); ?>"></script> -->
    <script src="<?php echo e(asset('js/jquery-2.1.4.min.js')); ?>"></script>

 <!-- bootstrap bundle js 
    <script src="<?php echo e(asset('vendor/bootstrap/js/bootstrap.bundle.js')); ?>"></script>-->
    <script src="<?php echo e(asset('js/bootstrap.min.js')); ?>"></script>

<!-- custom js -->
	<script src="<?php echo e(asset('js/helpers.js').'?ver='.rand(56,99999)); ?>"></script>
	<script src="<?php echo e(asset('js/mmm.js').'?ver='.rand(56,99999)); ?>"></script>
	
	<!--SweetAlert--> 
    <link href="<?php echo e(asset('lib/sweet-alert/sweetalert2.css')); ?>" rel="stylesheet">
    <script src="<?php echo e(asset('lib/sweet-alert/sweetalert2.js')); ?>"></script>	
		
	<?php echo $__env->yieldContent('styles'); ?>
	<?php echo $__env->yieldContent('scripts'); ?>		
		
    </head>
	

<body>
<?php
if(!isset($blank))
{
?>
<div class="header-wrapper header-transparent">
            <!-- .header.header-style01 start -->
            <header id="header"  class="header-style01">
                <div id="top-bar-wrapper" class="clearfix">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-xs-9">
                                <ul id="quick-links" class="clearfix">
                                    <li>
                                        <i class="fa fa-phone"></i>
                                        <span><?php echo e($pe['phone']); ?></span>
                                    </li>

                                    <li>
                                        <i class="fa fa-envelope"></i>
                                        <a href="javascript:void(0)">Contact us today</a>
                                    </li>
                                </ul><!-- .quick links end -->
                            </div><!-- .col-md-6 end -->

                            <div class="col-md-6 col-xs-3">
                                <div class="wpml-languages enabled">
                                    <a class="active" href="javascript:void(0)">
                                        <img src="img/en.png" alt="English"/>

                                        <i class="fa fa-chevron-down"></i>
                                    </a>

                                    <ul class="wpml-lang-dropdown">
                                        
                                    </ul><!-- .wpml-lang-dropdown end -->
                                </div><!-- .wpml-languages.enabled end -->
                            </div><!-- .col-md-6 end -->
                        </div><!-- .row end -->
                    </div><!-- .container end -->
                </div><!-- .top-bar-wrapper end -->

                <div class="header-inner">
                    <!-- .container start -->
                    <div class="container">
                        <!-- .main-nav start -->
                        <div class="main-nav">
                            <!-- .row start -->
                            <div class="row">
                                <div class="col-md-12">
                                    <nav class="navbar navbar-default nav-left" role="navigation">

                                        <!-- .navbar-header start -->
                                        <div class="navbar-header">
                                            <div class="logo">
                                                <a href="<?php echo e(url('/')); ?>">
                                                    <h3>YSG Global</h3>
                                                </a>
                                            </div><!-- .logo end -->
                                        </div><!-- .navbar-header start -->

                                        <!-- MAIN NAVIGATION -->
                                        <div class="collapse navbar-collapse">
                                            <ul class="nav navbar-nav">
                                                <li class="dropdown">
                                                    <a href="<?php echo e(url('/')); ?>">Home</a>
                                                </li><!-- .dropdown end -->
												<li class="dropdown">
                                                    <a href="<?php echo e(url('track')); ?>">Track</a>
                                                </li><!-- .dropdown end -->
												<li class="dropdown">
                                                    <a href="<?php echo e(url('about')); ?>">About Us</a>
                                                </li><!-- .dropdown end -->
												<li class="dropdown">
                                                    <a href="<?php echo e(url('services')); ?>">Services</a>
                                                </li><!-- .dropdown end -->
                                                <li class="dropdown">
                                                    <a href="javascript:void(0)">Contact Us</a>
                                                </li><!-- .dropdown end -->

                                               
                                            </ul><!-- .nav.navbar-nav end -->

                                            <!-- RESPONSIVE MENU -->
                                            <div id="dl-menu" class="dl-menuwrapper">
                                                <button class="dl-trigger">Open Menu</button>

                                                <ul class="dl-menu">
                                                    <li>
                                                        <a href="<?php echo e(url('/')); ?>">Home</a>
                                                    </li>
													<li>
                                                        <a href="<?php echo e(url('track')); ?>">Track</a>
                                                    </li>
													<li>
                                                        <a href="<?php echo e(url('about')); ?>">About Us</a>
                                                    </li>
													<li>
                                                        <a href="<?php echo e(url('services')); ?>">Services</a>
                                                    </li>
													<li>
                                                        <a href="javascript:void(0)">Contact Us</a>
                                                    </li>

                                                    
                                                </ul><!-- .dl-menu end -->
                                            </div><!-- #dl-menu end -->

                                            <!-- #search start -->
                                            <div id="search">
                                                <form action="#" method="get">
                                                    <input class="search-submit" type="submit" />
                                                    <input id="m_search" name="s" type="text" placeholder="Type and hit enter..." />                        
                                                </form>
                                            </div><!-- #search end -->
                                        </div><!-- MAIN NAVIGATION END -->
                                    </nav><!-- .navbar.navbar-default end -->
                                </div><!-- .col-md-12 end -->
                            </div><!-- .row end -->
                        </div><!-- .main-nav end -->
                    </div><!-- .container end -->
                </div><!-- .header-inner end -->
            </header><!-- .header.header-style01 -->
        </div><!-- .header-wrapper end -->
		
                <?php echo $__env->yieldContent('page-header'); ?>
<?php
}
?>	 

  <!--------- Session notifications-------------->
        	<?php
               $pop = ""; $val = "";
               
               if(isset($signals))
               {
                  foreach($signals['okays'] as $key => $value)
                  {
                    if(session()->has($key))
                    {
                  	$pop = $key; $val = session()->get($key);
                    }
                 }
              }
              
             ?> 

                 <?php if($pop != "" && $val != ""): ?>
                   <?php echo $__env->make('session-status',['pop' => $pop, 'val' => $val], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                 <?php endif; ?>
        	<!--------- Input errors -------------->
                    <?php if(count($errors) > 0): ?>
                          <?php echo $__env->make('input-errors', ['errors'=>$errors], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                     <?php endif; ?> 
				<?php echo $__env->yieldContent('content'); ?>
<?php
if(!isset($blank))
{
?>
          <div id="footer-wrapper" class="footer-dark">
            <footer id="footer">
                <div class="container">
                    <div class="row">
                        <ul class="col-md-3 col-sm-6 footer-widget-container clearfix">
                            <!-- .widget.widget_text -->
                            <li class="widget widget_newsletterwidget">
                                <div class="title">
                                    <h3>newsletter subscribe</h3>
                                </div>

                                <p>
                                    Subscribe to our newsletter and we will 
                                    inform you about newest projects and promotions.
                                </p>

                                <br />

                                <form class="newsletter">
                                    <input class="email" type="email" placeholder="Your email...">
                                    <input type="submit" class="submit" value="">
                                </form>
                            </li><!-- .widget.widget_newsletterwidget end -->
                        </ul><!-- .col-md-3.footer-widget-container end -->

                        <ul class="col-md-3 col-sm-6 footer-widget-container">
                            <!-- .widget-pages start -->
                            <li class="widget widget_pages">
                                <div class="title">
                                    <h3>quick links</h3>
                                </div>

                                <ul>
                                    <li><a href="<?php echo e(url('about')); ?>">About us</a></li>
                                    <li><a href="javascript:void(0)">Company history</a></li>
                                    <li><a href="javascript:void(0)">Company Events</a></li>
                                    <li><a href="javascript:void(0)">Supply chain management</a></li>
                                    <li><a href="javascript:void(0)">Warehousing</a></li>
                                    <li><a href="javascript:void(0)">Company news</a></li>
                                    <li><a href="javascript:void(0)">Online driver application</a></li>
                                </ul>
                            </li><!-- .widget-pages end -->
                        </ul><!-- .col-md-3.footer-widget-container end -->

                        <ul class="col-md-3 col-sm-6 footer-widget-container">
                            <!-- .widget-pages start -->
                            <li class="widget widget_pages">
                                <div class="title">
                                    <h3>Industry solutions</h3>
                                </div>

                                <ul>
                                    <li><a href="javascript:void(0)">Overland transportation</a></li>
                                    <li><a href="javascript:void(0)">Air freight</a></li>
                                    <li><a href="javascript:void(0)">Ocean freight</a></li>
                                    <li><a href="javascript:void(0)">Large projects</a></li>
                                    <li><a href="javascript:void(0)">Rail international shipping</a></li>
                                    <li><a href="javascript:void(0)">Contract logistics</a></li>
                                    <li><a href="javascript:void(0)">Packaging options</a></li>
                                </ul>
                            </li><!-- .widget-pages end -->
                        </ul><!-- .col-md-3.footer-widget-container end -->

                        <ul class="col-md-3 col-sm-6 footer-widget-container">
                            <li class="widget widget-text">
                                <div class="title">
                                    <h3>contact us</h3>
                                </div>

                                <address>
                                    52  Middlewich Road, <br />
                                    Fintry, UK
									G63 7TG
                                </address>

                                <span class="text-big">
                                   <?php echo e($pe['phone']); ?>

                                </span>
                                <br />

                                <a href="javascript:void(0)"><?php echo e($pe['email']); ?></a>
                                <br />
                                <ul class="footer-social-icons">
                                    <li><a href="#" class="fa fa-facebook"></a></li>
                                    <li><a href="#" class="fa fa-twitter"></a></li>
                                    <li><a href="#" class="fa fa-google-plus"></a></li>
                                </ul><!-- .footer-social-icons end -->
                            </li><!-- .widget.widget-text end -->
                        </ul><!-- .col-md-3.footer-widget-container end -->
                    </div><!-- .row end -->
                </div><!-- .container end -->
            </footer><!-- #footer end -->

            <div class="copyright-container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <p>&copy; <?php echo e(date("Y")); ?>. All RIGHTS RESERVED.</p>
                        </div><!-- .col-md-12 end -->

                       
                    </div><!-- .row end -->
                </div><!-- .container end -->
            </div><!-- .copyright-container end -->

            <a href="#" class="scroll-up">Scroll</a>
        </div><!-- #footer-wrapper end -->
<?php
}
?>    

        <script src="<?php echo e(asset('js/jquery.srcipts.min.js')); ?>"></script><!-- modernizr, retina, stellar for parallax -->  
        <script src="<?php echo e(asset('owl-carousel/owl.carousel.min.js')); ?>"></script><!-- Carousels script -->
        <script src="<?php echo e(asset('masterslider/masterslider.min.js')); ?>"></script><!-- Master slider main js -->
        <script src="<?php echo e(asset('js/jquery.matchHeight-min.js')); ?>"></script><!-- for columns with background image -->
        <script src="<?php echo e(asset('js/jquery.dlmenu.min.js')); ?>"></script><!-- for responsive menu -->
        <script src="<?php echo e(asset('js/include.js')); ?>"></script><!-- custom js functions -->

        <script>
            /* <![CDATA[ */
            jQuery(document).ready(function ($) {
                'use strict';
                function equalHeight() {
                    $('.page-content.column-img-bkg *[class*="custom-col-padding"]').each(function () {
                        var maxHeight = $(this).outerHeight();
                        $('.page-content.column-img-bkg *[class*="img-bkg"]').height(maxHeight);
                    });
                };
                
                $(document).ready(equalHeight);
                $(window).resize(equalHeight);

                // MASTER SLIDER START 
                var slider = new MasterSlider();
                slider.setup('masterslider', {
                    width: 1140, // slider standard width
                    height: 854, // slider standard height
                    space: 0,
                    speed: 50,
                    layout: "fullwidth",
                    centerControls: false,
                    loop: true,
                    autoplay: true
                            // more slider options goes here...
                            // check slider options section in documentation for more options.
                });
                // adds Arrows navigation control to the slider.
                slider.control('arrows');

                // CLIENTS CAROUSEL START 
                $('#client-carousel').owlCarousel({
                    items: 6,
                    loop: true,
                    margin: 30,
                    responsiveClass: true,
                    mouseDrag: true,
                    dots: false,
                    responsive: {
                        0: {
                            items: 2,
                            nav: true,
                            loop: true,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            responsiveClass: true
                        },
                        600: {
                            items: 3,
                            nav: true,
                            loop: true,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            responsiveClass: true
                        },
                        1000: {
                            items: 6,
                            nav: true,
                            loop: true,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            responsiveClass: true,
                            mouseDrag: true
                        }
                    }
                });

                // TESTIMONIAL CAROUSELS START
                $('#testimonial-carousel').owlCarousel({
                    items: 1,
                    loop: true,
                    margin: 30,
                    responsiveClass: true,
                    mouseDrag: true,
                    dots: false,
                    autoheight: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true,
                            loop: true,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            responsiveClass: true,
                            autoHeight: true
                        },
                        600: {
                            items: 1,
                            nav: true,
                            loop: true,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            responsiveClass: true,
                            autoHeight: true
                        },
                        1000: {
                            items: 1,
                            nav: true,
                            loop: true,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            responsiveClass: true,
                            mouseDrag: true,
                            autoHeight: true
                        }
                    }
                });
            });
            /* ]]> */
        </script>
    </body>
</html>

<?php /**PATH C:\bkupp\lokl\repo\chstore-movers\resources\views/layout.blade.php ENDPATH**/ ?>