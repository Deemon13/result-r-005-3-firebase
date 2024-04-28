import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyALZ2O1YN-CxKEPWh8QpjiZDZYDMnGmO74',
	authDomain: 'result-r-005-3-firebase-908ad.firebaseapp.com',
	projectId: 'result-r-005-3-firebase-908ad',
	storageBucket: 'result-r-005-3-firebase-908ad.appspot.com',
	messagingSenderId: '995024827094',
	appId: '1:995024827094:web:aa42de52e8a083bbb18f77',
	databaseURL:
		'https://result-r-005-3-firebase-908ad-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
