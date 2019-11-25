import firebase from "firebase";

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDKoNJSPWeX2icGfsWuKn86VnWQC5xoDL8",
  authDomain: "test02-fd537.firebaseapp.com",
  databaseURL: "https://test02-fd537.firebaseio.com",
  projectId: "test02-fd537",
  storageBucket: "test02-fd537.appspot.com",
  messagingSenderId: "1086660608259",
  appId: "1:1086660608259:web:0a2e11deb25f08b4e76936"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class firebaseClass {


  getUserInfo(callback){
    firebase.database().ref("usuarios").child(firebase.auth().currentUser.uid).once('value').then(callback);

  }
  addAuthListener(callback){
    firebase.auth().onAuthStateChanged(callback);
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

  acessarPastaAbaixo(itemChild){
   return firebase.storage().ref().child(itemChild);

  }

  acessarPastaAcima(caminho){
   return caminho.parent.child(itemChild);
  }

}

export default new firebaseClass();
