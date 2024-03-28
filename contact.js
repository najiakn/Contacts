window.onload = function(){
    
    /*fetch("https://randomuser.me/api/").then(function(response){

return response.json();
})
.then(function(data){
console.log(data);
})*/

//---------------------------------------------------------------------------
async function getInfo(){
const response=await fetch("https://randomuser.me/api/?results=50");
const data=await response.json();
console.log(data);
for(i=0;i<=data.results.length;i++){
    document.getElementsByClassName("pers_desc")[i].innerHTML=data.results[i].name.title;
document.getElementsByClassName("pers_nom")[i].innerHTML=data.results[i].name.first+" " +data.results[i].name.last;
document.getElementsByClassName("pers_img")[i].src=data.results[i].picture.large;
document.getElementsByClassName("tele")[0].innerHTML=data.results[i].phone;
document.getElementsByClassName("mail")[0].innerHTML=data.results[i].email;
document.getElementById("id_user").innerHTML=i;



}


}




async function createElement() {
const parentElement = document.getElementsByClassName("list")[0];
for (let i = 0; i < 50; i++) {
    const enfantElement = document.createElement('div');
    enfantElement.classList.add('pers');

    const innerHTML = ' <div class="pres_img"><img src="profil.png" alt="user_profil" class="pers_img"> </div> <span id="id_user" ></span>' +
        '<div class="pers_info"> <p class="pers_nom">Najia knizi</p><p class="pers_desc">Developpeuse</p></div>';

    enfantElement.innerHTML = innerHTML;
    parentElement.appendChild(enfantElement);
    document.getElementsByClassName("pers")[i].addEventListener("click",function(){
        var nom_list = document.getElementsByClassName("pers_nom")[i].innerHTML;
        document.getElementsByClassName("profil_nom")[0].innerHTML=nom_list;

        var descr=document.getElementsByClassName("pers_desc")[i].innerHTML;
        document.getElementsByClassName("profil_desc")[0].innerHTML=descr;

        var image=document.getElementsByClassName("pers_img")[i].src;
        document.getElementsByClassName("profil_img")[0].src=image;


 
    })
}
}




getInfo();
createElement();

// for(i=0;i<50;i++){
    
// }

}
