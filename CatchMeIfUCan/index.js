let catchMe=document.querySelector("#child-container");
let flexContainer=document.querySelector("#container");


let fDirection=["row","row-reverse","column","column-reverse"];//4
let align_items=["flex-start","flex-end","center"]; //3
let justify_content=["flex-start","flex-end","center"]//3

catchMe.addEventListener('mouseover',()=>{
    fIndex=Math.floor(Math.random()*4);
    align_index=Math.floor(Math.random()*3);
    justify_index=Math.floor(Math.random()*3);
    flexContainer.style.flexDirection=fDirection[fIndex];
    flexContainer.style.alignItems=align_items[align_index];
    flexContainer.style.justifyContent=justify_content[align_index];
});