       document.getElementById("se").addEventListener('keydown',function(e){
          if(e.key==="Enter"){
             document.getElementById("ser").src=document.getElementById('se').value;
      }
  });
var iframe = document.getElementById('ser');
iframe.onload = function() {
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.addEventListener('click', function(event) {
        var target = event.target;
        if (target.tagName.toLowerCase() === 'a' && target.href) {
            document.getElementById("se").value=target.href;
            iframe.src=document.getElementById('se').value;
            event.preventDefault();
        }
    }, true);
};
