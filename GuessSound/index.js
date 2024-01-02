let box1=document.querySelector("#box1");
let s1=document.querySelector("#s1");
let count=0;
box1.addEventListener('click',()=>{
    s1.play();
    box1.style.border="2px solid black";
    // setInterval(() => {
    //    // box1.style.border="none";
    //     console.log(++count);
    // }, 2000);
});