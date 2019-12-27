import firebase from "firebase";
// Your web app's Firebase configuration
var fConfig = {
    apiKey: "AIzaSyCKxyOfRDHmdFHhZAu0olci77aPfoQKaR0",
    authDomain: "cadastrofirebase-b1595.firebaseapp.com",
    databaseURL: "https://cadastrofirebase-b1595.firebaseio.com",
    projectId: "cadastrofirebase-b1595",
    storageBucket: "cadastrofirebase-b1595.appspot.com",
    messagingSenderId: "272037910661",
    appId: "1:272037910661:web:62a5b29f95bca9b773b1ec"
};
// Initialize Firebase
firebase.initializeApp(fConfig);

class firebaseClass {
 

    getUserInfo(callback) {
        firebase.database().ref("usuarios").child(firebase.auth().currentUser.uid).once('value').then(callback);

    }
    addAuthListener(callback) {
        firebase.auth().onAuthStateChanged(callback);
    }

    criarUsuario(email, senha){

        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .catch((error) => {
          alert(error.code);
        })
    }
    login(email, senha, callback) {
        return firebase.auth().signInWithEmailAndPassword(email, senha)
            .catch((error) => {
                if (error.code == "auth/wrong-password") {
                    alert("Usuáriou ou senha inválido")
                } else {
                    alert("Deu ruim em Logar()-" + error.code);
                }
            })
    }

    sair() {
        firebase.auth().signOut();
    }

    escutar() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                alert("Está logado ")
                return true;
            } else {
                alert("Não está logado ")
                return false;
            }
        });
    }

    uidInfo() {
        return firebase.auth().currentUser.uid;
    }

    buscarUsuario(campo, chaveUid) {
        firebase.database().ref(campo).child(chaveUid).once('value')
            .then((snapshot) => {
                return snapshot.val();
            })
    }

    acessarPastaAbaixo(itemChild) {
        return firebase.storage().ref().child(itemChild);

    }

    acessarPastaAcima(caminho) {
        return caminho.parent.child(itemChild);
    }

}
export default firebase;
