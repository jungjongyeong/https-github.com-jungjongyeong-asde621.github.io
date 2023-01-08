$( function(){
    

        var page = $('main').fullpage({
                navigation:true,
                menu:'.menu',
                anchors:['section1','section2','section3','section4','section5','section6']
        })
        var swiper = new Swiper('.swiper-container', {
            navigation:{
                prevEl : '.btn_prev',
                nextEl : '.btn_next'
            },
            pagination:{
                el:'.paging'
            },
            autoplay:{
                delay:2000,
                disableOnInteraction:false
            },
            loop:true
        });

        $('.btn_pause').on('click', function(){
            swiper.autoplay.stop();
            $(this).hide();
            $(this).next().show();
        })
        $('.btn_play').on('click', function(){
            swiper.autoplay.start();
            $(this).hide();
            $(this).prev().show();
        })
        $('.main_top').on('mouseenter keyup', function(){
            $('.gnb').show();
        })
        $('.gnb').on('mouseleave', function(){
            $('.gnb').hide()
        })
})
