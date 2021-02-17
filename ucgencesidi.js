let girilenKenar = parseInt(prompt("Lütfen Kenar Sayısını Giriniz:", "3"));

switch (girilenKenar) {
    case 4:
        console.log("Dörtgen");
        break;
    case 5:
        console.log("Beşgen");
        break;
    case 6:
        console.log("Altıgen");
        break;

    default:
        console.log("Üçgen");
        break;
}