import React from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCH1_HcsBpLrKmMnwtvQxLra_Eq_wzhm-g",
   authDomain: "fluxusevents-45161.firebaseapp.com",
   projectId: "fluxusevents-45161",
   storageBucket: "fluxusevents-45161.appspot.com",
   messagingSenderId: "922255985009",
   appId: "1:922255985009:web:62bbe7bf93f7783c658ed0",
   measurementId: "G-VR3J7CDPSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default function BlobComponent({ blob }) {

   const [fileUrl, setFileUrl] = React.useState(null);

   const print = async () => {

      var file = new File([blob], "file_name", { lastModified: 1534584790000 });
      setFileUrl(file)
      console.log(file);
      return
      const storageRef = ref(storage, `/files/cert`)
      uploadBytes(storageRef, file).then((snapshot) => {
         console.log('Uploaded a blob or file!');
      });

   }

   return (
      <div>
         <iframe src={fileUrl} title="file" frameBorder="0"></iframe>

      </div>
   )
}
