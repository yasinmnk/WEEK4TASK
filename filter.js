 const phone=require('./data');


 //array filter property

 let sonuc=phone.filter(item=>((item.marka=='samsung'||'apple'||'xiaomi'||'huwaei')&&item.bataryaKap=='4000mah'));
 

 console.table(sonuc);