var tuslar = document.getElementsByClassName("tuslar rakam");
var hesaptuslari = document.getElementsByClassName("tuslar hesaptus");
var hesaplama = document.getElementById("hesap");
var sonuc = document.getElementById("hesap2");
var cikartusu= document.getElementById("cikartusu");
var toplatusu= document.getElementById("toplatusu");
var carptusu= document.getElementById("carptusu");
var temizle = document.getElementById("temizletusu");
var esittir = document.getElementById("esittusu");
var boltusu = document.getElementById("boltusu");


window.onkeydown=function(tusbas){

    if (tusbas.keyCode==13) {
  
            document.getElementById("esittusu").click();
    }

    else if (tusbas.keyCode==96 ||tusbas.keyCode==48) {
        
        tuslar[3].click();
    }

    else if (tusbas.keyCode==97 || tusbas.keyCode==49) {
        tuslar[2].click();
    }

    else if (tusbas.keyCode==98 || tusbas.keyCode==50) {
        tuslar[6].click();
    }

    else if (tusbas.keyCode==99 || tusbas.keyCode==51) {
        tuslar[10].click();
    }

    else if (tusbas.keyCode==100 || tusbas.keyCode==52) {
        tuslar[1].click();
    }

    else if (tusbas.keyCode==101 || tusbas.keyCode==53) {
        tuslar[5].click();
    }

    else if (tusbas.keyCode==102 || tusbas.keyCode==54) {
        tuslar[9].click();
    }

    else if (tusbas.keyCode==103 || tusbas.keyCode==55) {
        tuslar[0].click();
    }

    else if (tusbas.keyCode==104 || tusbas.keyCode==56) {
        tuslar[4].click();
    }

    else if (tusbas.keyCode==105 || tusbas.keyCode==57) {
        tuslar[8].click();
    }
    else if (tusbas.keyCode==110) {
        tuslar[7].click();
    }

    else if (tusbas.keyCode==107) {
        toplatusu.click();
    }

    else if (tusbas.keyCode==109) {
        cikartusu.click();
    }

    else if (tusbas.keyCode==106) {
        carptusu.click();
    }

    else if (tusbas.keyCode==27) {
        temizle.click();
    }
    else if (tusbas.keyCode==111) {
        boltusu.click();
    }
}



var inputtemizle = function() {
    sonuc.value = "";
    hesaplama.value="";
    sonuc.placeholder="";
};

var yaz = function() {
    if (hesaplama.value=="" && sonuc.value=="" && this.innerHTML==".") {
        sonuc.value += "0" + this.innerHTML;
    }
    else if (this.innerHTML==".") 
    {
        if (sonuc.value.substring(sonuc.value.length - 1) !==".") 
        {
        sonuc.value += this.innerHTML;
        }
    }

    else{
        sonuc.value += this.innerHTML;
    }

    
};

var islem = function() {

    if (sonuc.value !="" || sonuc.placeholder !="") {
        if (hesaplama.value.substring(hesaplama.value.length-1) == "=" ||hesaplama.value.substring(hesaplama.value.length-1) == "+" || hesaplama.value.substring(hesaplama.value.length-1) == "-"|| hesaplama.value.substring(hesaplama.value.length-1) == "/"|| hesaplama.value.substring(hesaplama.value.length-1) == "*") {
            if (sonuc.value=="") {

                hesaplama.value=hesaplama.value.slice(0, -1) + this.innerHTML;
            }
            else{
                sonuc.value += this.innerHTML;
                hesaplama.value+=sonuc.value;
                sonuc.value="";
                if (hesaplama.value.slice(0, -1)!="") {
                    sonuc.placeholder=eval(hesaplama.value.slice(0, -1)); 
                }
    
                
            }

            
        }
        else{
            sonuc.value += this.innerHTML;
            hesaplama.value=sonuc.value;
            sonuc.value="";
            if (hesaplama.value.slice(0, -1)!="") {
                sonuc.placeholder=eval(hesaplama.value.slice(0, -1)); 
            }

        }
    }   

};


temizle.addEventListener('click', inputtemizle);
esittir.addEventListener('click', islem);


for (var i = 0; i < tuslar.length; i++) {
    tuslar[i].addEventListener('click', yaz, false);
}

for (var i = 0; i < hesaptuslari.length; i++) {
    hesaptuslari[i].addEventListener('click', islem, false);
}
