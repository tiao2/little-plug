function gqu() {
    let queryParams = {};
    let ur = window.location.href;
    let queryString = ur.split('?')[1];
    if (queryString) {
        let params = queryString.split('&');
        params.forEach(function(param) {
            let split = param.split('=');
            queryParams[split[0]] = split[1];
        });
    }
    return queryParams;
};
 if(gqu().c==undefined){location.href+='?c=black';};
var canvas = document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var touchable = 'createTouch' in document;
if (touchable) {
    canvas.addEventListener('touchstart', onTouchStart, false);
    canvas.addEventListener('touchmove', onTouchMove, false);
}
else
{
      alert("touchable is false !");
}
var lastX;
var lastY;
var ctx =canvas.getContext("2d");
ctx.lineWidth=10;
ctx.strokeStyle=gqu().c;
function onTouchStart(event) {
    event.preventDefault();
    lastX=event.touches[0].clientX;
    lastY=event.touches[0].clientY;
    drawRound(lastX,lastY);
}

function onTouchMove(event) {
    try
    {
      event.preventDefault();
      drawLine(lastX,lastY,event.touches[0].clientX,event.touches[0].clientY);
      lastX=event.touches[0].clientX;
      lastY=event.touches[0].clientY;
    }
    catch(err){
        alert( err.description);
    }
}

function drawRound(x,y)
{
    ctx.fillStyle=gqu().c;
    ctx.beginPath();
    ctx.arc(x,y,5,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}

function drawLine(startX,startY,endX,endY)
{
    ctx.beginPath();
    ctx.lineCap="round";
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}

var ce=document.getElementById("cs");
ce.addEventListener("keyup", function(e){
           var a=ce.value.split(/[^#0123456789abcdefABCDEF]/); if(ce.value.search("#")>=0) ce.value=a[0];
           if(ce.value.search("#")<0 && ce.value!='' && e.key!=='Enter'){
            var dt='aliceblue,antiquewhite,aqua,aquamarine,azure,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyello,lime,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen';
var gt='aliceblue,antiquewhite,aqua,aquamarine,azure,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyello,lime,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen';
gt=gt.split(',');dt=dt.split(',');
  for(var n=0; n<dt.length; n++){
         var s=dt[n],yn=(s.search(ce.value)===-1);
         if(yn){gt.splice(gt.findIndex(item => item === s), 1);}
      }
       var sd=gt.map(m => '<div height="10px" width="100%" onclick="ce.value=\''+m+'\';document.getElementById(\'search\').style.display=\'none\';" class="sj"><label style="background-color:'+m+'">&nbsp;&nbsp;&nbsp;</label>'+ss(m)+'</div>').join('');
        document.getElementById("search").style.display='block';
        document.getElementById("search").innerHTML=sd;
        function ss(sk){
            var g=sk.search(ce.value);
           return(sk.substring(0,g)+'<mark>'+ce.value+'</mark>'+sk.substring(g+ce.value.length,sk.length));
          }
             } else { document.getElementById("search").style.display='none'; }
        });
function ch(){ location.href='pen.html?c='+ce.value; };
