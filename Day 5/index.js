import user,{addUser,editUser,deleteUser,editMultipleUser} from "./userModules.js";

editUser(1,"name","elaks")
console.log(user)

//DOM
document.body.innerText="hello";
document.body.innerHTML="<div style=color:green>sece</div>";
document.body.style.backgroundColor="lightblue";

console.log(document.body.childNodes);
const allchild=document.body.children;
allchild[1].style.color="green";

setTimeout(()=>allchild[0].style.color="red",3000)
setTimeout(()=>allchild[1].style.color="green",6000)
setTimeout(()=>allchild[2].style.color="orange",9000)

setTimeout(()=>allchild[0].style.fontFamily="Arial",3000)
setTimeout(()=>allchild[1].style.fontFamily="Verdana",6000)
setTimeout(()=>allchild[2].style.fontFamily="Courier New",9000)

setTimeout(()=>allchild[0].innerText="RED",3000)
setTimeout(()=>allchild[1].innerText="GREEN",6000)
setTimeout(()=>allchild[2].innerText="ORANGE",9000)

let i=true
setInterval(()=>{
    allchild[0].style.color=i?"green":"orange"
    i=!i
},2000)

const tag=document.getElementsByClassName("cse")
tag[0].innerText="elaks"
console.log(tag)

const id=document.getElementById("id")
id.innerText=" unique"
console.log(id)

const b=document.getElementById("lbutton")
const user=document.getElementById("user")
const pass=document.getElementById("pass")
const form=document.getElementById("login")

b.addEventListener("click",(event)=>{
    console.log("click");
})

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("submit",user.value,pass.value)
})
