import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDoedB4ife-QTf0jWlS2FyYOF3oGqkN7x4',
    authDomain: 'levis-new-project.firebaseapp.com',
    databaseURL: 'https://levis-new-project-default-rtdb.firebaseio.com',
    projectId: 'levis-new-project',
    storageBucket: 'levis-new-project.appspot.com',
    messagingSenderId: '856605216726',
    appId: '1:856605216726:web:70aa09cdfb2534bdaa5e77',
    measurementId: 'G-RYCBM8EF61'
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
