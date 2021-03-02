const phone=require('./data');

let sonuc= phone.map(item => {
    return {
        marka: item.marka,
        model: item.model,
        kamera:item.kamera,
        bataryaKap:item.bataryaKap,
        bluetooth:item.bluetooth,
        ekranBoy:item.ekranBoy
        
    }    
}).filter(item => item.marka == "apple").map(item => {
    return{
        marka: item.marka,
        model: item.model,
        kamera:item.kamera,
        bataryaKap:item.bataryaKap,
        bluetooth:item.bluetooth,
        ekranBoy:item.ekranBoy,
        cekirdek:8,
        dokunmatik:'hassas',
        onkamera:'var',
        konumbul:'1000km'
    }
});

console.table(sonuc);