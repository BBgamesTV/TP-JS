// q1

var premierh1 = document.querySelector("h1");
premierh1.style.background = "red";

// q2
var listh1 = document.querySelectorAll("h1")

listh1.forEach((elt)=>{
    elt.style.color="blue";
});

//q3

var listeheaderh1 = document.querySelectorAll("header h1")

listeheaderh1.forEach((elt)=>{
    elt.onclick=function(){
        elt.style.background = "orange";
    }
});

