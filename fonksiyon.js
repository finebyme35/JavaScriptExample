let x = parseInt(prompt("Lütfen bir x sayısı giriniz:"));
let y = parseInt(prompt("Lütfen bir y sayısı giriniz:"));
let sonuc = 0;
const fon = ((x, y) => {
    if (x > 0 && y < 0){
        sonuc = (4 * x) + (2 * y) + 4;
        console.log(sonuc);
    }
    else if(x > 0 && y === 0)
    {
        sonuc = (2 * x) - y + 3;
        console.log(sonuc);
    }
    else if (x < 0  && y > 0) {
        sonuc = (3 * x) + (4 * y) + 3;
        console.log(sonuc);
    }
});

fon(x, y);