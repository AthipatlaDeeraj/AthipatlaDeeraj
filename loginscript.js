let pass=document.querySelector("#pass");
let fn=document.querySelector("#fname");
let ln=document.querySelector("#lname");
let form=document.querySelector("form");

form=addEventListener("submit",(event)=>{
        event.preventDefault();
        if(pass.value=="Deeru"&&fn.value=="athipatla"&&ln.value=="deerajkumar"){
            window.location.href="homepage.html";
        }
        else{
            alert("wrong password");
        }
});
