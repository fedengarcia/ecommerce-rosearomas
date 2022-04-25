import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore, limit} from "firebase/firestore";
import { collection, getDocs, orderBy, where, query, addDoc, doc,Timestamp, deleteDoc} from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"

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
  
  const carouselFraganciasDocs = await getDocs(query(collection(db,"CarouselFragancias"),orderBy("Nombre")));
  const carouselFraganciasImg = carouselFraganciasDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}});
  return(carouselFraganciasImg);
}

//Cambian las fotos para el responsive
export const getCarouselFraganciaSMLImg = async() => {
  
  const carouselFraganciasSMLDocs = await getDocs(query(collection(db,"CarouselFraganciasSML"),orderBy("Nombre")));
  const carouselFraganciasSMLImg = carouselFraganciasSMLDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}});
  return(carouselFraganciasSMLImg);
}

//OBTENER PRODUCTOS
export const getProductos = async(cat,limite) =>{
  if(cat==="Todo"){
    var productosDocs = await getDocs(query(collection(db,"Productos"),limit(limite)));
  }else{
    var productosDocs = await getDocs(query(collection(db,"Productos"),where("Categoria","==",cat),limit(limite)));
  }
  const productos = productosDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}})
  return(productos)
}


// DASHBOARD
const storage=getStorage(app)

export const addStorage=async(titulo,carpeta,imagen)=>{
  
  const storageRef= ref(storage,`${carpeta}/${titulo}.jpg`)
  uploadBytes(storageRef,imagen).then(()=>{
    console.log(getDownloadURL(ref(storage,`${carpeta}/${titulo}.jpg`)))
  })

}


//CARGAR UNA NUEVA ORDEN DE COMPRA
export const addNewOrder = async (order) => {

  const newOrder = {
      items: order.items,
      payer: order.payerInfoEspecial,
      // date: Timestamp.toDate(),
  };
  const doc = await addDoc(collection(db, "Orders"), newOrder);
  return(doc.id);
}



// REMOVE ORDER
export const removeOrder = async (id) => {
  await deleteDoc(doc(db, "Orders", id));
}