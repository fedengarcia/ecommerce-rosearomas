import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { collection, getDocs, orderBy } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAfSPLiF53AwxpbFsL9RQjamXZaBC49lKU",
    authDomain: "rosepagina.firebaseapp.com",
    projectId: "rosepagina",
    storageBucket: "rosepagina.appspot.com",
    messagingSenderId: "552005559733",
    appId: "1:552005559733:web:1b141a0a54400c4c9b25fc"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getCarouselImg = async() => {

  const carouselDocs = await getDocs(collection(db, "Carousel"));
  const carouselImg = carouselDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}});
  return(carouselImg);
}

export const getCarouselFraganciaImg = async() => {

  const carouselFraganciasDocs = await getDocs(collection(db, "CarouselFragancias"));
  const carouselFraganciasImg = carouselFraganciasDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}});
  return(carouselFraganciasImg);
}

//Cambian las fotos para el responsive
export const getCarouselFraganciaSMLImg = async() => {
  
  const carouselFraganciasSMLDocs = await getDocs(collection(db,"CarouselFraganciasSML"),orderBy("Nombre"));
  const carouselFraganciasSMLImg = carouselFraganciasSMLDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}});
  return(carouselFraganciasSMLImg);
}