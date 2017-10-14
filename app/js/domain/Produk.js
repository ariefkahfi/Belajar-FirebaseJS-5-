class Produk{
    constructor(kodeProduk,namaProduk,hargaProduk){
        this.kodeProduk = kodeProduk;
        this.namaProduk = namaProduk;
        this.hargaProduk = hargaProduk;
    }



    setKodeProduk(kodeProduk){
        this.kodeProduk = kodeProduk;
    }
    setNamaProduk(namaProduk){
        this.namaProduk = namaProduk;
    }
    setHargaProduk(hargaProduk){
        this.hargaProduk = hargaProduk;
    }

    getKodeProduk(){
        return this.kodeProduk;
    }
    getNamaProduk(){
        return this.namaProduk;
    }
    getHargaProduk(){
        return this.hargaProduk;
    }
}

export {Produk}