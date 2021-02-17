const sum = ((a,b) =>{
    sonuc = a + b;
    return sonuc;
});
const minus = ((a,b) =>{
    sonuc = a - b;
     return sonuc;
});
const multiplication = ((a,b) =>{
    sonuc = a * b;
     return sonuc;
});
const divide = ((a,b) =>{
    sonuc = a / b;
     return sonuc;
});
const mod = ((a,b) =>{
    sonuc = a % b;
     return sonuc;
});
let hesap = prompt("Toplama t, Çıkarma c, Çarpma m, Bölme d, Mod a, işlemleri için tanımlanan harfleri giriniz: ");
if(!hesap == ""){
    let a = prompt("Bir sayı giriniz: ");
    let a1 = parseInt(a);
    let b = prompt("İkinci sayıyı giriniz: ");
    let b1 = parseInt(b);
    if(a1 >= 0  && b1 >= 0){
        if(hesap == "t") {
            alert(sum(a1,b1));
        }
        else if(hesap == "c") {
            alert(minus(a1,b1));
        }
        else if(hesap == "m") {
            alert(multiplication(a1,b1));
        }
        else if(hesap == "d") {
            alert(divide(a1,b1));
        }
        else if(hesap == "a") {
            alert(mod(a1,b1));
        }

    }
    
    else{
        alert("Lütfen Sayı Giriniz!");
    };
}
else{
    alert("Lütfen Toplama t, Çıkarma c, Çarpma m, Bölme d, Mod a, işlemleri için tanımlanan harfleri giriniz: ");
};


