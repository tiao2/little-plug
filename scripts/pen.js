//The script of the plug-in “Pen”
function pen(){
  (m=>{m.src='pen.html';m.onclick=()=>m.remove();m.height='95%';m.style='position:absolute;top:5%;left:0%;z-index:105;width:100%;';m.frameBorder='none';document.body.appendChild(m)})(document.createElement('iframe'));
}
