let navbar = document.getElementById('navbar');
let lastScrollTop = 200;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Cuộn xuống
        navbar.style.opacity = "0"; // Giả sử chiều cao navbar là 50px
    } else {
        // Cuộn lên
        navbar.style.opacity = "1";
    }
   // lastScrollTop = scrollTop;
});
