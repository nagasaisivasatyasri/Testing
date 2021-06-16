window.onload=()=>{
  
        var divc=document.createElement("span");
        divc.setAttribute("class","container ");
        var divcrow=document.createElement("span");
        divcrow.setAttribute("class","row");
        var card=document.createElement("span");
        card.setAttribute("class","card");
        card.style.width="200px";
        card.style.height="200px";
        card.style.border="1px solid red";  
        card.style.margin="auto";  
var img=document.createElement("img");
img.setAttribute("src","user.jpg");
img.setAttribute("class","card");
img.style.width="200px";
img.style.height="200px";
img.style.border="1px solid red";
card.appendChild(img);
divcrow.appendChild(card);
divc.appendChild(divcrow);
document.body.appendChild(divc);
document.body.appendChild(document.createElement("br"));

}