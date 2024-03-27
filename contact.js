/*fetch("https://randomuser.me/api/").then(function(response){

    return response.json();
})
.then(function(data){
    console.log(data);
})*/

//---------------------------------------------------------------------------
async function getInfo(){
    const response=await fetch("https://randomuser.me/api/?results=500");
    const data=await response.json();
    console.log(data);
    for(i=0;i<=data.results.length;i++){
        
       

     
    document.getElementsByClassName("pers_nom")[i].innerHTML=data.results[i].name.first+" " +data.results[i].name.last;
    document.getElementsByClassName("pers_img")[i].src=data.results[i].picture.large;
    document.getElementsByClassName("pers_desc")[i].innerHTML=data.results[i].name.title;
}

}




async function createElement() {
    const parentElement = document.getElementsByClassName("list")[0];
    for (let i = 0; i < 500; i++) {
        const enfantElement = document.createElement('div');
        enfantElement.classList.add('pers');

        const innerHTML = '<div class="pres_img" onclick="clicker"><img src="profil.png" alt="user_profil" class="pers_img"></div>' +
            '<div class="pers_info"> <p class="pers_nom">Najia knizi</p><p class="pers_desc">Developpeuse</p></div>';

        enfantElement.innerHTML = innerHTML;
        parentElement.appendChild(enfantElement);
    }
}

function clicker(){
    document.getElementsByClassName("profil_nom")[0].innerHTML= document.getElementsByClassName("pers_nom")[0].innerHTML;
    }

    
getInfo();
createElement();