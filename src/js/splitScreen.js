$(function() {

    var left = document.querySelector('.div__leftSplit');
    var right = document.querySelector('.div__rightSplit');
    var container = document.querySelector('.container-fluid');

    left.addEventListener('mouseenter', function() {
        container.classList.add('hover-left');
    });

    left.addEventListener('mouseleave', function() {
        container.classList.remove('hover-left');
    });

    right.addEventListener('mouseenter', function() {
        container.classList.add('hover-right');
    });

    right.addEventListener('mouseleave', function() {
        container.classList.remove('hover-right');
    });
});