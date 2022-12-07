let inp=document.querySelector("#itext");
inp.setSelectionRange(0,0);
inp.focus();
let i=0;
let btnadd=document.querySelector("#plus");
btnadd.addEventListener("click",()=>{
    document.querySelector(".contentbox").style.visibility="visible";
});
let sub=document.querySelector("#sub");
sub.addEventListener("click",(e)=>{
    e.preventDefault();
    let inpu=document.querySelector("#itext");
    console.log(inpu.value);
    document.querySelector(".contentbox").style.visibility="hidden";
    document.querySelectorAll(".y").forEach(dem=>{
        dem.addEventListener("click",(e)=>{
            let hed=document.createElement("header");
            hed.innerHTML="#cGhu"+i;
            i++;
        });
    })

});