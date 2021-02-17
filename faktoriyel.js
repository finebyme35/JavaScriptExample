let sayi = parseInt(prompt("Faktöriyel Hesabı için Pozitif bir sayı giriniz: "));

let sonuc = 1;

if(sayi >= 0)
{
   if(sayi === 0)
   {
        console.log("Sıfır'ın faktöriyeli 1'dir.");
   }else if(sayi === 1)
   {
        console.log("Bir'in faktöriyeli 1'dir.");
   }
   else if(sayi >= 2)
   {
        for (let i = 1; i <= sayi; i++) 
        {
            sonuc = sonuc * i;
            
        }
        console.log(sonuc);
   }
}
else
{
    console.log("Lütfen Pozitif sayı giriniz!!!!");
}