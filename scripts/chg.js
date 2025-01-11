function nc(){
   var chg=document.getElementById("ch");
   document.getElementById("bm").style.display=(chg.innerHTML=='显示插件')?'block':'none';
   document.getElementById("ch").innerHTML=(chg.innerHTML=='隐藏插件')?'显示插件':'隐藏插件';
  }

var chl=[{
      'name':'浏览器',
      'src':'images/llq.svg',
      'script':'llq'
      },{
      'name':'画笔',
      'src':'images/pen.svg',
      'script':'pen'
  }];

for(var a=0; a<chl.length; a++){
  document.getElementById("bm").innerHTML+='<div class="cjs" onclick="rc(\''+chl[a].script+'\')">'+'<img src="'+chl[a].src+'" height="100%;"/><strong class="up">'+chl[a].name+'</strong></div>';
  }

function rc(m){
  eval(m+'()');
  nc();
};
