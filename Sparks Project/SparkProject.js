window.onload = function(){
    document.getElementById("search").addEventListener("onclick",getCharacterFetch)
}


let state = {
    results: ""
}
let search = document.getElementById("SuperSearch").value;
let url = "https://www.superheroapi.com/api.php/10157355065706414/search" + search;

function getCharacterFetch(){



    fetch(url, {method: "GET", headers:{"Accept": "*/*"}})
    .then((response)=> {       
        return response.json();
    })
    .then((data)=>{
        console.log(superSearch)
        console.log(data);
        //updateContent();  

    })
}
