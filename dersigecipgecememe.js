let girilenVizeNotu = parseFloat(prompt("Lütfen Vize Notunu Giriniz:"));
let girilenFinalNotu = parseFloat(prompt("Lütfen Final Notunu Gİriniz:"));
let gecmeNotu = 50;
let vizeHesapla =parseFloat((girilenVizeNotu * 40) / 100);
let finalHesapla =parseFloat((girilenFinalNotu * 60) / 100);
let sonuc = 0;
if(girilenVizeNotu >= 0 && girilenFinalNotu >= 0)
{
    sonuc = parseFloat(vizeHesapla + finalHesapla);
    if(sonuc >= gecmeNotu)
    {
        console.log("Tebrikler Dersten Geçtiniz.");
    }
    else
    {
        console.log("Dersten Kaldınız.Tekrar Alınız!");
    }
}
else
{
    console.log("Lütfen Pozitif Değer Giriniz!!!");
}