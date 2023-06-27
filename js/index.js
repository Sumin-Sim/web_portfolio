import $ from "jquery";

// to-do
// section move 시 광클릭 해결
// visual slider
// work filter 보류 - 포트폴리오 미정리


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
        workGallery();
        workModal();

        topBtn();
        workFilter();
    } else if (windowW < 1024 && windowW >= 768) {
        navMenu();

        visualSlider();
        skillBar();
        workBtn();
        workGallery();
        workModal();

        topBtn();
        workFilter();
    } else if (windowW < 768) {
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
function secMove() {
    // nav click
    $('header nav>ul>li>a').on('click',function() {
        $('header nav>ul>li>a').removeClass('selected');
        $(this).addClass('selected');
        const secSelected = $(this).attr('href');
        const secPosT = $(secSelected).offset().top;
        const headerH = $('header').innerHeight();
        $('html, body').animate({scrollTop: secPosT - headerH},1000);

        return false;
    });

    // nav color change
    $('header nav>ul>li:nth-child(1)>a').addClass('selected');

    const headerH = $('header').innerHeight();
    const homeH = $('#visual').innerHeight();
    const aboutH = $('#about').innerHeight();
    const skillH = $('#skill').innerHeight();
    const workH = $('#work').innerHeight();

    const aboutPosT = $('#about').offset().top;
    const skillPosT = $('#skill').offset().top;
    const workPosT = $('#work').offset().top;
    const contactPosT = $('#contact').offset().top;

    let scrollTimer;

    document.addEventListener('scroll',function() {
        if(scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(function() {
            const scrollPosT = $(document).scrollTop();
            
            if (scrollPosT < (aboutPosT - (homeH / 3))) {
                $('header nav>ul>li>a').removeClass('selected');
                $('header nav>ul>li:nth-child(1)>a').addClass('selected');
            } else if(scrollPosT < (skillPosT - (aboutH / 3))) {
                $('header nav>ul>li>a').removeClass('selected');
                $('header nav>ul>li:nth-child(2)>a').addClass('selected');
            } else if(scrollPosT < (workPosT - (skillH / 3))) {
                $('header nav>ul>li>a').removeClass('selected');
                $('header nav>ul>li:nth-child(3)>a').addClass('selected');
            } else if(scrollPosT < (contactPosT - (workH / 3))) {
                $('header nav>ul>li>a').removeClass('selected');
                $('header nav>ul>li:nth-child(4)>a').addClass('selected');
            } else if(scrollPosT > (contactPosT - (workH / 3))) {
                $('header nav>ul>li>a').removeClass('selected');
                $('header nav>ul>li:nth-child(5)>a').addClass('selected');
            } 
        },100);
    })
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
function visualSlider() {
    setInterval(slide,4000)
    function slide() {
        $('#visual ul>li:last').fadeOut(1000, function() {
            $(this).prependTo('#visual ul');
            $('#visual ul>li:first').show();
        });
    }
}

// skill percent
function skillBar() {
    const skillPosT = $('#skill').offset().top;
    const aboutH = $('#about').innerHeight();

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
    
    let scrollTimer;

    document.addEventListener('scroll',function() {
        if(!scrollTimer) {
            scrollTimer = setTimeout(function() {
                scrollTimer = null;
                const scrollPosT = $(document).scrollTop();

                if(scrollPosT > skillPosT - (aboutH / 2)) {

                    skillPs.css('width',0);
                    skillAi.css('width',0);
                    skillXd.css('width',0);
                    skillHtml.css('width',0);
                    skillCss.css('width',0);
                    skillJs.css('width',0);
                    skillReact.css('width',0);

                    skillPs.animate({width:$(skillPs).next('span').text()},2000);
                    skillAi.delay(200).animate({width:$(skillAi).next('span').text()},2000);
                    skillXd.delay(400).animate({width:$(skillXd).next('span').text()},2000);
                    skillHtml.delay(600).animate({width:$(skillHtml).next('span').text()},2000);
                    skillCss.delay(800).animate({width:$(skillCss).next('span').text()},2000);
                    skillJs.delay(1000).animate({width:$(skillJs).next('span').text()},2000);
                    skillReact.delay(1200).animate({width:$(skillReact).next('span').text()},2000);
                }
            }, 2500);
        }
    });
}

function skillCircle() {
    const skillPosT = $('#skill').offset().top;
    const aboutH = $('#about').innerHeight();
    
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
    
    let scrollTimer;

    document.addEventListener('scroll',function() {
        if(!scrollTimer) {
            scrollTimer = setTimeout(function() {
                scrollTimer = null;
                const scrollPosT = $(document).scrollTop();

                if(scrollPosT > (skillPosT - aboutH / 4) && scrollPosT < (skillPosT + aboutH / 8)) {

                    skillPs.css('height',0);
                    skillAi.css('height',0);
                    skillXd.css('height',0);
                    skillHtml.css('height',0);
                    skillCss.css('height',0);
                    skillJs.css('height',0);
                    skillReact.css('height',0);

                    skillPs.animate({height:$(skillPs).next('span').text()},2000);
                    skillAi.delay(200).animate({height:$(skillAi).next('span').text()},2000);
                    skillXd.delay(400).animate({height:$(skillXd).next('span').text()},2000);
                    skillHtml.delay(600).animate({height:$(skillHtml).next('span').text()},2000);
                    skillCss.delay(800).animate({height:$(skillCss).next('span').text()},2000);
                    skillJs.delay(1000).animate({height:$(skillJs).next('span').text()},2000);
                    skillReact.delay(1200).animate({height:$(skillReact).next('span').text()},2000);
                }
            }, 3000);
        }
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
function workGallery() {
    let figureW = $('article#work div#all>figure').outerWidth(true);
    const workPrev = $('article#work div#gallery p.prev');
    const workNext = $('article#work div#gallery p.next');
    const workBtn = $('article#work div#gallery p.prev, article#work div#gallery p.next')
    
    $('article#work div#all').css('margin-left','-' + figureW + 'px');
    $('article#work div#all figure:nth-child(4)').prependTo('article#work div#all');
    $('article#work div#all figure:nth-child(8)').insertAfter('article#work div#all>figure:nth-child(4)');

    // button slide
    $(workPrev).on('click',function() {
        $(workBtn).hide();
        $('article#work div#all').animate({marginLeft:'+=' + figureW + 'px'},function() {
            $('article#work div#all figure:nth-child(4)').prependTo('article#work div#all');
            $('article#work div#all figure:nth-child(8)').insertBefore('article#work div#all figure:nth-child(5)');
            $('article#work div#all').css('margin-left','-' + figureW + 'px');
            $(workBtn).show();
        });
    });
    $(workNext).on('click',function() {
        $(workBtn).hide();
        $('article#work div#all').animate({marginLeft:'-=' + figureW + 'px'},function() {
            $('article#work div#all figure:nth-child(1)').insertAfter('article#work div#all figure:nth-child(4)');
            $('article#work div#all figure:nth-child(5)').appendTo('article#work div#all');
            $('article#work div#all').css('margin-left','-' + figureW + 'px');
            $(workBtn).show();
        });
    });
}

// work modal
function workModal() {
    const modal = $('article#work div#modal');
    modal.css('display','none');

    function Modal(title,imgSrc,time,program,introduction,url) {
        this.title = title,
        this.imgSrc = imgSrc,
        this.time = time,
        this.program = program,
        this.introduction = introduction,
        this.url = url;
    }

    Modal.prototype.action = function() {
        document.querySelector('#modal h4').innerHTML = this.title;
        document.querySelector('#modal figure>img').setAttribute('src', this.imgSrc);
        document.querySelector('#modal ul>li:nth-child(1)').innerHTML = this.time;
        document.querySelector('#modal ul>li:nth-child(2)').innerHTML = this.program;
        document.querySelector('#modal ul>li:nth-child(3)').innerHTML = this.introduction;
        document.querySelector('#modal ul>li:nth-child(4)>a').setAttribute('href', this.url);
    }

    let modalContent = [
        new Modal('포트폴리오 01','./img/work_ex.png','23.06.27~23.06.27','HTML5, CSS, JQuery, JavaScript','포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요.','http://www.naver.com'),
        new Modal('포트폴리오 02','./img/work_ex.png','23.06.27~23.06.27','HTML5, CSS, JQuery, JavaScript','포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요.','http://www.naver.com'),
        new Modal('포트폴리오 03','./img/work_ex.png','23.06.27~23.06.27','HTML5, CSS, JQuery, JavaScript','포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요.','http://www.naver.com'),
        new Modal('포트폴리오 04','./img/work_ex.png','23.06.27~23.06.27','HTML5, CSS, JQuery, JavaScript','포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요.','http://www.naver.com'),
        new Modal('포트폴리오 05','./img/work_ex.png','23.06.27~23.06.27','HTML5, CSS, JQuery, JavaScript','포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요.','http://www.naver.com'),
        new Modal('포트폴리오 06','./img/work_ex.png','23.06.27~23.06.27','HTML5, CSS, JQuery, JavaScript','포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요.','http://www.naver.com'),
        new Modal('포트폴리오 07','./img/work_ex.png','23.06.27~23.06.27','HTML5, CSS, JQuery, JavaScript','포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요.','http://www.naver.com'),
        new Modal('포트폴리오 08','./img/work_ex.png','23.06.27~23.06.27','HTML5, CSS, JQuery, JavaScript','포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요. 포트폴리오 설명을 적으세요.','http://www.naver.com')
    ]

    const portfolio = document.querySelectorAll('#gallery figure');
    portfolio.forEach(function(item, index) {
        item.addEventListener('click', function() {
            document.querySelector('#modal').style.display = 'flex';
            modalContent[index].action();
        });
    });

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

        return false;
    });
}