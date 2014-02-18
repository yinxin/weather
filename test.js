var iframe=document.createElement("iframe");  
iframe.src="about:blank";  
iframe.setAttribute("style","display:none;visibility:hidden;");  
document.body.appendChild(iframe);  
var d=iframe.contentWindow.document;  
d.charset=d.characterSet="GBK";  
function getGBKEscape(s) {  
    d.write("<body><a href='?"+s+"'>X</a></body>");  
    d.close();  
    var url=d.body.firstChild.href;  
    return url.substr(url.lastIndexOf("?")+1);  
};
alert(getGBKEscape('烟火花'))
