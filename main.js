var milli = document.getElementById("milli");
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var dis = document.getElementById("dis");
var lap = document.getElementById("lap");
var secon = document.getElementById("milli1")
var secod = document.getElementById("secod")





var i;

function play() {
  i =  setInterval(function(){
        milli.innerHTML = parseInt(milli.innerHTML) + 1;

        if (milli.innerHTML == 9) {
            milli.innerHTML = 0;
            secon.innerHTML = parseInt(secon.innerHTML) + 1;
        }

        if (secon.innerHTML == 9)  {
            milli.innerHTML = 0;
            secon.innerHTML = 0;
            seconds.innerHTML = parseInt(seconds.innerHTML) + 1;
        }
        
        else if (seconds.innerHTML == 9) {
            seconds.innerHTML = 0;
            secod.innerHTML = parseInt(secod.innerHTML) + 1;
        }

        if (secod.innerHTML == 6) {
            secod.innerHTML = 0;
            seconds.innerHTML = 0;
            minutes.innerHTML = parseInt(minutes.innerHTML) + 1;
        }
    },20)

    document.getElementById("res").style.display = "none";
    document.getElementById("paus").style.display = "inline";
    document.getElementById("laps").style.display = "inline";


}

function paus() {
    clearInterval(i);
    document.getElementById("res").style.display = "inline"


}

function laps() {
    var p = document.createElement("p")
    var txt = document.createTextNode(dis.innerText)
    p.appendChild(txt)
    lap.appendChild(p)

    p.setAttribute("class","para")
    p.setAttribute("id","pclass")
}

function reset(){
    milli.innerHTML = 0;
    secod.innerHTML = 0;
    secon.innerHTML = 0;
    seconds.innerHTML = 0;
    minutes.innerHTML = 0;

    document.getElementById("res").style.display = "none";
    document.getElementById("laps").style.display = "none";
    document.getElementById("paus").style.display = "none";
    document.getElementById("pclass").style.display = "none";

}


function ham() {
    var menu = document.getElementById("menu");
    menu.style.animation = "1s menubar ease-in-out"
    // menu.style.animationPlayState = "running"
    // menu.style.transition = "10s";
    menu.style.height = "35vh"
    menu.style.display = "block" 



    // var cancel = document.getElementById("cancel");
    // var ham = document.getElementById("ham");

    // cancel.style.display = "block"
}

function cancel(){
    var menu = document.getElementById("menu");
    menu.style.animation = "1s cancel-menubar ease-in-out";
    // menu.style.transition = "1s"
    // menu.style.height = "0vh"
    menu.style.display = "none";
}

function deftheme() {
    document.getElementById("mainbody").style.backgroundColor = "rgb(6, 61, 61)";
    document.getElementById("navbar").style.backgroundColor = "rgb(178, 221, 178)";
    document.getElementById("clock1").style.display = "flex";
    document.getElementById("clock2").style.display = "none";
    document.getElementById("clock3").style.display = "none";
    document.getElementById("clock5").style.display = "none";

    document.getElementById("sunplay").style.display = "none"
    document.getElementById("sunpause").style.display = "none";
    document.getElementById("sunreload").style.display = "none";
    document.getElementById("sunrefresh").style.display = "none";
    document.getElementById("clock4").style.display = "none";
    document.getElementById("nightplay").style.display = "none";
    document.getElementById("metalpause").style.display = "none";
    document.getElementById("metalplay").style.display = "none";
    document.getElementById("metalreload").style.display = "none";
    document.getElementById("metalrefresh").style.display = "none";



    document.getElementById("defaultplay").style.display = "inline";
    document.getElementById("arrowhead").style.display = "none";
    document.getElementById("defaultpause").style.display = "inline";
    document.getElementById("skypause").style.display = "none";
    document.getElementById("defaultreload").style.display = "inline";
    document.getElementById("skyreload").style.display = "none";
    document.getElementById("defaultrefresh").style.display = "inline";
    document.getElementById("skyrefresh").style.display = "none";
    document.getElementById("menu").style.backgroundColor =  "white";
    document.getElementById("dis").style.fontFamily = "Caveat Brush', cursive";

    document.getElementById("stars").style.display = "none";
    document.getElementById("stars1").style.display = "none";
    document.getElementById("stars2").style.display = "none";
    document.getElementById("stars3").style.display = "none";
    document.getElementById("nightpause").style.display = "none";
    document.getElementById("nightreload").style.display = "none";
    document.getElementById("nightrefresh").style.display = "none";
    document.getElementById("clock6").style.display = "none";
    document.getElementById("floralplay").style.display = "none";
    document.getElementById("floralpause").style.display = "none";
    document.getElementById("floralreload").style.display = "none";
    document.getElementById("floralrefresh").style.display = "none";
    document.getElementById("leaf").style.display = "none"
    document.getElementById("leaf2").style.display = "none"



}

function sky() {
    document.getElementById("mainbody").style.backgroundColor = "rgb(73, 153, 184)";
    document.getElementById("navbar").style.backgroundColor = "rgb(64, 159, 213)";
    document.getElementById("clock1").style.display = "none";
    document.getElementById("clock2").style.display = "flex";
    document.getElementById("clock3").style.display = "none";
    document.getElementById("clock5").style.display = "none";

    document.getElementById("sunplay").style.display = "none";
    document.getElementById("sunpause").style.display = "none";
    document.getElementById("sunreload").style.display = "none";
    document.getElementById("sunrefresh").style.display = "none";
    document.getElementById("clock4").style.display = "none";
    document.getElementById("nightplay").style.display = "none";




    document.getElementById("defaultplay").style.display = "none";
    document.getElementById("arrowhead").style.display = "inline";
    document.getElementById("defaultpause").style.display = "none";
    document.getElementById("metalpause").style.display = "none";
    document.getElementById("metalplay").style.display = "none";
    document.getElementById("metalreload").style.display = "none";
    document.getElementById("metalrefresh").style.display = "none";

    document.getElementById("skypause").style.display = "inline";
    document.getElementById("defaultreload").style.display = "none";
    document.getElementById("skyreload").style.display = "inline";
    document.getElementById("defaultrefresh").style.display = "none";
    document.getElementById("skyrefresh").style.display = "inline";
    document.getElementById("menu").style.backgroundColor =  "rgb(0, 41, 99)"
    document.getElementById("dis").style.fontFamily = "'Pacifico', cursive";
    document.getElementById("stars").style.display = "none";
    document.getElementById("stars1").style.display = "none";
    document.getElementById("stars2").style.display = "none";
    document.getElementById("stars3").style.display = "none";
    document.getElementById("nightpause").style.display = "none";
    document.getElementById("nightreload").style.display = "none";
    document.getElementById("nightrefresh").style.display = "none";
    document.getElementById("clock6").style.display = "none";
    document.getElementById("floralplay").style.display = "none";
    document.getElementById("floralpause").style.display = "none";
    document.getElementById("floralreload").style.display = "none";
    document.getElementById("floralrefresh").style.display = "none";
    document.getElementById("leaf").style.display = "none"
    document.getElementById("leaf2").style.display = "none"




}


function sun() {
    document.getElementById("mainbody").style.backgroundColor = "rgb(255, 91, 0)";
    document.getElementById("navbar").style.backgroundColor = "rgb(166, 56, 13)";
    document.getElementById("clock1").style.display = "none";
    document.getElementById("clock2").style.display = "none";
    document.getElementById("clock3").style.display = "flex";
    document.getElementById("clock4").style.display = "none";
    document.getElementById("clock5").style.display = "none";

    document.getElementById("defaultplay").style.display = "none";
    document.getElementById("arrowhead").style.display = "none";
    document.getElementById("nightplay").style.display = "none";

    document.getElementById("sunplay").style.display = "inline"
    document.getElementById("defaultpause").style.display = "none";
    document.getElementById("skypause").style.display = "none";
    document.getElementById("sunpause").style.display = "inline";
    document.getElementById("metalpause").style.display = "none";
    document.getElementById("metalplay").style.display = "none";
    document.getElementById("metalreload").style.display = "none";
    document.getElementById("metalrefresh").style.display = "none";


    document.getElementById("defaultreload").style.display = "none";
    document.getElementById("skyreload").style.display = "none";
    document.getElementById("sunreload").style.display = "inline";
    document.getElementById("defaultrefresh").style.display = "none";
    document.getElementById("skyrefresh").style.display = "none";
    document.getElementById("sunrefresh").style.display = "inline";
    document.getElementById("menu").style.backgroundColor =  "rgb(102, 34, 6)"
    document.getElementById("stars").style.display = "none";
    document.getElementById("stars1").style.display = "none";
    document.getElementById("stars2").style.display = "none";
    document.getElementById("stars3").style.display = "none";
    document.getElementById("nightpause").style.display = "none";
    document.getElementById("nightreload").style.display = "none";
    document.getElementById("nightrefresh").style.display = "none";
    document.getElementById("clock6").style.display = "none";
    document.getElementById("floralplay").style.display = "none";
    document.getElementById("floralpause").style.display = "none";
    document.getElementById("floralreload").style.display = "none";
    document.getElementById("floralrefresh").style.display = "none";
    document.getElementById("leaf").style.display = "none"
    document.getElementById("leaf2").style.display = "none"
    document.getElementById("dis").style.fontFamily = "'Dancing Script', cursive";



}

function night() {
    document.getElementById("mainbody").style.backgroundColor = "rgb(8, 25, 35)";
    document.getElementById("navbar").style.backgroundColor = "rgb(20, 55, 105)";
    document.getElementById("clock1").style.display = "none";
    document.getElementById("clock2").style.display = "none";
    document.getElementById("clock3").style.display = "none";
    document.getElementById("clock4").style.display = "flex";
    document.getElementById("clock5").style.display = "none";

    document.getElementById("stars").style.display = "block";
    document.getElementById("stars1").style.display = "block";
    document.getElementById("stars2").style.display = "block";
    document.getElementById("stars3").style.display = "block";

    document.getElementById("defaultplay").style.display = "none";
    document.getElementById("arrowhead").style.display = "none";
    document.getElementById("sunplay").style.display = "none";
    document.getElementById("nightplay").style.display = "inline";
    document.getElementById("nightpause").style.display = "inline";
    document.getElementById("defaultpause").style.display = "none";
    document.getElementById("skypause").style.display = "none";
    document.getElementById("sunpause").style.display = "none";
    document.getElementById("metalpause").style.display = "none";
    document.getElementById("metalreload").style.display = "none";

    document.getElementById("nightreload").style.display = "inline";
    document.getElementById("defaultreload").style.display = "none";
    document.getElementById("skyreload").style.display = "none";
    document.getElementById("sunreload").style.display = "none";
    document.getElementById("nightrefresh").style.display = "inline";
    document.getElementById("defaultrefresh").style.display = "none";
    document.getElementById("skyrefresh").style.display = "none";
    document.getElementById("sunrefresh").style.display = "none";
    document.getElementById("menu").style.backgroundColor =  "rgb(4, 12, 24)"
    document.getElementById("metalplay").style.display = "none";
    document.getElementById("metalrefresh").style.display = "none";
    document.getElementById("clock6").style.display = "none";
    document.getElementById("floralplay").style.display = "none";
    document.getElementById("floralpause").style.display = "none";
    document.getElementById("floralreload").style.display = "none";
    document.getElementById("floralrefresh").style.display = "none";
    document.getElementById("leaf").style.display = "none"
    document.getElementById("leaf2").style.display = "none"
    document.getElementById("dis").style.fontFamily = "'Kaushan Script', cursive";




}

function metal() {
    document.getElementById("mainbody").style.backgroundColor =  "rgb(145, 145, 145)"
    document.getElementById("navbar").style.backgroundColor = "rgb(57, 57, 57)";

    document.getElementById("stars").style.display = "none";
    document.getElementById("stars1").style.display = "none";
    document.getElementById("stars2").style.display = "none";
    document.getElementById("stars3").style.display = "none";

    document.getElementById("clock1").style.display = "none";
    document.getElementById("clock2").style.display = "none";
    document.getElementById("clock3").style.display = "none";
    document.getElementById("clock4").style.display = "none";
    document.getElementById("clock5").style.display = "flex";
    document.getElementById("metalplay").style.display = "inline";
    document.getElementById("defaultplay").style.display = "none";
    document.getElementById("arrowhead").style.display = "none";
    document.getElementById("sunplay").style.display = "none";
    document.getElementById("nightplay").style.display = "none";
    document.getElementById("metalpause").style.display = "inline";
    document.getElementById("nightpause").style.display = "none";
    document.getElementById("defaultpause").style.display = "none";
    document.getElementById("skypause").style.display = "none";
    document.getElementById("sunpause").style.display = "none";
    document.getElementById("metalreload").style.display = "inline";
    document.getElementById("nightreload").style.display = "none";
    document.getElementById("defaultreload").style.display = "none";
    document.getElementById("skyreload").style.display = "none";
    document.getElementById("sunreload").style.display = "none";
    document.getElementById("metalrefresh").style.display = "inline";
    document.getElementById("defaultrefresh").style.display = "none";
    document.getElementById("skyrefresh").style.display = "none";
    document.getElementById("sunrefresh").style.display = "none";
    document.getElementById("nightrefresh").style.display = "none";
    document.getElementById("menu").style.backgroundColor =  "rgb(30, 30, 30)"
    document.getElementById("mainbody").style.backgroundColor = "none"
    document.getElementById("clock6").style.display = "none";
    document.getElementById("floralplay").style.display = "none";
    document.getElementById("floralpause").style.display = "none";
    document.getElementById("floralreload").style.display = "none";
    document.getElementById("floralrefresh").style.display = "none";
    document.getElementById("leaf").style.display = "none"
    document.getElementById("leaf2").style.display = "none"
    document.getElementById("dis").style.fontFamily = "'Satisfy', cursive";



}

function flg() {
   document.getElementById("mainbody").style.background = "rgb(64, 164, 64)"
   document.getElementById("clock1").style.display = "none";
    document.getElementById("clock2").style.display = "none";
    document.getElementById("clock3").style.display = "none";
    document.getElementById("clock4").style.display = "none";
    document.getElementById("clock5").style.display = "none";
    document.getElementById("clock6").style.display = "flex";
    document.getElementById("navbar").style.backgroundColor = "rgb(17, 68, 17)";
    document.getElementById("metalplay").style.display = "none";
    document.getElementById("defaultplay").style.display = "none";
    document.getElementById("arrowhead").style.display = "none";
    document.getElementById("sunplay").style.display = "none";
    document.getElementById("nightplay").style.display = "none";
    document.getElementById("floralplay").style.display = "inline";

    document.getElementById("metalpause").style.display = "none";
    document.getElementById("nightpause").style.display = "none";
    document.getElementById("defaultpause").style.display = "none";
    document.getElementById("skypause").style.display = "none";
    document.getElementById("sunpause").style.display = "none";
    document.getElementById("floralpause").style.display = "inline";

    document.getElementById("metalreload").style.display = "none";
    document.getElementById("nightreload").style.display = "none";
    document.getElementById("defaultreload").style.display = "none";
    document.getElementById("skyreload").style.display = "none";
    document.getElementById("sunreload").style.display = "none";
    document.getElementById("floralreload").style.display = "inline";

    document.getElementById("metalrefresh").style.display = "none";
    document.getElementById("defaultrefresh").style.display = "none";
    document.getElementById("skyrefresh").style.display = "none";
    document.getElementById("sunrefresh").style.display = "none";
    document.getElementById("nightrefresh").style.display = "none";
    document.getElementById("floralrefresh").style.display = "inline";
    document.getElementById("menu").style.backgroundColor =  "rgb(135, 169, 106)"
    document.getElementById("leaf").style.display = "inline"
    document.getElementById("leaf2").style.display = "inline"
    document.getElementById("dis").style.fontFamily = "'Courgette', cursive";


}





