let inputNom=document.querySelector("[name='nom']");
let inputBio=document.querySelector("[name='bio']");
let inputMail=document.querySelector("[name='mail']");
let inputTele= document.querySelector("[name='tele']");


document.forms[0].onsubmit=function(e){

     let nomValid=false;
     let bioValid=false;
     let mailValid=false;
     let phoneValid=false;


    
console.log(inputNom.value);
console.log(inputNom.value.length);

if(inputNom.value !=="" &&  inputNom.value.length>=5  && inputNom.value.length<=30){
nomValid=true;
console.log("vaalide nom")
}

if(inputBio.value !=="" &&  inputBio.value.length>=2  && inputBio.value.length<=100){
    bioValid=true;
    console.log("valide bio");
    }


if(inputMail.value !=="" &&  inputMail.value.length>=5  && inputMail.value.length<=100){
     mailValid=true;
     console.log("valide bio");
     }

if(inputTele.value !=="" &&  inputTele.value.length>=5  && inputTele.value.length<=100){
          phoneValid=true;
          console.log("valide bio");
          }

 if(nomValid == false || bioValid== false || mailValid==false || phoneValid ==false){
        e.preventDefault();
     }
    
}
document.write("hey");



























// document.links[0].onclick=function(event){

// console.log(event);
// event.preventDefault();
// }
