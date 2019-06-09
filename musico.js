firebase.initializeApp({
    apiKey: "AIzaSyBVz6AtYXwQ-mgyYdKlHeG_rb34GMkylCw",
    authDomain: "eva2-c4a90.firebaseapp.com",
    projectId: "eva2-c4a90"
  });

   // Initialize Cloud Firestore through Firebase
   var db = firebase.firestore();

   function agregarDatos(){

    var musico = document.getElementById("musico").value;
    var titulo = document.getElementById("titulo").value;
    var genero = document.getElementById("genero").value;
    var año = document.getElementById("año").value;

    console.log("Datos: "+ musico + "-" + titulo + "-" + genero + "-" + año); 

    db.collection("musico").add({
        
        musico: musico,
        titulo: titulo,
        genero: genero,
        año: año
    })

    
    
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });test.firestore.js
    
}

var tablaa = document.getElementById('musico');
db.collection("musico").onSnapshot((querySnapshot) => {
    tabla.innerHTML = ' ';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().titulo}`);
        tabla.innerHTML += `
        <tr>
                    <th scope="row">${doc.id} </th>
                    <td>${doc.data().musico}</td>
                    <td>${doc.data().titulo}</td>
                    <td>${doc.data().genero}</td>
                    <td>${doc.data().año}</td>
                    <td><button class="waves-effect waves-light btn" onclick="eliminar('${doc.id}')"><i  class="material-icons">clear</i>Eliminar</button></td>
                    <td><button class="waves-effect waves-light btn" onclick="editar('${doc.id}','${doc.data().musico}','${doc.data().titulo}','${doc.data().genero}','${doc.data().año}')"><i  class="material-icons">autorenew</i>Editar</button></td>
        </tr>
        
        
        `
    });
})


//borrar datos
function eliminar(id){
    db.collection("musico").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });test.firestore.js
}


//actualizar datos


function editar(id, musico, titulo, genero, año){

document.getElementById('musico').value = musico;
document.getElementById('titulo').value = titulo;
document.getElementById('genero').value = genero;
document.getElementById('año').value = año;

var boton = document.getElementById('boton');
boton.innerHTML = 'Editar';

boton.onclick = function(){
    var washingtonRef = db.collection("musico").doc(id);
    // Set the "capital" field of the city 'DC'
var musico = document.getElementById('musico').value;
var titulo = document.getElementById('titulo').value;
var genero = document.getElementById('genero').value;
var año = document.getElementById('año').value;



return washingtonRef.update({
    musico: musico,
        titulo: titulo,
        genero: genero,
        año: año
})
.then(function() {
    console.log("Document successfully updated!");
    boton.innerHTML = 'Guardar';
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});test.firestore.js
}
}

    






