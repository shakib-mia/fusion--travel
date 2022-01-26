window.addEventListener('scroll', function () {
    let header = document.getElementById('fixed');

    header.classList.toggle('scrolling_action', window.scrollY > 0);
})