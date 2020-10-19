var tuslar = document.getElementsByClassName("tuslar rakam");
var hesaptuslari = document.getElementsByClassName("tuslar hesaptus");
var hesaplama = document.getElementById("hesap");
var sonuc = document.getElementById("hesap2");
var temizle = document.getElementById("temizletusu");
var esittir = document.getElementById("esittusu");
var yontemler = ["+","-","/","*"];
var inputtemizle = function() {
    sonuc.value = "";
    hesaplama.value="";
    sonuc.placeholder="";
};

var yaz = function() {
    
        sonuc.value += this.innerHTML;


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
