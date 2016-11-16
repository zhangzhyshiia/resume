/**
 * Created by Administrator on 2016/11/8.
 */
(function () {
    var desW = 640,
        winW = document.documentElement.clientWidth,
        oMain=document.querySelector('.main');
    if(winW>desW){
        oMain.style.margin='0 auto';
        oMain.style.width=desW+'px';
        return;
    }
    document.documentElement.style.fontSize = winW/desW*100+"px";
})()