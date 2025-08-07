importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDVA13ojCeQNUijt_Pj7ZuWmtJGPObzNXo",
    authDomain: "helena-ee4e1.firebaseapp.com",
    databaseURL: "https://helena-ee4e1-default-rtdb.firebaseio.com",
    projectId: "helena-ee4e1",
    storageBucket: "helena-ee4e1.firebasestorage.app",
    messagingSenderId: "947357945485",
    appId: "1:947357945485:web:49b49817142083b783dcc4",
    measurementId: "G-CL3MSQQKDS"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/vite.svg'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
