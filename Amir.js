

        

function mkh(){
    
    document.getElementById("xmn2").style.display="block";
    setTimeout(function(){
    document.getElementById("xmn2").style.display="none";
},3000);
}

function JKM(){
    let PK = document.getElementById("BUB").value;
    let G = PK.length;

    if(G<3 || !isNaN(PK) || PK==""){document.getElementById("HUB").innerHTML="Andika Jina sahihi";
}else{let SSD = PK;
      let ZZS = SSD;
localStorage.setItem('ZZS',ZZS);
 let GFR=localStorage.getItem('ZZS');


document.getElementById("kiosk5").style.display="none";
document.getElementById("GUESTx").innerHTML=GFR;
}

}


