const phone=require('./data');

let sonuc= phone.map(item => {
    return {
        marka: item.marka,
        model: item.model,
        kamera:item.kamera,
        bluetooth:item.modelyili,
        
    }    
}).filter(item => item.marka == "apple").map(item => {
    return{
        marka: item.marka,
        model: item.model,
        kamera:item.kamera,
        bluetooth:item.modelyili,
        cekirdek:8,
    }
});

console.table(sonuc);