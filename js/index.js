/**
 * Created by Administrator on 2016/11/8.
 */
(function(desW){
    var winW=document.documentElement.clientWidth,
        oMain=document.getElementById('main'),
        n=winW/desW;
    if(winW>desW){
        oMain.style.margin='0 auto';
        oMain.style.width=desW+'px';
        return;
    }
    document.documentElement.style.fontSize=n*100+'px';
})(640);
var mySwiper = new Swiper(".swiper-container",{
    direction:"vertical",
    loop:true,
    pagination: '.swiper-pagination',
    paginationType : 'fraction',
    onTransitionEnd :function(swiper){
        //把原来的第一个滑块复制了一份放在最后的位置，
        //把原来的最后一个滑块复制了一份放在第一个位置
        var slides = swiper.slides;
        var curIndex = swiper.activeIndex;
        var lastIndexSlide = slides.length-1;//现在最后一个滑块
        var trueIndexSlide = slides.length-2;//原来最后一个滑块
        [].forEach.call(slides,function(item,index){
            item.id = "";
            if(curIndex == index){//对当前显示的滑块做判断
                switch (index){
                    case 0:
                        item.id = "page"+trueIndexSlide;
                        break;
                    case lastIndexSlide:
                        item.id = "page1";
                        break;
                    default:
                        item.id = "page"+curIndex;
                }
            }

        })

    }
})

var music = document.querySelector(".music");
var beyond = document.querySelector("#beyond");
window.setTimeout(function(){
    beyond.play();
    beyond.addEventListener("canplay",function(){
        music.className = "music musicCur";
    })
},1000);
music.addEventListener("click",function(){
    //paused属性判断音频文件是播放的还是停止 beyond.paused=true说明音频文件目前是停止播放
    //让音频文件播放play(),让音频文件停止是pause();
    if(beyond.paused){//停止
        beyond.play();
        music.className = "music musicCur";
    }else{
        beyond.pause();
        music.className = "music";
        music.style.opacity = 1;
    }
},false)
