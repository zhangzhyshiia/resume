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
