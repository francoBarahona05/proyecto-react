import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const {iditem} = useParams()   
  
  useEffect(() => {
    const db = getFirestore();
    const ref = doc(db , "products", iditem)

    getDoc(ref).then((item)=>{
      const x = {
        ...item.data(),
        id: item.id,
      }

      setProduct(x)
 
    });
  }, [iditem])



  return (
    <div className='item__detail'>
    <ItemDetail item={product}/>
    </div> 
  )
}