import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCvdnwavBTYQzCUOPz2z0lCxWvo7MKRT18',
  authDomain: 'discover-e8074.firebaseapp.com',
  projectId: 'discover-e8074',
  storageBucket: 'discover-e8074.appspot.com',
  messagingSenderId: '437502034302',
  appId: '1:437502034302:web:e84ef4c3e2903d49c8732f',
  measurementId: 'G-6CD74XNG79',
});

export const auth = app.auth();
export default app;
