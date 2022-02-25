let operasi = "";
let angkaPertama = "0";
let angkaKedua = "0";
let angkaKetiga = "100";

const nilai = document.getElementById("nilai");
const klikButton = document.getElementsByClassName("klikButton");
const clear = document.getElementById("clear");

for (let i = 0; i < klikButton.length; i++) {
  klikButton[i].addEventListener("click", function () {
    if(
      // klikButton[i].innerText === "C" ||
      klikButton[i].innerText === "%" ||
      klikButton[i].innerText === "del" ||
      klikButton[i].innerText === "/" ||
      klikButton[i].innerText === "*" ||
      klikButton[i].innerText === "-" ||
      klikButton[i].innerText === "+" ||
      // klikButton[i].innerText === "=" ||
      klikButton[i].innerText === "pre"
    ){
      operasi = klikButton[i].innerText;
      angkaPertama = nilai.value;
      nilai.value = 0;
    } else if (klikButton[i].innerText === "="){
      angkaKedua = nilai.value;
      if (operasi === "+") nilai.value = parseInt(angkaPertama) + parseInt(angkaKedua);
      if (operasi === "-") nilai.value = parseInt(angkaPertama) - parseInt(angkaKedua);
      if (operasi === "*") nilai.value = parseInt(angkaPertama) * parseInt(angkaKedua);
      if (operasi === "/") nilai.value = parseInt(angkaPertama) / parseInt(angkaKedua);
      if (operasi === "%") nilai.value = parseInt(angkaPertama) / parseInt(angkaKetiga);
    } else {
      const currentValue = parseInt(nilai.value);
      if (currentValue === 0){
        nilai.value = klikButton[i].innerText;
      } else {
        nilai.value = currentValue + klikButton[i].innerText;
      }
    }
        // nilai.value = (klikButton[i].innerText);
        // alert(klikButton[i].innerText)
    });
}

clear.addEventListener("click", function(){
operasi = "";
angkaPertama = "0";
angkaKedua = "0";
nilai.value = "0";
})