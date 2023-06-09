//TOGGLE CLASS ACTIVE
 const navbarNav = document.querySelector('.navbar-nav');
 
 //ketika menu diklik
 document.querySelector('#hamburger-menu').onclick = () => {
   navbarNav.classList.toggle('active');
 };

 //klik diluar side bar untuk menghilangkan side bar
 const hamburger = document.querySelector('#hamburger-menu');
 document.addEventListener('click', function(e) {
   if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
   }
 });