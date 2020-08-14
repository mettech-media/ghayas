$(window).on('scroll', function () {
  var scrollPos = $(window).scrollTop()
  var winHeight = $(window).height()
  var docHeight = $(document).height()
  var perc = 100 * scrollPos / (docHeight - winHeight)
  $('#indicator').width(perc + '%')
})




var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid black }";
  document.body.appendChild(css);
};


$(document).ready(function () {
   $(".banner-one").hover(
     function () {
       $(".p-one").addClass("one");
     },
     function () {
       $(".p-one").removeClass("one");
     }
   );
 });
 $(document).ready(function () {
    $(".banner-two").hover(
      function () {
        $(".p-two").addClass("one");
      },
      function () {
        $(".p-two").removeClass("one");
      }
    );
  });
  $(document).ready(function () {
     $(".banner-three").hover(
       function () {
         $(".p-three").addClass("one");
       },
       function () {
         $(".p-three").removeClass("one");
       }
     );
   });
$(window).scroll(function() {
             var scroll = $(window).scrollTop();
             if (scroll > 100) {
               $(".our").addClass("rev-block");
             }
             else{
                $(".our").removeClass("rev-block");
             }
           })
$(window).scroll(function() {
             var scroll = $(window).scrollTop();
             if (scroll > 180) {
               $(".ourservices").addClass("rev-block");
             }
             else{
                $(".ourservices").removeClass("rev-block");
             }
           })
$(window).scroll(function() {
             var scroll = $(window).scrollTop();
             if (scroll > 70) {
               $(".aboutus").addClass("rev-block");
             }
             else{
                $(".aboutus").removeClass("rev-block");
             }
           })
$(window).scroll(function() {
             var scroll = $(window).scrollTop();
             if (scroll > 240) {
               $(".ourteam").addClass("rev-block");
             }
             else{
                $(".ourteam").removeClass("rev-block");
             }
           })