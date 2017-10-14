import * as firebaseRepo from './configure/FirebaseConfiguration';
import {Produk} from "./domain/Produk";

let firebaseCRUD = firebaseRepo.firebaseConfig.database();


class FirebaseRepository {
    constructor(){
        this.firebaseCRUD = firebaseCRUD;
    }

    postData(p,callback){
        let produk = new Produk(p.kodeProduk,p.namaProduk,p.hargaProduk);
        this.firebaseCRUD.ref('/produk/'+produk.getKodeProduk()).set({
            namaProduk : produk.getNamaProduk(),
            hargaProduk : produk.getHargaProduk()
        },(err)=>{
            if(err){
                callback('Error :' + err);
            }else{
                callback('Post data berhasil');
            }
        });
    }

    validateProduk(kodeProduk,callback){
       let dataValid = null;
       this.firebaseCRUD.ref('/produk').once('value',(dataSnapshot)=>{
           if(dataSnapshot.hasChild(kodeProduk.toString())){
               dataValid  = {
                   namaProduk : dataSnapshot.child(kodeProduk.toString()).child('namaProduk').val(),
                   hargaProduk : dataSnapshot.child(kodeProduk.toString()).child('hargaProduk').val()
               };
           }
       }).then((ok)=>{
           callback(dataValid);
       },(err)=>{
           callback(dataValid);
       });
    }

    updateData(p,callback){
        let produk = new Produk(p.kodeProduk,p.namaProduk,p.hargaProduk);
        this.firebaseCRUD.ref('/produk/'+produk.getKodeProduk()).update({
            namaProduk : produk.getNamaProduk(),
            hargaProduk: produk.getHargaProduk()
        },(err)=>{
            callback(err);
        });
    }

    deleteData(kodeProduk){
        this.firebaseCRUD.ref('/produk/'+kodeProduk).then((success)=>{
            console.log('Delete Data berhasil');
        },(error)=>{
            console.log('Delete data gagal');
        });
    }
}

export {FirebaseRepository}