/*fetch("https://randomuser.me/api/").then(function(response){

    return response.json();
})
.then(function(data){
    console.log(data);
})*/

//---------------------------------------------------------------------------
async function getInfo(){
    const response=await fetch("https://randomuser.me/api/?results=1");
    const data=await response.json();
    console.log(data);
    document.getElementsByClassName("pers_nom")[0].innerHTML=data.results[0].name.first+" " +data.results[0].name.last;
    document.getElementsByClassName("pers_img")[0].src=data.results[0].picture.large;
}



getInfo();