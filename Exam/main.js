let nub=document.getElementById("nub")
let number="0123456789qwertyuiopl!@#$%^&*()_+~`"
let passLength=12;
let pass=""
function Add(){
    for( let i=0;i<=passLength;i++){
        let rnd=Math.floor(Math.random()*number.length)
        pass+=number.substring(rnd,rnd +1)
    }
    if(!nub.value){

        alert("Succesfull");
    }
    else{
        document.getElementById("smatri").innerHTML=pass;
        }
}

let age=prompt("Yaşınızı Daxil Edin :")
let ops=20;
if(age>ops){
    alert("Congras")
}
else{
    alert("Get Out The Here Man")
}
