let fuel = 3.5;

let lperkm = 10;

let tripkm = 744;

let tripePrice = ((tripkm/lperkm) * fuel);
let fala = "O valor da viagem será de R$";

console.log((fala)+(tripePrice.toFixed(2)));