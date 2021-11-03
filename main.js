function AddUser(){
    console.log("User Added");
}

setInterval(function(){
    if (screen.width < 960){
        document.getElementById("USER1").style.width="80%";
        document.getElementById("USER2").style.width="80%"; 
        document.getElementById("Log").style.width="80%"; 
    }
    else {
        document.getElementById("USER1").style.width="30%";
        document.getElementById("USER2").style.width="30%"; 
        document.getElementById("Log").style.width="30%";
    }
}, 100);
