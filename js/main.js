(new WOW).init(),$(document).ready(function(){$("#quote-carousel").carousel({pauseOnHover:!0,interval:3e3})}),jQuery(".statistic-counter").counterUp({delay:10,time:2e3}),$(document).on("click",'[data-toggle="lightbox"]',function(o){o.preventDefault(),$(this).ekkoLightbox()}),$("ul.nav li.dropdown").hover(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(300).fadeIn(500)},function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(300).fadeOut(500)}),$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>50?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()}),$("#back-to-top").click(function(){return $("#back-to-top").tooltip("hide"),$("body,html").animate({scrollTop:0},800),!1}),$("#back-to-top").tooltip("show")});