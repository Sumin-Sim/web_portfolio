import $ from "jquery";
$(function() {
    let windowW = $(window).width();
    if(windowW >= 1440) {
        secMove();

        visualSlider();
        skillBar();
        workBtn();
        workGallery();
        workModal();

        topBtn();
        workFilter();
    } else if (windowW < 1440 && windowW >= 1024) {
        secMove();

        visualSlider();
        skillBar();
        workBtn();
        workGallery();
        workModal();

        topBtn();
        workFilter();
    } else if (windowW < 1024 && windowW >= 768) {
        secMove();
        navMenu();

        visualSlider();
        skillBar();
        workBtn();
        workGallery();
        workModal();

        topBtn();
        workFilter();
    } else if (windowW < 768) {
        secMove();
        navMenu();

        visualSlider();
        skillCircle();
        workBtn();
        workGallery();
        workModal();

        topBtn();
        workFilter();
    }
})

// reload while screen resizing
$(window).on('resize',function() {
    window.location.reload();
})

// section move
function secMove() {}

// nav menu aside
function navMenu() {}

// visual slider
function visualSlider() {}

// skill percent
function skillBar() {}
function skillCircle() {}

// work toggle btn
function workBtn() {}

// work filter
function workFilter() {}

// work gallery
function workGallery() {}

// work modal
function workModal() {
    document.querySelector('article#work div#modal').style.display = 'none';
}

// aside top
function topBtn() {}