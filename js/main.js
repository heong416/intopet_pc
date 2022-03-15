$(function(){
    
    
    //메인컨텐츠04,05 슬라이더
    $('.con04List').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/nextBtn.png"></div>',
    });
    
    
    //모바일 컨텐츠01 슬라이더
    $('.storyBox').slick({
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/nextBtn.png"></div>',
    });

    
    //모바일 컨텐츠04 슬라이더
    $('.mCon04List').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/nextBtn.png"></div>',
    });
    
})