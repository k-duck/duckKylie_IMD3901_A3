function pick3D(){
    console.log("3D!!");
    document.getElementById('player3D').style.display = "block";
    document.getElementById('start-ui').style.display = "none";
}

function pick3DTimer(){
    console.log("3D!!");
    document.querySelector("body").setAttribute("time", Date.now());
    document.getElementById('player3D').style.display = "block";
    document.getElementById('start-ui').style.display = "none";
}

function pick2D(){
    console.log("2D!!");
    document.getElementById('player2D').style.display = "flex";
    document.getElementById('start-ui').style.display = "none";
}

