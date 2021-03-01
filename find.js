const phone = require("./data");

let sonuc = phone.find(item => item.marka =='samsung');

console.table(sonuc);