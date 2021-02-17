let girilenSayi1 = parseInt(prompt("Lütfen ilk sayıyı girin:"));
let girilenSayi2 = parseInt(prompt("Lütfen ikinci sayıyı girin:"));
let girilenSayi3 = parseInt(prompt("Lütfen üçüncü sayıyı girin:"));
let sonuc = 0;

if(girilenSayi1 >= 0 && girilenSayi2 >= 0 && girilenSayi3 >=0)
{
    sonuc =parseInt((girilenSayi1 + girilenSayi2 + girilenSayi3) / 3);

}
console.log(sonuc);