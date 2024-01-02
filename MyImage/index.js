let img1=document.getElementsByTagName("img");

let colors =["green","red","orange","pink","yellow","blue","gray"];

setInterval(()=>{
    let index=Math.floor(Math.random()*7);
    img1[0].style.borderColor=colors[index];
},1000);