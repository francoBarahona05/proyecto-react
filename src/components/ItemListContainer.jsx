import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import ItemList from './ItemList';

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const {idcategory} = useParams()
  console.log(idcategory) 
  let miCollection

  useEffect(() => {
    const db = getFirestore();
     miCollection = collection(db ,"products")

    if(idcategory == undefined){
      getDocs(miCollection).then((data)=>{
        const products = data.docs.map((product)=>({
          ...product.data(),
          id: product.id,
        }))
  
        setProducts(products)
        // console.log(products)
        // console.log(data.docs)
        // console.log({...data.docs[0].data(), id: data.docs[0].id})
      }) 
    }else{
       miCollection = query(collection(db , "products"),
      where("idCategory", "==" , idcategory)      
      );
      getDocs(miCollection).then((data)=>{
        const products = data.docs.map((product)=>({
          ...product.data(),
          id: product.id,
        }))
   
        setProducts(products)
      }) 
    }
  }, [idcategory])




//   const {idcategory}= useParams()
//   const [productos, setProductos]=useState([])

// useEffect(() => {
//   const productosPromise = new Promise((res , rej)=>{
//     setTimeout(() => {
//       res(data)
//     },2000 );
//    })

//    productosPromise.then((res)=>{ 
//     if (idcategory) {
//       setProductos(res.filter((item)=> item.category == idcategory))
//     }else{
//       setProductos(res)
//     }

//   })

// }, [idcategory])

  return (
    <div className='container__item__list'>
      {!products.length && " loading..."}
      {products.map((item)=>(
       <ItemList key={item.id} item={item}/>
      ))}
    </div>   )
}