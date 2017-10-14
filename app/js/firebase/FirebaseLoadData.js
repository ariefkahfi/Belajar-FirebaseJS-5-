import * as firebase from '../configure/FirebaseConfiguration';


let fb = firebase.firebaseConfig.database();


let loadData = ()=>{
    fb.ref('/produk').on('value',(dataSnapshot)=>{
        $('#table-produk').empty();
        $('#table-produk').append(
            `<tr>
                <td>Kode Produk</td>
                <td>Nama Produk</td>
                <td>Harga Produk</td>
             </tr>`
        );

        dataSnapshot.forEach((childs)=>{
           $('#table-produk').append(
             `<tr>
                <td>${childs.key}</td>
                <td>${childs.child('namaProduk').val()}</td>
                <td>${childs.child('hargaProduk').val()}</td>
              </tr>`
           );
        });
    });
};

loadData();

$('#deleteButton').click(()=>{
    let modelKodeDelete = $('#deleteKode').val();

    if(modelKodeDelete === '' || modelKodeDelete === undefined){
      alert('form masih kosong');
    }else{
        fb.ref('/produk/'+modelKodeDelete).remove((msg)=>{
           if(msg){
             console.log('Data gagal dihapus');
           }else{
             console.log('Data berhasil dihapus');
           }
        });
    }

    return false;
});