import * as firebase from '../MainFirebase';


let firebaseRepo = new firebase.FirebaseRepository();




let hideFormControl = ()=>{
    $('#namaUpdate').hide();
    $('#hargaUpdate').hide();
    $('#submitUpdate').hide();
}


hideFormControl();

let showAllControl = (data)=>{
    $('#namaUpdate').show();
    $('#namaUpdate').val(data.nama);

    $('#hargaUpdate').show();
    $('#hargaUpdate').val(data.harga);

    $('#submitUpdate').show();
}

$('#cekProduk').click(()=>{

    if($('#kodeUpdate').val() === '' || $('#kodeUpdate').val() === undefined){
       alert('silahkan input kode Produk');
    }else{
        firebaseRepo.validateProduk($('#kodeUpdate').val(),(msg)=>{
            if(msg === null){
                console.log('Data tidak ada');
                hideFormControl();
            }else{
                showAllControl({
                    nama:msg.namaProduk,
                    harga:msg.hargaProduk});
            }
        });
    }


    return false;
});

let clearFormUpdate = ()=>{
    $('#kodeUpdate').val('');
    $('#namaUpdate').val('');
    $('#hargaUpdate').val('');
}

$('#submitUpdate').click(()=>{
   submitUpdate();
   return false;
});

let submitUpdate = ()=>{
    let modelKode = $('#kodeUpdate').val();
    let modelNama = $('#namaUpdate').val();
    let modelHarga = $('#hargaUpdate').val();


    if(modelKode === '' || modelKode === undefined
        || modelNama === '' || modelNama === undefined
        || modelHarga === '' || modelHarga === undefined ){
        alert('Masih ada form kosong');
    }else{
        firebaseRepo.updateData({
            kodeProduk: modelKode,
            namaProduk: modelNama,
            hargaProduk: modelHarga
        },(msg)=>{
            if(msg){
               console.log('Error : ' + msg);
            }else{
                console.log('update data berhasil');
                clearFormUpdate();
                hideFormControl();
            }
        });
    }

};

$('#submitData').click(()=>{
   submitData();

   return false;
});

let refresh = ()=>{
    $('#kodeP').val('');
    $('#namaP').val('');
    $('#hargaP').val('');
}

let submitData = ()=>{
    let modelKode = $('#kodeP').val();
    let modelNama = $('#namaP').val();
    let modelHarga = $('#hargaP').val();

    if(modelKode === '' || modelKode === undefined
    || modelNama === '' || modelNama === undefined
    || modelHarga === '' || modelHarga === undefined ){
      alert('Masih ada form kosong');
    }else{
        firebaseRepo.postData({
            kodeProduk : modelKode,
            namaProduk : modelNama,
            hargaProduk : modelHarga
        },(msg)=>{
            alert(msg);
            refresh();
        })
    }

};


