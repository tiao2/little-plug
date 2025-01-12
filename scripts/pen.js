//The script of the plug-in “Pen”
function pen(){
(m=>{m.id='blp';m.style='position:absolute;top:0%;left:0%;z-index:100;width:100%;height:100%;';document.body.appendChild(m)})(document.createElement('div'));
(n=>{n.innerHTML='<strong>画笔</strong>';n.id='hep';n.style='position:absolute;top:0%;left:0%;width:100%;height:5%;background-color:#ccc;z-index:101',document.getElementById('blp').appendChild(n)})(document.createElement('div'));
(n=>{n.src='pen.html';n.style='position:absolute;top:5%;left:0%;width:100%;height:95%;z-index:101';n.frameBorder='none';document.getElementById('blp').appendChild(n)})(document.createElement('iframe'));
(n=>{n.innerHTML='&times;';n.onclick=()=>document.getElementById('blp').remove();n.style='position:absolute;top:0%;left:90%;width:5%;height:100%;background-color:#ccc;border:none;z-index:102',document.getElementById('hep').appendChild(n)})(document.createElement('button'));
}