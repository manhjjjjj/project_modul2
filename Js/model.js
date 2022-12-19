const model ={};
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyC74XmXgNHBq1Ez-DOAOdULZmW4tJj_Odc",
    authDomain: "project-02-7ffcc.firebaseapp.com",
    projectId: "project-02-7ffcc",
    storageBucket: "project-02-7ffcc.appspot.com",
    messagingSenderId: "327270544262",
    appId: "1:327270544262:web:2ced6670c85bdfa0b53207",
    measurementId: "G-5Q9PKVM38B"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

model.register = async (data) =>{
    console.log(1111111111111);
    try {
        let dataUser ='';
        console.log("model",data);
        let respos = await auth.createUserWithEmailAndPassword(data.email,data.passWord);
        view.setScreenActive("login");
        auth.currentUser.sendEmailVerification();

        await firebase.auth().currentUser.updateProfile({
            displayName:data.firstName + data.lastName
        })
        dataUser = auth.currentUser.displayName;
        view.dataUser(dataUser);

        if (respos && auth.currentUser.emailVerified) {
            view.setScreenActive("login");
            
        } else {
            alert("plaee email Verified")
        }

    } catch (error) {
        alert(error.message);
    }
}

model.login = async (data) =>{
    try {
        let respose = await auth.signInWithEmailAndPassword(data.email,data.passWord);
        auth.currentUser.sendEmailVerification();
        view.setScreenActive("login");
        if (respose && auth.currentUser.emailVerified) {
            view.setScreenActive("web");

        } else {
            alert("plaee email Verified")
        }
        
    } catch (error) {
        alert(error.message);
    }
}