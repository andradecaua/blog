import firebase from  "firebase/compat/app"
import "firebase/compat/database"


const firebaseConfig = {
    apiKey: "AIzaSyCAfIiUyNE3gev8vk9APOml7r5ZJRUm2rI",
    authDomain: "mynews-89f27.firebaseapp.com",
    databaseURL: "https://mynews-89f27-default-rtdb.firebaseio.com",
    projectId: "mynews-89f27",
    storageBucket: "mynews-89f27.appspot.com",
    messagingSenderId: "277320254564",
    appId: "1:277320254564:web:f425e6d52aa2197e38cb71"
}

const app = firebase.initializeApp(firebaseConfig)

const database = firebase.database()


export {database}