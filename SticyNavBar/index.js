let innerDev=document.querySelectorAll(".inner-dev");
let count=0;
for( let dev of innerDev){
    dev.innerText=++count;
}