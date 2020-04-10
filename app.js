/*jshint esversion: 6 */
new fullpage('#fullpage',{
  autoScrolling:true,
  navigation:true,
});

let mouseCursor=document.querySelector(".cursor");
let navLinks=document.querySelectorAll(".nav-links li");
let button=document.querySelector("btn");
window.addEventListener('mousemove',cursor);
function cursor(e){

mouseCursor.style.top=e.pageY + 'px';
mouseCursor.style.left=e.pageX +'px';
}
navLinks.forEach(link =>{
  link.addEventListener('mouseover',() => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
link.addEventListener('mouseleave',() => {
  mouseCursor.classList.remove("link-grow");
  link.classList.remove("hovered-link");
});
});

navLinks.forEach(link =>{
  link.addEventListener('mouseover',() => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
link.addEventListener('mouseleave',() => {
  mouseCursor.classList.remove("link-grow");
  link.classList.remove("hovered-link");
});
});

















var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
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
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #aaa }";
  document.body.appendChild(css);
};


















// setTimeout(function (){
// alert("Hello, there!");

// var hireMe = prompt("Are you here because you're interested in hiring me?");

// if (hireMe == "yes","Yes","Yeah","Yep") {
// console.log("You've just made my day. Carry on.");
// }

// else{
//     console.log("Well, I hope you're at least thinking about it.");
// }
// // },10000);
