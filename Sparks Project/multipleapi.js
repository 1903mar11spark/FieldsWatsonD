window.onclick = function(){
    let submitButton = null; 
    let endorsementButton = null;

    if(document.getElementById("Opponet")){
        document.getElementById("Opponet").addEventListener("click", getOpponet);       
    };
    if(document.getElementById("Your Defender")){
        document.getElementById("Your Defender").addEventListener("click", getDefender);
    };
    if(document.getElementById("search")){
        document.getElementById("search").addEventListener("click", getHeroSearch);
    }
}

let stateImg=
    {
        image: ''
    }
let stateName =
{
    name:''
}
let stateBio =
{
    biography: ''
}
let statePow = 
{
    powerstats:''
}


let updateContentOpponet = function(){
    document.getElementById("superpicO").innerHTML = "<img id='superpicO' src='"+stateImg.image.url+"' alt='Picture of "+ stateName.name+" is not avaible'>";
    document.getElementById("nameO").innerText=stateName.name;
    document.getElementById("fullNameO").innerText=stateBio.biography['full-name'];
    document.getElementById("publisherO").innerText = stateBio.biography.publisher;
    document.getElementById("first-appearanceO").innerText = "First appeared in: " + stateBio.biography['first-appearance'];

    
    combatOpp = +statePow.powerstats.combat;
    strengthOpp = +statePow.powerstats.strength;
    intelligenceOpp = +statePow.powerstats.intelligence;
    speedOpp = +statePow.powerstats.speed;
    powerOpp = +statePow.powerstats.power;
    durabilityOpp = +statePow.powerstats.durability;

    if(isNaN(combatOpp)){
        combatOpp = 0;
    }

    if(isNaN(intelligenceOpp)){
        intelligenceOpp = 0;
    }

    if(isNaN(strengthOpp)){
        strengthOpp = 0;
    }
    if(isNaN(speedOpp)){
        speedOpp = 0;
    }
    if(isNaN(powerOpp)){
        powerOpp = 0;
    }
    if(isNaN(durabilityOpp)){
        durabilityOpp = 0;
    }


    document.getElementById("combatO").innerText = combatOpp;
    document.getElementById("strengthO").innerText = strengthOpp;
    document.getElementById("intelligenceO").innerText = intelligenceOpp;
    document.getElementById("speedO").innerText = speedOpp;
    document.getElementById("powerO").innerText = powerOpp;
    document.getElementById("durabilityO").innerText = durabilityOpp;

}
let updateContentDeffenet = function(){
    document.getElementById("superpicD").innerHTML = "<img id='superpicD' src='"+stateImg.image.url+"' alt='Picture of " + stateName.name + "'>";
    document.getElementById("nameD").innerText=stateName.name;
    document.getElementById("fullNameD").innerText= stateBio.biography['full-name'];
    document.getElementById("publisherD").innerText = stateBio.biography.publisher;
    document.getElementById("first-appearanceD").innerText = "First appeared in: " + stateBio.biography['first-appearance'];

    combatDef = +statePow.powerstats.combat;
    strengthDef = +statePow.powerstats.strength;
    intelligenceDef = +statePow.powerstats.intelligence;
    speedDef = +statePow.powerstats.speed;
    powerDef = +statePow.powerstats.power;
    durabilityDef = +statePow.powerstats.durability;

    if(isNaN(combatDef)){
        combatDef= 0;
    }

    if(isNaN(intelligenceDef)){
        intelligenceDef = 0;
    }

    if(isNaN(strengthDef)){
        strengthDef= 0;
    }
    if(isNaN(speedDef)){
        speedDef = 0;
    }
    if(isNaN(powerDef)){
        powerDef = 0;
    }
    if(isNaN(durabilityDef)){
        durabilityDef = 0;
    }

    document.getElementById("intelligenceD").innerText = intelligenceDef;
    document.getElementById("strengthD").innerText = strengthDef;
    document.getElementById("combatD").innerText = combatDef;
    document.getElementById("speedD").innerText = speedDef;
    document.getElementById("powerD").innerText = powerDef;
    document.getElementById("durabilityD").innerText = durabilityDef;
}

function LetsBattle(){ 

    //Battle Stats
    OppondentStats = intelligenceOpp + strengthOpp + speedOpp + combatOpp + durabilityOpp + powerOpp;

    DeffenderStats = intelligenceDef + strengthDef + speedDef + combatDef + durabilityDef + powerDef;

    if(DeffenderStats > OppondentStats){
        alert("WINNER!!! DO YOU WISH TO BATTLE AGAIN?");
    }
    if(DeffenderStats < OppondentStats){ 
        alert("YOU LOSE!!! DO YOU WISH TO BATTLE AGAIN?");
    }
    if(DeffenderStats == OppondentStats){
        alert("It's a draw. DO YOU WISH TO BATTLE AGAIN?");
    }
}

let urlOpponet = "https://www.superheroapi.com/api.php/10157355065706414/" + (Math.floor(Math.random() * 730)+1);
let urlDefender = "https://www.superheroapi.com/api.php/10157355065706414/" + (Math.floor(Math.random() * 730)+1);




function getOpponet(){
    fetch(urlOpponet, {method: "GET", headers:{"Accept": "application/json"}})
    //define behavior for when responce returns
    .then((response)=> {
        //return unwrapped proie object for the next chain operation
        return response.json();
    })
    //utilize unwrapped promise as a JS promise
    .then((data)=>{
        console.log(data);
        stateImg.image = data.image
        stateName.name = data.name;
        stateBio.biography = data.biography;
        statePow.powerstats = data.powerstats;

        updateContentOpponet();
    })
    //what if there is an error/problem?
    .catch((error)=>{
        alert("OH NO :(");
        console.log(error);
    })
}
function getDefender(){
    fetch(urlDefender, {method: "GET", headers:{"Accept": "application/json"}})
    //define behavior for when responce returns
    .then((response)=> {
        //return unwrapped proie object for the next chain operation
        return response.json();
    })
    //utilize unwrapped promise as a JS promise
    .then((data)=>{
        console.log(data);
        stateImg.image = data.image
        stateName.name = data.name;
        stateBio.biography = data.biography;
        statePow.powerstats = data.powerstats;

        updateContentDeffenet();
    })
    //what if there is an error/problem?
    .catch((error)=>{
        alert("OH NO :(");
        console.log(error);
    })
}

function getHeroSearch(){
    let superSearch = document.getElementById("SuperSearch").value;
let url = "https://www.superheroapi.com/api.php/10157355065706414/search/" + superSearch;
    fetch(url, {method: "GET", headers:{"Accept": "application/json"}})
    //define behavior for when responce returns
    .then((response)=> {
        //return unwrapped proie object for the next chain operation
        return response.json();
    })
    //utilize unwrapped promise as a JS promise
    .then((data)=>{
        console.log(superSearch);
        console.log(data);
        if(data.response == "error"){
            alert("Character not found.")
        }else{
            alert("There are " + data.results.length + " results.")
            for(i=0; i<data.results.length; i++){
                let span = document.createElement("span");
                document.getElementById("image").appendChild(span).innerHTML = "<img id='superpicD' src='"+data.results[i].image.url+"' alt='Picture of " + data.results[i].name + "'>";
                let p1= document.createElement("p");
                document.getElementById("Name").appendChild(p1).innerText ="Name: " + data.results[i].biography['full-name'];
               /*for(j=0; j<data.results[i].biography.aliases.length; j++){
                    let li = document.createElement("li");
                    document.getElementById("aliases").appendChild(li).innerText="Aliases: " + data.results[i].biography.aliases[j];
                };*/
                let p2=document.createElement("p");
                document.getElementById("firstAppearance").appendChild(p2).innerText="First apperance: " + data.results[i].biography['first-appearance'];
            }   
            
        }

        //updateContentOpponet();
    })
    //what if there is an error/problem?
    .catch((error)=>{
        alert("OH NO :(");
        console.log(error);
    })
}