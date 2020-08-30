let mouseCursor = document.querySelector(".pcursor");
let navLinks = document.querySelectorAll(".navigation");
let whiteArea = document.querySelectorAll(".white");
let rectangleArea = document.querySelectorAll(".rectangle");
let capArea = document.querySelectorAll(".cap");
let headArea = document.querySelectorAll(".our");

window.addEventListener('mousemove',cursor);
function cursor(e){
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link=>{
  link.addEventListener('mouseleave',() => {
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
  link.addEventListener('mouseover',() => {
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });
});

headArea.forEach(link=>{
  link.addEventListener('mouseleave',() => {
    mouseCursor.classList.remove('head-grow');
  });
  link.addEventListener('mouseover',() => {
    mouseCursor.classList.add('head-grow');
  });
});

whiteArea.forEach(link=>{
  link.addEventListener('mouseleave',() => {
    mouseCursor.classList.remove('white-area');
  });
  link.addEventListener('mouseover',() => {
    mouseCursor.classList.add('white-area');
  });
});

rectangleArea.forEach(link=>{
  link.addEventListener('mouseleave',() => {
    mouseCursor.classList.remove('white-area');
  });
  link.addEventListener('mouseover',() => {
    mouseCursor.classList.add('white-area');
  });
});

capArea.forEach(link=>{
  link.addEventListener('mouseleave',() => {
    mouseCursor.classList.remove('white-area');
  });
  link.addEventListener('mouseover',() => {
    mouseCursor.classList.add('white-area');
  });
});
