import $ from "jquery";

// section move 시 광클릭 해결
// visual slider
// modal 완성


$(function() {
    let windowW = $(window).width();
    if(windowW >= 1440) {
        secMove();

        visualSlider();
        skillBar();
        workBtn();
        workModal();

        topBtn();
        workFilter();
    } else if (windowW < 1440 && windowW >= 1024) {
        secMove();

        visualSlider();
        skillBar();
        workBtn();
        workGallery2();
        workModal();

        topBtn();
        workFilter();
    } else if (windowW < 1024 && windowW >= 768) {
        navMenu();

        visualSlider();
        skillBar();
        workBtn();
        workGallery1();
        workModal();

        topBtn();
        workFilter();
    } else if (windowW < 768) {
        navMenu();

        visualSlider();
        skillCircle();
        workBtn();
        workGallery1();
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
function secMove() {
    $('header nav>ul>li>a').on('click',function() {
        const secSelected = $(this).attr('href');
        const secPosT = $(secSelected).offset().top;
        const headerH = $('header').innerHeight();
        $('html, body').animate({scrollTop: secPosT - headerH},1000);

        return false;
    });
}

// nav menu aside
function navMenu() {
    // section move
    $('header nav>ul>li>a').on('click',function() {
        const secSelected = $(this).attr('href');
        const secPosT = $(secSelected).offset().top;
        const headerH = $('header').innerHeight();
        $('html, body').animate({scrollTop: secPosT - headerH},1000);
        navMenu.animate({left: '-' + navMenuW + 'px'},800);
        navMenuBtn.css('display','block');

        return false;
    });

    // nav menu toggle
    const navMenu = $('header nav');
    const navMenuW = navMenu.innerWidth();
    const navMenuBtn = $('header p.menu');
    const navCloseBtn = $('header nav p.close');

    navMenuBtn.on('click',function() {
        navMenu.animate({left: '0'},800);
        navMenuBtn.css('display','none');
    });
    navCloseBtn.on('click',function() {
        navMenu.animate({left: '-' + navMenuW + 'px'},800);
        navMenuBtn.css('display','block');
    })
}

// visual slider
function visualSlider() {}

// skill percent
function skillBar() {
    const skillSection = $('header nav>ul>li>a[href = "#skill"]');
    const skillPs = $('article#skill ul>li:nth-child(1)>div>span:nth-of-type(1)');
    const skillAi = $('article#skill ul>li:nth-child(2)>div>span:nth-of-type(1)');
    const skillXd = $('article#skill ul>li:nth-child(3)>div>span:nth-of-type(1)');
    const skillHtml = $('article#skill ul>li:nth-child(4)>div>span:nth-of-type(1)');
    const skillCss = $('article#skill ul>li:nth-child(5)>div>span:nth-of-type(1)');
    const skillJs = $('article#skill ul>li:nth-child(6)>div>span:nth-of-type(1)');
    const skillReact = $('article#skill ul>li:nth-child(7)>div>span:nth-of-type(1)');

    // default
    skillPs.css('width',$(skillPs).next('span').text());
    skillAi.css('width',$(skillAi).next('span').text());
    skillXd.css('width',$(skillXd).next('span').text());
    skillHtml.css('width',$(skillHtml).next('span').text());
    skillCss.css('width',$(skillCss).next('span').text());
    skillJs.css('width',$(skillJs).next('span').text());
    skillReact.css('width',$(skillReact).next('span').text());
    
    skillSection.on('click',function() {
        skillPs.animate({width:'0'},0,function() {
            $(this).animate({width:$(this).next('span').text()},2000);
        });
        skillAi.animate({width:'0'},0,function() {
            $(this).animate({width:$(this).next('span').text()},2000);
        });
        skillXd.animate({width:'0'},0,function() {
            $(this).animate({width:$(this).next('span').text()},2000);
        });
        skillHtml.animate({width:'0'},0,function() {
            $(this).animate({width:$(this).next('span').text()},2000);
        });
        skillCss.animate({width:'0'},0,function() {
            $(this).animate({width:$(this).next('span').text()},2000);
        });
        skillJs.animate({width:'0'},0,function() {
            $(this).animate({width:$(this).next('span').text()},2000);
        });
        skillReact.animate({width:'0'},0,function() {
            $(this).animate({width:$(this).next('span').text()},2000);
        });
    });
}
function skillCircle() {
    const skillSection = $('header nav>ul>li>a[href = "#skill"]');
    const skillPs = $('article#skill ul>li:nth-child(1)>div>span:nth-of-type(1)');
    const skillAi = $('article#skill ul>li:nth-child(2)>div>span:nth-of-type(1)');
    const skillXd = $('article#skill ul>li:nth-child(3)>div>span:nth-of-type(1)');
    const skillHtml = $('article#skill ul>li:nth-child(4)>div>span:nth-of-type(1)');
    const skillCss = $('article#skill ul>li:nth-child(5)>div>span:nth-of-type(1)');
    const skillJs = $('article#skill ul>li:nth-child(6)>div>span:nth-of-type(1)');
    const skillReact = $('article#skill ul>li:nth-child(7)>div>span:nth-of-type(1)');

    // default
    skillPs.css('height',$(skillPs).next('span').text());
    skillAi.css('height',$(skillAi).next('span').text());
    skillXd.css('height',$(skillXd).next('span').text());
    skillHtml.css('height',$(skillHtml).next('span').text());
    skillCss.css('height',$(skillCss).next('span').text());
    skillJs.css('height',$(skillJs).next('span').text());
    skillReact.css('height',$(skillReact).next('span').text());
    
    skillSection.on('click',function() {
        skillPs.animate({height:'0'},0,function() {
            $(this).animate({height:$(this).next('span').text()},2000);
        });
        skillAi.animate({height:'0'},0,function() {
            $(this).animate({height:$(this).next('span').text()},2000);
        });
        skillXd.animate({height:'0'},0,function() {
            $(this).animate({height:$(this).next('span').text()},2000);
        });
        skillHtml.animate({height:'0'},0,function() {
            $(this).animate({height:$(this).next('span').text()},2000);
        });
        skillCss.animate({height:'0'},0,function() {
            $(this).animate({height:$(this).next('span').text()},2000);
        });
        skillJs.animate({height:'0'},0,function() {
            $(this).animate({height:$(this).next('span').text()},2000);
        });
        skillReact.animate({height:'0'},0,function() {
            $(this).animate({height:$(this).next('span').text()},2000);
        });
    });
}

// work toggle btn
function workBtn() {
    const workBtn = document.querySelectorAll('article#work>div>div>ul>li');
    $('article#work>div>div>ul>li:first-child').addClass('selected');

    workBtn.forEach(function(item) {
        item.addEventListener('click', function() {
            $(workBtn).removeClass('selected');
            $(this).addClass('selected');
        })
    });
}

// work filter
function workFilter() {}

// work gallery
function workGallery1() {
}
function workGallery2() {
    let figureW = $('article#work div#all>figure').outerWidth(true);
    const workPrev = $('article#work div#gallery p.prev');
    const workNext = $('article#work div#gallery p.next');
    
    $('article#work div#all').css('margin-left','-' + figureW + 'px');
    $('article#work div#all figure:nth-child(4)').prependTo('article#work div#all');
    $('article#work div#all figure:nth-child(8)').insertAfter('article#work div#all>figure:nth-child(4)');

    // button slide
    $(workPrev).on('click',function() {
        $('article#work div#all').animate({marginLeft:'-=' + figureW + 'px'},function() {
            $('article#work div#all figure:nth-child(1)').insertAfter('article#work div#all figure:nth-child(4)');
            $('article#work div#all figure:nth-child(5)').appendTo('article#work div#all');
            $('article#work div#all').css('margin-left','-' + figureW + 'px');
        });
    });
}

// work modal
function workModal() {
    const modal = $('article#work div#modal');
    modal.css('display','none');

    // close button
    const modalCloseBtn = $('article#work div#modal p.close');
    modalCloseBtn.on('click',function() {
        modal.css('display','none');
    })
}

// aside top
function topBtn() {
    $('aside#top>p').on('click',function() {
        $('html,body').animate({scrollTop: 0},1000);
    });
}